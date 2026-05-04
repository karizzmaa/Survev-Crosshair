// crosshairs.js

const CROSSHAIR_TYPES = [
  { id: "plus", name: "Plus" },
  { id: "cross_dot", name: "Cross Dot" },
  { id: "circle", name: "Circle" },
  { id: "dot", name: "Dot" },
  { id: "x_shape", name: "X Shape" },
  { id: "chevron", name: "Chevron" },
  { id: "triangle", name: "Triangle" },
  { id: "hollow_circle", name: "Hollow" },
  { id: "segmented", name: "Segmented" },
  { id: "sniper", name: "Sniper" },
  { id: "tactical", name: "Tactical" },
  { id: "scifi", name: "Sci-fi" },
  { id: "cursor", name: "Cursor" },
  { id: "dynamic", name: "Dynamic" },
  { id: "esports", name: "Esports" },
  { id: "retro", name: "Retro" },
  { id: "minimal_ring", name: "Ring" },
  { id: "custom_image", name: "Image" },
];

const CROSSHAIR_DEFAULTS = {
  plus: {
    thickness: 2,
    gap: 4,
    length: 8,
    fillColor: "#ffffff",
    strokeColor: "#000000",
    strokeWidth: 1,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: false,
    dotSize: 2,
    shadow: false,
    glow: false,
    scale: 1,
  },
  cross_dot: {
    thickness: 2,
    gap: 3,
    length: 7,
    fillColor: "#ffffff",
    strokeColor: "#000000",
    strokeWidth: 1,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: true,
    dotSize: 2.5,
    shadow: false,
    glow: false,
    scale: 1,
  },
  circle: {
    radius: 8,
    strokeWidth: 2,
    fillColor: "transparent",
    strokeColor: "#ffffff",
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: true,
    dotSize: 2,
    shadow: false,
    glow: false,
    scale: 1,
  },
  dot: {
    dotSize: 4,
    fillColor: "#ffffff",
    strokeColor: "#000000",
    strokeWidth: 1,
    opacity: 1,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    shadow: false,
    glow: false,
    scale: 1,
  },
  x_shape: {
    thickness: 2,
    length: 8,
    fillColor: "#ffffff",
    strokeColor: "#000000",
    strokeWidth: 1,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: false,
    dotSize: 2,
    shadow: false,
    glow: false,
    scale: 1,
  },
  chevron: {
    angle: 45,
    length: 10,
    thickness: 2,
    offset: 4,
    fillColor: "#ffffff",
    strokeColor: "#000000",
    strokeWidth: 1,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    shadow: false,
    glow: false,
    scale: 1,
  },
  triangle: {
    sideLength: 12,
    strokeWidth: 2,
    fillColor: "transparent",
    strokeColor: "#ffffff",
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    shadow: false,
    glow: false,
    scale: 1,
  },
  hollow_circle: {
    radius: 7,
    strokeWidth: 1.5,
    gap: 4,
    strokeColor: "#ffffff",
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: false,
    dotSize: 2,
    shadow: false,
    glow: false,
    scale: 1,
  },
  segmented: {
    radius: 8,
    strokeWidth: 2,
    segments: 4,
    segmentGap: 20,
    strokeColor: "#ffffff",
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: false,
    dotSize: 2,
    shadow: false,
    glow: false,
    scale: 1,
  },
  sniper: {
    thickness: 1,
    gap: 6,
    length: 12,
    fillColor: "#ffffff",
    strokeColor: "#000000",
    strokeWidth: 0.5,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: false,
    dotSize: 2,
    showCircle: true,
    circleRadius: 10,
    shadow: false,
    glow: false,
    scale: 1,
  },
  tactical: {
    thickness: 2,
    gap: 5,
    length: 9,
    fillColor: "#00ff88",
    strokeColor: "#004422",
    strokeWidth: 1,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: true,
    dotSize: 2,
    shadow: false,
    glow: true,
    scale: 1,
  },
  scifi: {
    radius: 9,
    strokeWidth: 1.5,
    segments: 6,
    segmentGap: 15,
    strokeColor: "#a78bfa",
    opacity: 1,
    rotation: 30,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: true,
    dotSize: 2,
    shadow: false,
    glow: true,
    scale: 1,
  },
  cursor: {
    length: 12,
    thickness: 2,
    fillColor: "#ffffff",
    strokeColor: "#000000",
    strokeWidth: 1,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    shadow: false,
    glow: false,
    scale: 1,
  },
  dynamic: {
    thickness: 2,
    gap: 6,
    length: 8,
    spread: 4,
    fillColor: "#ffffff",
    strokeColor: "#000000",
    strokeWidth: 1,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: false,
    dotSize: 2,
    shadow: false,
    glow: false,
    scale: 1,
  },
  esports: {
    thickness: 1.5,
    gap: 2,
    length: 6,
    fillColor: "#00eaff",
    strokeColor: "#003344",
    strokeWidth: 0.5,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: false,
    dotSize: 2,
    shadow: false,
    glow: false,
    scale: 1,
  },
  retro: {
    thickness: 3,
    gap: 0,
    length: 8,
    fillColor: "#ffcc00",
    strokeColor: "#000000",
    strokeWidth: 2,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: true,
    dotSize: 2.5,
    shadow: false,
    glow: false,
    scale: 1,
  },
  minimal_ring: {
    radius: 6,
    strokeWidth: 1.5,
    strokeColor: "#ffffff",
    opacity: 0.8,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    showDot: true,
    dotSize: 2,
    shadow: false,
    glow: false,
    scale: 1,
  },
  custom_image: {
    size: 32,
    opacity: 1,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
    blur: 0,
    imageData: null,
    scale: 1,
  },
};

function renderCrosshair(canvas, type, settings, scale = 1) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);
  ctx.save();

  ctx.globalAlpha = Math.max(0, Math.min(1, settings.opacity ?? 1));

  if (settings.blur > 0) {
    ctx.filter = `blur(${settings.blur * scale}px)`;
  }

  const cx = w / 2 + (settings.offsetX || 0) * scale;
  const cy = h / 2 + (settings.offsetY || 0) * scale;
  ctx.translate(cx, cy);
  ctx.rotate(((settings.rotation || 0) * Math.PI) / 180);

  // glow overrides shadow
  if (settings.glow) {
    const glowColor =
      settings.fillColor && settings.fillColor !== "transparent"
        ? settings.fillColor
        : settings.strokeColor || "#ffffff";
    ctx.shadowColor = glowColor;
    ctx.shadowBlur = 10 * scale;
  } else if (settings.shadow) {
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowBlur = 4 * scale;
    ctx.shadowOffsetX = 1 * scale;
    ctx.shadowOffsetY = 1 * scale;
  }

  const effectiveScale = scale * (settings.scale ?? 1);
  (RENDERERS[type] || RENDERERS.plus)(ctx, settings, effectiveScale);

  ctx.restore();
}

const RENDERERS = {
  plus(ctx, p, s) {
    const len = (p.length || 8) * s;
    const thick = Math.max(0.5, p.thickness || 2) * s;
    const gap = (p.gap || 4) * s;
    const sw = (p.strokeWidth || 1) * s;

    _strokedRect(
      ctx,
      -thick / 2,
      -(gap + len),
      thick,
      len,
      p.fillColor,
      p.strokeColor,
      sw,
    );
    _strokedRect(
      ctx,
      -thick / 2,
      gap,
      thick,
      len,
      p.fillColor,
      p.strokeColor,
      sw,
    );
    _strokedRect(
      ctx,
      -(gap + len),
      -thick / 2,
      len,
      thick,
      p.fillColor,
      p.strokeColor,
      sw,
    );
    _strokedRect(
      ctx,
      gap,
      -thick / 2,
      len,
      thick,
      p.fillColor,
      p.strokeColor,
      sw,
    );

    if (p.showDot)
      _dot(
        ctx,
        Math.max(1, p.dotSize || 2) * s,
        p.fillColor,
        p.strokeColor,
        sw,
      );
  },

  cross_dot(ctx, p, s) {
    RENDERERS.plus(ctx, { ...p, showDot: false }, s);
    _dot(
      ctx,
      Math.max(1, p.dotSize || 2.5) * s,
      p.fillColor,
      p.strokeColor,
      (p.strokeWidth || 1) * s,
    );
  },

  circle(ctx, p, s) {
    const r = Math.max(1, p.radius || 8) * s;
    const sw = Math.max(0.5, p.strokeWidth || 2) * s;

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    if (p.fillColor && p.fillColor !== "transparent") {
      ctx.fillStyle = p.fillColor;
      ctx.fill();
    }
    ctx.strokeStyle = p.strokeColor || "#ffffff";
    ctx.lineWidth = sw;
    ctx.stroke();

    if (p.showDot)
      _dot(
        ctx,
        Math.max(1, p.dotSize || 2) * s,
        p.strokeColor,
        p.strokeColor,
        0,
      );
  },

  dot(ctx, p, s) {
    _dot(
      ctx,
      Math.max(1, p.dotSize || 4) * s,
      p.fillColor,
      p.strokeColor,
      (p.strokeWidth || 1) * s,
    );
  },

  x_shape(ctx, p, s) {
    ctx.save();
    ctx.rotate(Math.PI / 4);
    RENDERERS.plus(ctx, { ...p, showDot: false, gap: 0 }, s);
    ctx.restore();
    if (p.showDot)
      _dot(
        ctx,
        Math.max(1, p.dotSize || 2) * s,
        p.fillColor,
        p.strokeColor,
        (p.strokeWidth || 1) * s,
      );
  },

  chevron(ctx, p, s) {
    const len = (p.length || 10) * s;
    const ang = ((p.angle || 45) * Math.PI) / 180;
    const thick = Math.max(0.5, p.thickness || 2) * s;
    const off = (p.offset || 4) * s;
    const sw = (p.strokeWidth || 1) * s;

    const dx = Math.cos(ang) * len;
    const dy = Math.sin(ang) * len;

    if (sw > 0.1) {
      ctx.beginPath();
      ctx.moveTo(-dx, off + dy);
      ctx.lineTo(0, off);
      ctx.lineTo(dx, off + dy);
      ctx.strokeStyle = p.strokeColor || "#000000";
      ctx.lineWidth = thick + sw * 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(-dx, off + dy);
    ctx.lineTo(0, off);
    ctx.lineTo(dx, off + dy);
    ctx.strokeStyle = p.fillColor || "#ffffff";
    ctx.lineWidth = thick;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
  },

  triangle(ctx, p, s) {
    const r = ((p.sideLength || 12) * s) / Math.sqrt(3);
    const sw = Math.max(0.5, p.strokeWidth || 2) * s;

    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / 3;
      i === 0
        ? ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r)
        : ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    if (p.fillColor && p.fillColor !== "transparent") {
      ctx.fillStyle = p.fillColor;
      ctx.fill();
    }
    ctx.strokeStyle = p.strokeColor || "#ffffff";
    ctx.lineWidth = sw;
    ctx.stroke();
  },

  hollow_circle(ctx, p, s) {
    const r = Math.max(2, p.radius || 7) * s;
    const sw = Math.max(0.5, p.strokeWidth || 1.5) * s;
    const gap = (p.gap || 4) * s;

    ctx.strokeStyle = p.strokeColor || "#ffffff";
    ctx.lineWidth = sw;
    ctx.lineCap = "round";

    const halfGap = Math.min(
      Math.asin(Math.min(gap / (2 * r), 0.99)),
      Math.PI / 4,
    );
    for (let i = 0; i < 4; i++) {
      const base = (i * Math.PI) / 2;
      ctx.beginPath();
      ctx.arc(0, 0, r, base + halfGap, base + Math.PI / 2 - halfGap);
      ctx.stroke();
    }

    if (p.showDot)
      _dot(
        ctx,
        Math.max(1, p.dotSize || 2) * s,
        p.strokeColor,
        p.strokeColor,
        0,
      );
  },

  segmented(ctx, p, s) {
    const r = Math.max(2, p.radius || 8) * s;
    const sw = Math.max(0.5, p.strokeWidth || 2) * s;
    const segs = Math.max(2, Math.round(p.segments || 4));
    const gapRad = (Math.min(p.segmentGap || 20, 60) * Math.PI) / 180;
    const sliceRad = (2 * Math.PI) / segs;
    const arcLen = sliceRad - gapRad;

    ctx.strokeStyle = p.strokeColor || "#ffffff";
    ctx.lineWidth = sw;
    ctx.lineCap = "butt";

    for (let i = 0; i < segs; i++) {
      const start = i * sliceRad + gapRad / 2;
      ctx.beginPath();
      ctx.arc(0, 0, r, start, start + arcLen);
      ctx.stroke();
    }

    if (p.showDot)
      _dot(
        ctx,
        Math.max(1, p.dotSize || 2) * s,
        p.strokeColor,
        p.strokeColor,
        0,
      );
  },

  sniper(ctx, p, s) {
    const len = (p.length || 12) * s;
    const thick = Math.max(0.5, p.thickness || 1) * s;
    const gap = (p.gap || 6) * s;
    const sw = (p.strokeWidth || 0.5) * s;

    _strokedRect(
      ctx,
      -thick / 2,
      -(gap + len),
      thick,
      len,
      p.fillColor,
      p.strokeColor,
      sw,
    );
    _strokedRect(
      ctx,
      -thick / 2,
      gap,
      thick,
      len,
      p.fillColor,
      p.strokeColor,
      sw,
    );
    _strokedRect(
      ctx,
      -(gap + len),
      -thick / 2,
      len,
      thick,
      p.fillColor,
      p.strokeColor,
      sw,
    );
    _strokedRect(
      ctx,
      gap,
      -thick / 2,
      len,
      thick,
      p.fillColor,
      p.strokeColor,
      sw,
    );

    if (p.showCircle !== false) {
      const cr = Math.max(2, p.circleRadius || 10) * s;
      const prevAlpha = ctx.globalAlpha;
      ctx.globalAlpha *= 0.4;
      ctx.beginPath();
      ctx.arc(0, 0, cr, 0, Math.PI * 2);
      ctx.strokeStyle = p.fillColor || "#ffffff";
      ctx.lineWidth = thick;
      ctx.stroke();
      ctx.globalAlpha = prevAlpha;
    }
  },

  tactical(ctx, p, s) {
    RENDERERS.plus(ctx, p, s);
  },
  esports(ctx, p, s) {
    RENDERERS.plus(ctx, p, s);
  },
  retro(ctx, p, s) {
    RENDERERS.plus(ctx, p, s);
  },

  scifi(ctx, p, s) {
    const r = Math.max(2, p.radius || 9) * s;
    const sw = Math.max(0.5, p.strokeWidth || 1.5) * s;
    const segs = Math.max(2, Math.round(p.segments || 6));
    const gapRad = (Math.min(p.segmentGap || 15, 60) * Math.PI) / 180;
    const sliceRad = (2 * Math.PI) / segs;
    const arcLen = sliceRad - gapRad;

    if (p.glow) {
      ctx.shadowColor = p.strokeColor || "#a78bfa";
      ctx.shadowBlur = 12 * s;
    }

    ctx.strokeStyle = p.strokeColor || "#a78bfa";
    ctx.lineWidth = sw;
    ctx.lineCap = "butt";

    for (let i = 0; i < segs; i++) {
      const start = i * sliceRad + gapRad / 2;
      ctx.beginPath();
      ctx.arc(0, 0, r, start, start + arcLen);
      ctx.stroke();
    }

    if (p.showDot)
      _dot(
        ctx,
        Math.max(1, p.dotSize || 2) * s,
        p.strokeColor,
        p.strokeColor,
        0,
      );
  },

  cursor(ctx, p, s) {
    const len = (p.length || 12) * s;
    const thick = Math.max(0.5, p.thickness || 2) * s;
    const sw = (p.strokeWidth || 1) * s;

    ctx.beginPath();
    ctx.moveTo(0, -len * 0.5);
    ctx.lineTo(0, len * 0.7);
    ctx.lineTo(thick * 1.4, len * 0.3);
    ctx.lineTo(thick * 2.4, len * 0.7);
    ctx.lineTo(thick * 3, len * 0.52);
    ctx.lineTo(thick * 1.9, len * 0.15);
    ctx.lineTo(thick * 3.5, len * 0.15);
    ctx.lineTo(0, -len * 0.5);
    ctx.closePath();

    if (sw > 0.1) {
      ctx.strokeStyle = p.strokeColor || "#000000";
      ctx.lineWidth = sw;
      ctx.lineJoin = "round";
      ctx.stroke();
    }
    ctx.fillStyle = p.fillColor || "#ffffff";
    ctx.fill();
  },

  dynamic(ctx, p, s) {
    const len = (p.length || 8) * s;
    const thick = Math.max(0.5, p.thickness || 2) * s;
    const gap = (p.gap || 6) * s;
    const spread = (p.spread || 4) * s;
    const sw = (p.strokeWidth || 1) * s;

    [
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ].forEach(([dx, dy]) => {
      const x0 = dx * (gap + spread),
        y0 = dy * (gap + spread);
      const x1 = dx * (gap + len + spread),
        y1 = dy * (gap + len + spread);

      if (sw > 0.1) {
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.strokeStyle = p.strokeColor || "#000000";
        ctx.lineWidth = thick + sw * 2;
        ctx.lineCap = "round";
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.strokeStyle = p.fillColor || "#ffffff";
      ctx.lineWidth = thick;
      ctx.lineCap = "round";
      ctx.stroke();
    });

    if (p.showDot)
      _dot(
        ctx,
        Math.max(1, p.dotSize || 2) * s,
        p.fillColor,
        p.strokeColor,
        sw,
      );
  },

  minimal_ring(ctx, p, s) {
    const r = Math.max(1, p.radius || 6) * s;
    const sw = Math.max(0.5, p.strokeWidth || 1.5) * s;

    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.strokeStyle = p.strokeColor || "#ffffff";
    ctx.lineWidth = sw;
    ctx.stroke();

    if (p.showDot)
      _dot(
        ctx,
        Math.max(1, p.dotSize || 2) * s,
        p.strokeColor,
        p.strokeColor,
        0,
      );
  },

  custom_image(ctx, p, s) {
    if (!p.imageData) return;
    const sz = (p.size || 32) * s;
    try {
      ctx.drawImage(p.imageData, -sz / 2, -sz / 2, sz, sz);
    } catch (e) {}
  },
};

// the draw helpers
function _strokedRect(ctx, x, y, w, h, fill, stroke, sw) {
  if (sw > 0.05) {
    ctx.fillStyle = stroke || "#000000";
    ctx.fillRect(x - sw, y - sw, w + sw * 2, h + sw * 2);
  }
  ctx.fillStyle = fill || "#ffffff";
  ctx.fillRect(x, y, w, h);
}

function _dot(ctx, r, fill, stroke, sw) {
  if (r < 0.5) return;
  if (sw > 0.05) {
    ctx.beginPath();
    ctx.arc(0, 0, r + sw, 0, Math.PI * 2);
    ctx.fillStyle = stroke || "#000000";
    ctx.fill();
  }
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = fill || "#ffffff";
  ctx.fill();
}

// Gallery entries
const GALLERY_PRESETS = [
  {
    id: "g_classic_pro",
    name: "Classic Pro",
    author: "piesimp",
    type: "plus",
    tags: ["featured", "popular"],
    settings: {
      thickness: 2,
      gap: 4,
      length: 9,
      fillColor: "#ffffff",
      strokeColor: "#000000",
      strokeWidth: 1.5,
      showDot: false,
      opacity: 1,
    },
  },
  {
    id: "g_teal_dot",
    name: "Teal Dot",
    author: "piesimp",
    type: "cross_dot",
    tags: ["featured", "popular"],
    settings: {
      thickness: 1.5,
      gap: 3,
      length: 7,
      fillColor: "#00eaff",
      strokeColor: "#003344",
      strokeWidth: 1,
      dotSize: 2,
      showDot: true,
      opacity: 1,
    },
  },
  {
    id: "g_purple_orbit",
    name: "Violet Orbit",
    author: "piesimp",
    type: "scifi",
    tags: ["featured", "newest"],
    settings: {
      radius: 9,
      strokeWidth: 1.5,
      segments: 6,
      segmentGap: 14,
      strokeColor: "#a78bfa",
      showDot: true,
      dotSize: 2,
      glow: true,
      opacity: 1,
      rotation: 30,
    },
  },
  {
    id: "g_green_tac",
    name: "Green Tac",
    author: "piesimp",
    type: "tactical",
    tags: ["featured"],
    settings: {
      thickness: 2,
      gap: 5,
      length: 9,
      fillColor: "#00ff88",
      strokeColor: "#004422",
      strokeWidth: 1,
      showDot: true,
      dotSize: 2,
      glow: true,
      opacity: 1,
    },
  },
  {
    id: "g_redline",
    name: "Redline",
    author: "piesimp",
    type: "plus",
    tags: ["popular"],
    settings: {
      thickness: 1.5,
      gap: 5,
      length: 10,
      fillColor: "#ff3344",
      strokeColor: "#220011",
      strokeWidth: 1,
      showDot: true,
      dotSize: 2,
      opacity: 1,
    },
  },
  {
    id: "g_sniper_clean",
    name: "Long Shot",
    author: "piesimp",
    type: "sniper",
    tags: ["popular"],
    settings: {
      thickness: 1,
      gap: 7,
      length: 14,
      fillColor: "#ffffff",
      strokeColor: "#333333",
      strokeWidth: 0.5,
      showCircle: true,
      circleRadius: 11,
      opacity: 1,
    },
  },
  {
    id: "g_orange_x",
    name: "Orange X",
    author: "piesimp",
    type: "x_shape",
    tags: ["popular"],
    settings: {
      thickness: 2.5,
      length: 9,
      fillColor: "#ff8c00",
      strokeColor: "#3a1a00",
      strokeWidth: 1.5,
      showDot: false,
      opacity: 1,
    },
  },
  {
    id: "g_minimal_white",
    name: "Minimal",
    author: "piesimp",
    type: "dot",
    tags: ["newest"],
    settings: {
      dotSize: 3,
      fillColor: "#ffffff",
      strokeColor: "#000000",
      strokeWidth: 1,
      opacity: 1,
    },
  },
  {
    id: "g_retro_gold",
    name: "Retro Gold",
    author: "piesimp",
    type: "retro",
    tags: ["newest"],
    settings: {
      thickness: 3,
      gap: 0,
      length: 8,
      fillColor: "#ffcc00",
      strokeColor: "#000000",
      strokeWidth: 2,
      showDot: true,
      dotSize: 2.5,
      opacity: 1,
    },
  },
  {
    id: "g_blue_ring",
    name: "Blue Ring",
    author: "piesimp",
    type: "hollow_circle",
    tags: ["newest"],
    settings: {
      radius: 8,
      strokeWidth: 1.5,
      gap: 5,
      strokeColor: "#60a5fa",
      showDot: true,
      dotSize: 2,
      opacity: 1,
    },
  },
  {
    id: "g_cursor",
    name: "Cursor",
    author: "piesimp",
    type: "cursor",
    tags: ["popular"],
    settings: {
      length: 12,
      thickness: 2,
      fillColor: "#ffffff",
      strokeColor: "#000000",
      strokeWidth: 1,
      opacity: 1,
    },
  },
  {
    id: "g_red_dot",
    name: "Red Dot",
    author: "piesimp",
    type: "dot",
    tags: ["popular"],
    settings: {
      dotSize: 4,
      fillColor: "#ff4455",
      strokeColor: "#660010",
      strokeWidth: 1.5,
      opacity: 1,
    },
  },
  {
    id: "g_dynamic",
    name: "Dynamic",
    author: "piesimp",
    type: "dynamic",
    tags: ["newest"],
    settings: {
      thickness: 2,
      gap: 6,
      length: 8,
      spread: 3,
      fillColor: "#ffffff",
      strokeColor: "#000000",
      strokeWidth: 1,
      opacity: 1,
    },
  },
  {
    id: "g_pink_seg",
    name: "Pink Seg",
    author: "piesimp",
    type: "segmented",
    tags: ["featured", "newest"],
    settings: {
      radius: 9,
      strokeWidth: 2,
      segments: 4,
      segmentGap: 22,
      strokeColor: "#f472b6",
      showDot: false,
      glow: true,
      opacity: 1,
      rotation: 45,
    },
  },
  {
    id: "g_cyan_cross",
    name: "Cyan Cross",
    author: "piesimp",
    type: "cross_dot",
    tags: ["newest"],
    settings: {
      thickness: 1,
      gap: 4,
      length: 8,
      fillColor: "#22d3ee",
      strokeColor: "#082f49",
      strokeWidth: 1,
      dotSize: 2,
      showDot: true,
      opacity: 1,
    },
  },
  // i added some more cuz i was bored
  {
    id: "g_ghost",
    name: "Ghost",
    author: "piesimp",
    type: "plus",
    tags: ["featured", "popular"],
    settings: {
      thickness: 1,
      gap: 6,
      length: 11,
      fillColor: "rgba(255,255,255,0.85)",
      strokeColor: "#000000",
      strokeWidth: 0.5,
      showDot: false,
      opacity: 0.7,
    },
  },
  {
    id: "g_neon_pink",
    name: "Neon Pink",
    author: "piesimp",
    type: "cross_dot",
    tags: ["featured", "popular"],
    settings: {
      thickness: 1.5,
      gap: 3,
      length: 7,
      fillColor: "#ff2d78",
      strokeColor: "#1a0010",
      strokeWidth: 1,
      dotSize: 2.5,
      showDot: true,
      glow: true,
      opacity: 1,
    },
  },
  {
    id: "g_solar",
    name: "Solar",
    author: "piesimp",
    type: "segmented",
    tags: ["featured"],
    settings: {
      radius: 10,
      strokeWidth: 2.5,
      segments: 8,
      segmentGap: 18,
      strokeColor: "#fbbf24",
      showDot: true,
      dotSize: 2,
      glow: true,
      opacity: 1,
      rotation: 22,
    },
  },
  {
    id: "g_ice",
    name: "Ice",
    author: "piesimp",
    type: "hollow_circle",
    tags: ["featured"],
    settings: {
      radius: 9,
      strokeWidth: 2,
      gap: 3,
      strokeColor: "#bae6fd",
      showDot: true,
      dotSize: 1.5,
      glow: true,
      opacity: 0.9,
      rotation: 45,
    },
  },
  {
    id: "g_operator",
    name: "Operator",
    author: "piesimp",
    type: "sniper",
    tags: ["popular"],
    settings: {
      thickness: 0.5,
      gap: 10,
      length: 18,
      fillColor: "#ffffff",
      strokeColor: "#000000",
      strokeWidth: 0.5,
      showCircle: false,
      opacity: 1,
    },
  },
  {
    id: "g_ember",
    name: "Ember",
    author: "piesimp",
    type: "dot",
    tags: ["popular"],
    settings: {
      dotSize: 3.5,
      fillColor: "#ff6b00",
      strokeColor: "#1a0900",
      strokeWidth: 1.5,
      opacity: 1,
      glow: true,
    },
  },
  {
    id: "g_stealth",
    name: "Stealth",
    author: "piesimp",
    type: "x_shape",
    tags: ["popular"],
    settings: {
      thickness: 1.5,
      length: 7,
      fillColor: "#888888",
      strokeColor: "#000000",
      strokeWidth: 1,
      showDot: false,
      opacity: 0.8,
    },
  },
  {
    id: "g_volt",
    name: "Volt",
    author: "piesimp",
    type: "dynamic",
    tags: ["newest"],
    settings: {
      thickness: 1.5,
      gap: 4,
      length: 7,
      spread: 5,
      fillColor: "#d4ff00",
      strokeColor: "#1a2000",
      strokeWidth: 1,
      showDot: true,
      dotSize: 2,
      glow: true,
      opacity: 1,
    },
  },
  {
    id: "g_arctic",
    name: "Arctic",
    author: "piesimp",
    type: "circle",
    tags: ["newest"],
    settings: {
      radius: 7,
      strokeWidth: 1.5,
      fillColor: "transparent",
      strokeColor: "#e0f2fe",
      showDot: true,
      dotSize: 1.5,
      opacity: 0.9,
    },
  },
  {
    id: "g_toxic",
    name: "Toxic",
    author: "piesimp",
    type: "segmented",
    tags: ["newest"],
    settings: {
      radius: 8,
      strokeWidth: 2,
      segments: 3,
      segmentGap: 25,
      strokeColor: "#4ade80",
      showDot: true,
      dotSize: 2,
      glow: true,
      opacity: 1,
      rotation: 0,
    },
  },
  {
    id: "g_gold_sniper",
    name: "Gold Shot",
    author: "piesimp",
    type: "sniper",
    tags: ["featured"],
    settings: {
      thickness: 1,
      gap: 8,
      length: 16,
      fillColor: "#fbbf24",
      strokeColor: "#1a0e00",
      strokeWidth: 0.5,
      showCircle: true,
      circleRadius: 13,
      glow: false,
      opacity: 1,
    },
  },
  {
    id: "g_blood",
    name: "Bloodshot",
    author: "piesimp",
    type: "plus",
    tags: ["popular"],
    settings: {
      thickness: 2.5,
      gap: 2,
      length: 10,
      fillColor: "#dc2626",
      strokeColor: "#1a0000",
      strokeWidth: 1.5,
      showDot: true,
      dotSize: 3,
      glow: true,
      opacity: 1,
    },
  },
  {
    id: "g_pearl",
    name: "Pearl",
    author: "piesimp",
    type: "minimal_ring",
    tags: ["newest"],
    settings: {
      radius: 5,
      strokeWidth: 1,
      strokeColor: "#f1f5f9",
      showDot: true,
      dotSize: 1.5,
      opacity: 0.85,
    },
  },
  {
    id: "g_plasma",
    name: "Plasma",
    author: "piesimp",
    type: "scifi",
    tags: ["featured", "popular"],
    settings: {
      radius: 10,
      strokeWidth: 2,
      segments: 4,
      segmentGap: 20,
      strokeColor: "#38bdf8",
      showDot: true,
      dotSize: 2.5,
      glow: true,
      opacity: 1,
      rotation: 45,
    },
  },
  {
    id: "g_diamond",
    name: "Diamond",
    author: "piesimp",
    type: "x_shape",
    tags: ["featured"],
    settings: {
      thickness: 3,
      length: 10,
      fillColor: "#e2e8f0",
      strokeColor: "#0f172a",
      strokeWidth: 2,
      showDot: true,
      dotSize: 2,
      opacity: 1,
    },
  },
];
