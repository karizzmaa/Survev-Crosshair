// app.js
const App = (() => {
  // This is the scale at which the thumbnails of the crosshairs will load at
  const THUMB_SCALE = 1.5; //lower number so it fits
  const THUMB_SIZE = 80;

  let _activeTab = "create";

  function init() {
    Renderer.init("crosshair-canvas");
    _buildSidebar();
    _setupTabs();
    _setupRandomize();
    _setupImageImport();
    _setupImportString();
    ExportManager.initListeners();
    Gallery.init();

    _selectCrosshair("plus");

    // splash out
    setTimeout(() => {
      const splash = document.getElementById("splash");
      if (!splash) return;
      splash.classList.add("hidden");
      setTimeout(() => splash.remove(), 600);
    }, 650);
  }

  // tabs

  function _setupTabs() {
    const btns = document.querySelectorAll(".tab-btn");
    const ind = document.querySelector(".tab-indicator");

    function moveIndicator(btn) {
      const groupRect = btn.closest(".tab-group").getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      ind.style.width = btnRect.width + "px";
      ind.style.left = btnRect.left - groupRect.left + "px";
    }

    const activeBtn = document.querySelector(".tab-btn.active");
    if (activeBtn) requestAnimationFrame(() => moveIndicator(activeBtn));

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        switchTab(btn.dataset.tab);
        moveIndicator(btn);
      });
    });

    window.addEventListener("resize", () => {
      const active = document.querySelector(".tab-btn.active");
      if (active) moveIndicator(active);
    });
  }

  function switchTab(tab) {
    _activeTab = tab;

    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.tab === tab);
    });

    document.querySelectorAll(".tab-panel").forEach((p) => {
      const isActive = p.id === `tab-${tab}`;
      if (isActive) {
        p.style.display = "flex";
        p.getBoundingClientRect();
        p.classList.add("active");
      } else {
        p.classList.remove("active");
        p.addEventListener("transitionend", function once() {
          if (!p.classList.contains("active")) p.style.display = "none";
          p.removeEventListener("transitionend", once);
        });
      }
    });
  }

  // sidebar

  function _buildSidebar() {
    const grid = document.getElementById("crosshair-grid");
    grid.innerHTML = "";

    CROSSHAIR_TYPES.forEach((type) => {
      const cell = document.createElement("div");
      cell.className = "crosshair-cell";
      cell.dataset.id = type.id;
      cell.title = type.name;

      // retina aware
      const dpr = window.devicePixelRatio || 1;
      const canvas = document.createElement("canvas");
      canvas.width = THUMB_SIZE * dpr;
      canvas.height = THUMB_SIZE * dpr;
      canvas.style.width = THUMB_SIZE + "px";
      canvas.style.height = THUMB_SIZE + "px";

      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);

      const defaults = CROSSHAIR_DEFAULTS[type.id] || CROSSHAIR_DEFAULTS.plus;
      renderCrosshair(canvas, type.id, defaults, THUMB_SCALE);

      const label = document.createElement("span");
      label.className = "crosshair-cell-name";
      label.textContent = type.name;

      cell.appendChild(canvas);
      cell.appendChild(label);
      cell.addEventListener("click", () => _selectCrosshair(type.id));
      grid.appendChild(cell);
    });
  }

  function _selectCrosshair(typeId) {
    document.querySelectorAll(".crosshair-cell").forEach((c) => {
      c.classList.toggle("selected", c.dataset.id === typeId);
    });

    const typeDef = CROSSHAIR_TYPES.find((t) => t.id === typeId);
    const nameLabel = document.getElementById("settings-name-label");
    if (nameLabel && typeDef) nameLabel.textContent = typeDef.name;

    Renderer.setType(typeId);
    Settings.build(typeId, Renderer.getSettings());
  }

  // randomize

  function _setupRandomize() {
    document.getElementById("randomize-btn").addEventListener("click", () => {
      const types = CROSSHAIR_TYPES.filter((t) => t.id !== "custom_image");
      const random = types[Math.floor(Math.random() * types.length)];
      _selectCrosshair(random.id);
      const hue = Math.floor(Math.random() * 360);
      const hue2 = (hue + 120 + Math.floor(Math.random() * 120)) % 360;
      const sat = 60 + Math.floor(Math.random() * 40);
      const lit = 55 + Math.floor(Math.random() * 30);
      const lit2 = 8 + Math.floor(Math.random() * 15);

      const fill = `hsl(${hue}, ${sat}%, ${lit}%)`;
      const stroke = `hsl(${hue2}, ${sat}%, ${lit2}%)`;

      const settings = Renderer.getSettings();
      const jitter = (key) => {
        const v = settings[key];
        if (typeof v !== "number") return v;
        const factor = 0.7 + Math.random() * 0.6;
        const schema = _getSchemaForKey(random.id, key);
        if (!schema) return v;
        return Math.max(
          schema.min ?? 0,
          Math.min(schema.max ?? 999, parseFloat((v * factor).toFixed(2))),
        );
      };

      const updates = {};
      [
        "length",
        "thickness",
        "gap",
        "radius",
        "strokeWidth",
        "dotSize",
      ].forEach((k) => {
        if (settings[k] !== undefined) updates[k] = jitter(k);
      });

      if (settings.fillColor !== undefined) updates.fillColor = fill;
      if (settings.strokeColor !== undefined) updates.strokeColor = stroke;

      Renderer.bulkUpdate(updates);
      Settings.build(random.id, Renderer.getSettings());
    });
  }

  function _getSchemaForKey(type, key) {
    const schemaMod = Settings;
    const bounds = {
      length: { min: 1, max: 28 },
      thickness: { min: 0.5, max: 8 },
      gap: { min: 0, max: 20 },
      radius: { min: 2, max: 30 },
      strokeWidth: { min: 0, max: 4 },
      dotSize: { min: 0.5, max: 6 },
      scale: { min: 0.5, max: 2 },
    };
    return bounds[key] || null;
  }

  //  image import

  function _setupImageImport() {
    document
      .getElementById("import-image-input")
      .addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const img = new Image();
        img.onload = () => {
          _selectCrosshair("custom_image");
          Renderer.updateSetting("imageData", img);
          Renderer.redraw();
        };
        img.src = URL.createObjectURL(file);
        e.target.value = "";
      });
  }

  //  import from string
  function _setupImportString() {
    const btn = document.getElementById("import-string-btn");
    const input = document.getElementById("import-string-input");
    const err = document.getElementById("import-string-error");

    if (!btn || !input) return;

    btn.addEventListener("click", () => {
      const str = input.value.trim();
      if (!str) return;

      const data = ExportManager.parseExportString(str);

      if (!data) {
        err.textContent =
          "Invalid string - make sure you copied the whole thing";
        err.style.display = "block";
        return;
      }

      err.style.display = "none";
      input.value = "";

      // load the crosshair
      _selectCrosshair(data.type);
      Renderer.bulkUpdate(data.settings);
      Settings.build(data.type, Renderer.getSettings());

      // set name
      const nameInput = document.getElementById("crosshair-name-input");
      if (nameInput && data.name) nameInput.value = data.name;

      // close
      document.getElementById("import-string-panel").style.display = "none";
    });

    // toggle panel visibility
    const toggleBtn = document.getElementById("import-string-toggle");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const panel = document.getElementById("import-string-panel");
        const isOpen = panel.style.display === "flex";
        panel.style.display = isOpen ? "none" : "flex";
        if (!isOpen) input.focus();
      });
    }

    // also handle enter key
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") btn.click();
    });
  }

  //  load preset from gallery

  function loadPreset(preset) {
    const base = {
      ...(CROSSHAIR_DEFAULTS[preset.type] || CROSSHAIR_DEFAULTS.plus),
    };
    const merged = { ...base, ...preset.settings };

    _selectCrosshair(preset.type);
    Renderer.bulkUpdate(merged);
    Settings.build(preset.type, Renderer.getSettings());
    Renderer.redraw();

    // set name to the preset name
    const nameInput = document.getElementById("crosshair-name-input");
    if (nameInput) nameInput.value = preset.name;
  }

  document.addEventListener("DOMContentLoaded", init);

  return { switchTab, loadPreset };
})();

// thats it yay
