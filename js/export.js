// export.js
const ExportManager = (() => {
  // string encode/decode
  // the format is like this: base64(JSON({ v: 1, name, type, settings }))
  // v is schema version

  function buildExportString(name) {
    const data = {
      v: 1,
      name: name || "My Crosshair",
      type: Renderer.getType(),
      settings: _serializableSettings(Renderer.getSettings()),
    };
    try {
      return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    } catch (e) {
      // imageData cant be serialized, strip it
      data.settings.imageData = null;
      return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    }
  }

  function parseExportString(str) {
    try {
      const json = JSON.parse(decodeURIComponent(escape(atob(str.trim()))));
      if (!json.type || !json.settings) throw new Error("bad format");
      return json;
    } catch (e) {
      return null;
    }
  }

  function _serializableSettings(s) {
    const out = { ...s };
    if (out.imageData) out.imageData = null;
    return out;
  }

  //  modal open/close

  function openExportModal() {
    const modal = document.getElementById("export-modal");
    const nameInput = document.getElementById("crosshair-name-input");
    const sizeInput = document.getElementById("export-size-input");
    const sizeLabel = document.getElementById("export-size-label");

    // sync
    _syncModalPreview();

    // reset
    document.getElementById("bookmarklet-container").style.display = "none";
    document.getElementById("userscript-container").style.display = "none";
    document.getElementById("string-container").style.display = "none";

    // update
    document.getElementById("modal-preview-name").textContent =
      nameInput.value || "My Crosshair";

    // init size slider label
    if (sizeInput && sizeLabel) {
      sizeLabel.textContent = sizeInput.value + "px";
    }

    modal.classList.add("open");
  }

  function closeExportModal() {
    document.getElementById("export-modal").classList.remove("open");
  }

  function openSubmitModal() {
    const str = document.getElementById("submit-export-string");
    const name =
      document.getElementById("crosshair-name-input")?.value ||
      document.getElementById("submit-name-input")?.value ||
      "My Crosshair";

    if (str) str.value = buildExportString(name);

    document.getElementById("submit-modal").classList.add("open");
  }

  function closeSubmitModal() {
    document.getElementById("submit-modal").classList.remove("open");
  }

  function _syncModalPreview() {
    const mc = document.getElementById("modal-canvas");
    if (!mc) return;
    const dpr = window.devicePixelRatio || 1;
    mc.width = 128 * dpr;
    mc.height = 128 * dpr;
    mc.style.width = "128px";
    mc.style.height = "128px";
    const ctx = mc.getContext("2d");
    ctx.scale(dpr, dpr);
    const scale = Renderer.DRAW_SCALE * (128 / Renderer.LOGICAL);
    renderCrosshair(mc, Renderer.getType(), Renderer.getSettings(), scale);
  }

  // export functions
  function _getExportSize() {
    const input = document.getElementById("export-size-input");
    return input ? parseInt(input.value, 10) : 128;
  }

  async function exportPNG() {
    const name =
      document.getElementById("crosshair-name-input").value || "crosshair";
    const size = _getExportSize();
    const blob = await Renderer.exportPNG(size);
    _dl(URL.createObjectURL(blob), `${_safe(name)}.png`);
  }

  function exportSVG() {
    const name =
      document.getElementById("crosshair-name-input").value || "crosshair";
    const size = _getExportSize();
    const svg = Renderer.exportSVG(size);
    const blob = new Blob([svg], { type: "image/svg+xml" });
    _dl(URL.createObjectURL(blob), `${_safe(name)}.svg`);
  }

  async function generateBookmarklet() {
    const name =
      document.getElementById("crosshair-name-input").value || "My Crosshair";
    const size = _getExportSize();
    const b64 = await Renderer.exportBase64(size);
    const hot = Math.floor(size / 2);

    const code = `(function(){var w=document.querySelector("#game-area-wrapper");var c='url(${b64}) ${hot} ${hot}, crosshair';if(w){w.style.cursor=c;w.style.setProperty('cursor',c,'important');}else{document.body.style.cursor=c;}})()`;
    const href = "javascript:" + encodeURIComponent(code);

    const container = document.getElementById("bookmarklet-container");
    const link = document.getElementById("bookmarklet-link");
    const display = document.getElementById("bookmarklet-code-display");

    link.href = href;
    link.textContent = name;
    display.textContent = code.substring(0, 90) + "…";
    container.style.display = "flex";

    document.getElementById("copy-bookmarklet").onclick = () => {
      _copy(code);
      _flash(document.getElementById("copy-bookmarklet"), "Copied!");
    };
  }

  async function generateUserscript() {
    const name =
      document.getElementById("crosshair-name-input").value || "My Crosshair";
    const size = _getExportSize();
    const b64 = await Renderer.exportBase64(size);
    const hot = Math.floor(size / 2);

    const script = `// ==UserScript==
// @name         ${name}
// @namespace    https://survev.io/
// @version      1.0
// @description  ${name} crosshair for Survev.io
// @author       piesimp
// @match        *://survev.io/*
// @match        *://*.survev.io/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  const CURSOR = '${b64}';
  const CSS    = \`url(\${CURSOR}) ${hot} ${hot}, crosshair\`;

  function apply() {
    const el = document.querySelector('#game-area-wrapper');
    if (el) el.style.setProperty('cursor', CSS, 'important');
  }

  apply();
  new MutationObserver(apply).observe(document.body, { childList: true, subtree: true });
})();
`;

    const area = document.getElementById("userscript-code");
    area.value = script;
    document.getElementById("userscript-container").style.display = "flex";

    document.getElementById("copy-userscript").onclick = () => {
      _copy(script);
      _flash(document.getElementById("copy-userscript"), "Copied!");
    };
  }

  function generateExportString() {
    const name =
      document.getElementById("crosshair-name-input").value || "My Crosshair";
    const str = buildExportString(name);

    const container = document.getElementById("string-container");
    const display = document.getElementById("string-display");

    display.value = str;
    container.style.display = "flex";

    document.getElementById("copy-string").onclick = () => {
      _copy(str);
      _flash(document.getElementById("copy-string"), "Copied!");
    };
  }

  // helpers

  function _dl(url, filename) {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function _safe(name) {
    return name.replace(/[^a-z0-9_\-]/gi, "_").toLowerCase() || "crosshair";
  }

  function _copy(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => _copyFallback(text));
    } else {
      _copyFallback(text);
    }
  }

  function _copyFallback(text) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }

  function _flash(btn, msg) {
    const orig = btn.textContent;
    btn.textContent = msg;
    btn.style.color = "var(--accent-primary)";
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.color = "";
    }, 1600);
  }

  // wire up listeners

  function initListeners() {
    document
      .getElementById("export-btn")
      .addEventListener("click", openExportModal);
    document
      .getElementById("modal-close")
      .addEventListener("click", closeExportModal);
    document.getElementById("export-modal").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeExportModal();
    });

    document.getElementById("export-png").addEventListener("click", exportPNG);
    document.getElementById("export-svg").addEventListener("click", exportSVG);
    document
      .getElementById("export-bookmarklet")
      .addEventListener("click", generateBookmarklet);
    document
      .getElementById("export-userscript")
      .addEventListener("click", generateUserscript);
    document
      .getElementById("export-string-btn")
      .addEventListener("click", generateExportString);

    // export size slider
    const sizeInput = document.getElementById("export-size-input");
    const sizeLabel = document.getElementById("export-size-label");
    if (sizeInput && sizeLabel) {
      sizeInput.addEventListener("input", () => {
        sizeLabel.textContent = sizeInput.value + "px";
      });
    }

    document
      .getElementById("crosshair-name-input")
      .addEventListener("input", (e) => {
        document.getElementById("modal-preview-name").textContent =
          e.target.value || "My Crosshair";
        const link = document.getElementById("bookmarklet-link");
        if (link) link.textContent = e.target.value || "My Crosshair";
      });

    // submit modal
    document
      .getElementById("submit-modal-close")
      .addEventListener("click", closeSubmitModal);
    document.getElementById("submit-modal").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeSubmitModal();
    });
    document
      .getElementById("copy-export-string")
      .addEventListener("click", () => {
        const val = document.getElementById("submit-export-string").value;
        _copy(val);
        _flash(document.getElementById("copy-export-string"), "Copied!");
      });
    document.getElementById("copy-discord").addEventListener("click", () => {
      _copy("piesimp");
      _flash(document.getElementById("copy-discord"), "Copied!");
    });
  }

  return {
    initListeners,
    openExportModal,
    openSubmitModal,
    buildExportString,
    parseExportString,
    _syncModalPreview,
  };
})();
