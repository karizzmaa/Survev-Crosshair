// gallery.js

const Gallery = (() => {
  const CARD_SIZE = 128;
  const CARD_SCALE = 3;

  let _filter = "all";
  let _search = "";

  function init() {
    _buildGrid();
    _setupSearch();
    _setupFilters();
    document.getElementById("submit-btn").addEventListener("click", () => {
      ExportManager.openSubmitModal();
    });
  }

  function _buildGrid() {
    const grid = document.getElementById("gallery-grid");
    grid.innerHTML = "";

    const items = _filtered();

    if (!items.length) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);font-size:13px;font-weight:600;letter-spacing:0.03em;">
          Nothing found
        </div>`;
      return;
    }

    items.forEach((preset, i) => {
      const card = _buildCard(preset);
      card.style.animationDelay = `${i * 25}ms`;
      card.classList.add("fade-in");
      grid.appendChild(card);
    });
  }

  function _buildCard(preset) {
    const card = document.createElement("div");
    card.className = "gallery-card";
    const dpr = window.devicePixelRatio || 1;
    const canvas = document.createElement("canvas");
    canvas.width = CARD_SIZE * dpr;
    canvas.height = CARD_SIZE * dpr;
    canvas.style.width = CARD_SIZE + "px";
    canvas.style.height = CARD_SIZE + "px";

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);

    const baseSettings = {
      ...(CROSSHAIR_DEFAULTS[preset.type] || CROSSHAIR_DEFAULTS.plus),
    };
    const merged = { ...baseSettings, ...preset.settings };
    renderCrosshair(canvas, preset.type, merged, CARD_SCALE);

    // badge first tag is prioritised
    let badge = "";
    if (preset.tags.includes("featured"))
      badge = `<span class="badge featured">Featured</span>`;
    else if (preset.tags.includes("popular"))
      badge = `<span class="badge popular">Popular</span>`;
    else if (preset.tags.includes("newest"))
      badge = `<span class="badge new">New</span>`;

    // overlay on hover
    const overlay = document.createElement("div");
    overlay.className = "gallery-card-overlay";
    overlay.innerHTML = `
      <span class="gallery-card-name">${preset.name}</span>
      <span class="gallery-card-author">by ${preset.author || "piesimp"}</span>
      <span class="gallery-card-use">Use This</span>
    `;

    if (badge) card.insertAdjacentHTML("beforeend", badge);
    card.appendChild(canvas);
    card.appendChild(overlay);

    card.addEventListener("click", () => {
      App.loadPreset(preset);
      App.switchTab("create");
    });

    return card;
  }

  function _filtered() {
    return GALLERY_PRESETS.filter((p) => {
      const matchFilter = _filter === "all" || p.tags.includes(_filter);
      const matchSearch =
        !_search ||
        p.name.toLowerCase().includes(_search.toLowerCase()) ||
        (p.author || "").toLowerCase().includes(_search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }

  function _setupSearch() {
    document.getElementById("gallery-search").addEventListener("input", (e) => {
      _search = e.target.value;
      _buildGrid();
    });
  }

  function _setupFilters() {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        _filter = btn.dataset.filter;
        _buildGrid();
      });
    });
  }

  return { init };
})();
