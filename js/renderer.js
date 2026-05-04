// renderer.js
// canvas is 512 normal and 1024 for retina
const Renderer = (() => {
  let _canvas = null;
  let _ctx = null;
  let _type = "plus";
  let _settings = {};
  let _zoom = 1;
  let _panX = 0;
  let _panY = 0;
  let _dragging = false;
  let _lastMX = 0;
  let _lastMY = 0;
  const LOGICAL = 512;
  const DRAW_SCALE = 6;
  const MIN_ZOOM = 0.25;
  const MAX_ZOOM = 12;
  function init(canvasId) {
    _canvas = document.getElementById(canvasId);

    // retina / hidpi support
    const dpr = window.devicePixelRatio || 1;
    _canvas.width = LOGICAL * dpr;
    _canvas.height = LOGICAL * dpr;
    _canvas.style.width = LOGICAL + "px";
    _canvas.style.height = LOGICAL + "px";

    _ctx = _canvas.getContext("2d");
    _ctx.scale(dpr, dpr);

    _setupPanZoom();
    _setupZoomButtons();
  }

  function setType(type) {
    _type = type;
    _settings = { ...(CROSSHAIR_DEFAULTS[type] || CROSSHAIR_DEFAULTS.plus) };
    redraw();
  }

  function updateSetting(key, value) {
    _settings[key] = value;
    redraw();
  }

  function bulkUpdate(newSettings) {
    _settings = { ..._settings, ...newSettings };
    redraw();
  }

  function getSettings() {
    return { ..._settings };
  }
  function getType() {
    return _type;
  }

  function redraw() {
    renderCrosshair(_canvas, _type, _settings, DRAW_SCALE);

    // sync modal preview
    const modalCanvas = document.getElementById("modal-canvas");
    if (modalCanvas && modalCanvas.offsetParent !== null) {
      renderCrosshair(
        modalCanvas,
        _type,
        _settings,
        DRAW_SCALE * (128 / LOGICAL),
      );
    }
  }

  //  zoom nd pan
  function _setZoom(z) {
    _zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z));
    _applyTransform();
    document.getElementById("zoom-label").textContent =
      Math.round(_zoom * 100) + "%";
  }

  function _applyTransform() {
    const vp = document.getElementById("canvas-viewport");
    if (vp)
      vp.style.transform = `translate(${_panX}px, ${_panY}px) scale(${_zoom})`;
  }

  function _setupZoomButtons() {
    document
      .getElementById("zoom-in")
      .addEventListener("click", () => _setZoom(_zoom * 1.3));
    document
      .getElementById("zoom-out")
      .addEventListener("click", () => _setZoom(_zoom / 1.3));
    document.getElementById("reset-view").addEventListener("click", () => {
      _zoom = 1;
      _panX = 0;
      _panY = 0;
      _applyTransform();
      document.getElementById("zoom-label").textContent = "100%";
    });
    document.getElementById("fit-view").addEventListener("click", () => {
      const wrapper = document.getElementById("canvas-wrapper");
      const fit = Math.min(
        (wrapper.clientWidth - 60) / LOGICAL,
        (wrapper.clientHeight - 60) / LOGICAL,
        1,
      );
      _panX = 0;
      _panY = 0;
      _setZoom(fit);
    });
  }

  function _setupPanZoom() {
    const wrapper = document.getElementById("canvas-wrapper");

    wrapper.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        _setZoom(_zoom * (e.deltaY > 0 ? 0.9 : 1.1));
      },
      { passive: false },
    );

    wrapper.addEventListener("mousedown", (e) => {
      _dragging = true;
      _lastMX = e.clientX;
      _lastMY = e.clientY;
    });
    window.addEventListener("mousemove", (e) => {
      if (!_dragging) return;
      _panX += e.clientX - _lastMX;
      _panY += e.clientY - _lastMY;
      _lastMX = e.clientX;
      _lastMY = e.clientY;
      _applyTransform();
    });
    window.addEventListener("mouseup", () => {
      _dragging = false;
    });

    // touch pinch zoom
    let lastDist = null;
    wrapper.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 1) {
          _dragging = true;
          _lastMX = e.touches[0].clientX;
          _lastMY = e.touches[0].clientY;
        }
        if (e.touches.length === 2) {
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          lastDist = Math.hypot(dx, dy);
        }
      },
      { passive: true },
    );
    wrapper.addEventListener(
      "touchmove",
      (e) => {
        if (e.touches.length === 1 && _dragging) {
          _panX += e.touches[0].clientX - _lastMX;
          _panY += e.touches[0].clientY - _lastMY;
          _lastMX = e.touches[0].clientX;
          _lastMY = e.touches[0].clientY;
          _applyTransform();
        }
        if (e.touches.length === 2 && lastDist) {
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          const d = Math.hypot(dx, dy);
          _setZoom(_zoom * (d / lastDist));
          lastDist = d;
        }
      },
      { passive: true },
    );
    wrapper.addEventListener(
      "touchend",
      () => {
        _dragging = false;
        lastDist = null;
      },
      { passive: true },
    );
  }

  //  exports

  function exportPNG(exportSize = 128) {
    const off = _makeOffscreen(exportSize);
    return new Promise((r) => off.toBlob(r, "image/png"));
  }

  function exportSVG(exportSize = 128) {
    const off = _makeOffscreen(exportSize);
    const data = off.toDataURL("image/png");
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${exportSize}" height="${exportSize}" viewBox="0 0 ${exportSize} ${exportSize}">
  <!-- generated by Survev Crosshair Generator -->
  <image href="${data}" width="${exportSize}" height="${exportSize}"/>
</svg>`;
  }

  async function exportBase64(exportSize = 128) {
    return _makeOffscreen(exportSize).toDataURL("image/png");
  }

  function _makeOffscreen(size) {
    const off = document.createElement("canvas");
    off.width = size;
    off.height = size;
    const scale = DRAW_SCALE * (size / LOGICAL);
    renderCrosshair(off, _type, _settings, scale);
    return off;
  }

  return {
    init,
    setType,
    updateSetting,
    bulkUpdate,
    getSettings,
    getType,
    redraw,
    exportPNG,
    exportSVG,
    exportBase64,
    DRAW_SCALE,
    LOGICAL,
  };
})();
