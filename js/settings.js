// settings.js

const Settings = (() => {
  const SCHEMA = {
    plus: [
      {
        group: "Shape",
        controls: [
          {
            key: "length",
            type: "slider",
            label: "Length",
            min: 1,
            max: 28,
            step: 0.5,
          },
          {
            key: "thickness",
            type: "slider",
            label: "Thickness",
            min: 0.5,
            max: 8,
            step: 0.5,
          },
          {
            key: "gap",
            type: "slider",
            label: "Gap",
            min: 0,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "fillColor", type: "color", label: "Fill" },
          { key: "strokeColor", type: "color", label: "Outline" },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Outline Width",
            min: 0,
            max: 4,
            step: 0.5,
          },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Center",
        controls: [
          { key: "showDot", type: "toggle", label: "Center Dot" },
          {
            key: "dotSize",
            type: "slider",
            label: "Dot Size",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    circle: [
      {
        group: "Shape",
        controls: [
          {
            key: "radius",
            type: "slider",
            label: "Radius",
            min: 2,
            max: 30,
            step: 0.5,
          },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Thickness",
            min: 0.5,
            max: 8,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "fillColor", type: "color", label: "Fill" },
          { key: "strokeColor", type: "color", label: "Stroke" },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Center",
        controls: [
          { key: "showDot", type: "toggle", label: "Center Dot" },
          {
            key: "dotSize",
            type: "slider",
            label: "Dot Size",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    dot: [
      {
        group: "Shape",
        controls: [
          {
            key: "dotSize",
            type: "slider",
            label: "Dot Size",
            min: 0.5,
            max: 16,
            step: 0.5,
          },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Outline Width",
            min: 0,
            max: 4,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "fillColor", type: "color", label: "Fill" },
          { key: "strokeColor", type: "color", label: "Outline" },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    chevron: [
      {
        group: "Shape",
        controls: [
          {
            key: "angle",
            type: "slider",
            label: "Angle",
            min: 10,
            max: 80,
            step: 1,
          },
          {
            key: "length",
            type: "slider",
            label: "Length",
            min: 2,
            max: 24,
            step: 0.5,
          },
          {
            key: "thickness",
            type: "slider",
            label: "Thickness",
            min: 0.5,
            max: 8,
            step: 0.5,
          },
          {
            key: "offset",
            type: "slider",
            label: "Offset",
            min: -10,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "fillColor", type: "color", label: "Fill" },
          { key: "strokeColor", type: "color", label: "Outline" },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Outline Width",
            min: 0,
            max: 4,
            step: 0.5,
          },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    segmented: [
      {
        group: "Shape",
        controls: [
          {
            key: "radius",
            type: "slider",
            label: "Radius",
            min: 2,
            max: 30,
            step: 0.5,
          },
          {
            key: "segments",
            type: "slider",
            label: "Segments",
            min: 2,
            max: 12,
            step: 1,
          },
          {
            key: "segmentGap",
            type: "slider",
            label: "Gap (deg)",
            min: 2,
            max: 60,
            step: 1,
          },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Thickness",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "strokeColor", type: "color", label: "Color" },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Center",
        controls: [
          { key: "showDot", type: "toggle", label: "Center Dot" },
          {
            key: "dotSize",
            type: "slider",
            label: "Dot Size",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    sniper: [
      {
        group: "Lines",
        controls: [
          {
            key: "length",
            type: "slider",
            label: "Length",
            min: 2,
            max: 32,
            step: 0.5,
          },
          {
            key: "thickness",
            type: "slider",
            label: "Width",
            min: 0.5,
            max: 4,
            step: 0.5,
          },
          {
            key: "gap",
            type: "slider",
            label: "Gap",
            min: 0,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Outer Circle",
        controls: [
          { key: "showCircle", type: "toggle", label: "Show Circle" },
          {
            key: "circleRadius",
            type: "slider",
            label: "Radius",
            min: 4,
            max: 32,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "fillColor", type: "color", label: "Color" },
          { key: "strokeColor", type: "color", label: "Outline" },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Outline W",
            min: 0,
            max: 4,
            step: 0.5,
          },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    hollow_circle: [
      {
        group: "Shape",
        controls: [
          {
            key: "radius",
            type: "slider",
            label: "Radius",
            min: 2,
            max: 30,
            step: 0.5,
          },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Thickness",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
          {
            key: "gap",
            type: "slider",
            label: "Gap",
            min: 0,
            max: 16,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "strokeColor", type: "color", label: "Color" },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Center",
        controls: [
          { key: "showDot", type: "toggle", label: "Center Dot" },
          {
            key: "dotSize",
            type: "slider",
            label: "Dot Size",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    triangle: [
      {
        group: "Shape",
        controls: [
          {
            key: "sideLength",
            type: "slider",
            label: "Side Length",
            min: 4,
            max: 40,
            step: 0.5,
          },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Thickness",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "fillColor", type: "color", label: "Fill" },
          { key: "strokeColor", type: "color", label: "Stroke" },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    cursor: [
      {
        group: "Shape",
        controls: [
          {
            key: "length",
            type: "slider",
            label: "Size",
            min: 4,
            max: 24,
            step: 0.5,
          },
          {
            key: "thickness",
            type: "slider",
            label: "Thickness",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "fillColor", type: "color", label: "Fill" },
          { key: "strokeColor", type: "color", label: "Outline" },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Outline W",
            min: 0,
            max: 4,
            step: 0.5,
          },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    dynamic: [
      {
        group: "Shape",
        controls: [
          {
            key: "length",
            type: "slider",
            label: "Length",
            min: 1,
            max: 24,
            step: 0.5,
          },
          {
            key: "thickness",
            type: "slider",
            label: "Thickness",
            min: 0.5,
            max: 8,
            step: 0.5,
          },
          {
            key: "gap",
            type: "slider",
            label: "Gap",
            min: 0,
            max: 16,
            step: 0.5,
          },
          {
            key: "spread",
            type: "slider",
            label: "Spread",
            min: 0,
            max: 16,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "fillColor", type: "color", label: "Fill" },
          { key: "strokeColor", type: "color", label: "Outline" },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Outline W",
            min: 0,
            max: 4,
            step: 0.5,
          },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Center",
        controls: [
          { key: "showDot", type: "toggle", label: "Center Dot" },
          {
            key: "dotSize",
            type: "slider",
            label: "Dot Size",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    minimal_ring: [
      {
        group: "Shape",
        controls: [
          {
            key: "radius",
            type: "slider",
            label: "Radius",
            min: 1,
            max: 30,
            step: 0.5,
          },
          {
            key: "strokeWidth",
            type: "slider",
            label: "Thickness",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Color",
        controls: [
          { key: "strokeColor", type: "color", label: "Color" },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Center",
        controls: [
          { key: "showDot", type: "toggle", label: "Center Dot" },
          {
            key: "dotSize",
            type: "slider",
            label: "Dot Size",
            min: 0.5,
            max: 6,
            step: 0.5,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
          { key: "glow", type: "toggle", label: "Glow" },
          { key: "shadow", type: "toggle", label: "Shadow" },
        ],
      },
    ],
    custom_image: [
      {
        group: "Image",
        controls: [
          {
            key: "size",
            type: "slider",
            label: "Size",
            min: 4,
            max: 64,
            step: 1,
          },
          {
            key: "opacity",
            type: "slider",
            label: "Opacity",
            min: 0,
            max: 1,
            step: 0.01,
          },
        ],
      },
      {
        group: "Transform",
        controls: [
          {
            key: "scale",
            type: "slider",
            label: "Scale",
            min: 0.1,
            max: 4,
            step: 0.05,
          },
          {
            key: "rotation",
            type: "slider",
            label: "Rotation",
            min: -180,
            max: 180,
            step: 1,
          },
          {
            key: "offsetX",
            type: "slider",
            label: "Offset X",
            min: -20,
            max: 20,
            step: 0.5,
          },
          {
            key: "offsetY",
            type: "slider",
            label: "Offset Y",
            min: -20,
            max: 20,
            step: 0.5,
          },
        ],
      },
      {
        group: "Effects",
        controls: [
          {
            key: "blur",
            type: "slider",
            label: "Blur",
            min: 0,
            max: 6,
            step: 0.5,
          },
        ],
      },
    ],
  };

  // types wiht the plus schema
  SCHEMA.cross_dot = SCHEMA.plus;
  SCHEMA.x_shape = SCHEMA.plus;
  SCHEMA.tactical = SCHEMA.plus;
  SCHEMA.esports = SCHEMA.plus;
  SCHEMA.retro = SCHEMA.plus;
  SCHEMA.scifi = SCHEMA.segmented;

  // builds the panel
  function build(type, settings) {
    const body = document.getElementById("settings-body");
    const schema = SCHEMA[type] || SCHEMA.plus;
    body.innerHTML = "";

    schema.forEach((groupDef, i) => {
      const group = _buildGroup(groupDef, settings);
      group.style.animationDelay = `${i * 35}ms`;
      group.classList.add("fade-in");
      body.appendChild(group);
    });
  }

  function _buildGroup({ group, controls }, settings) {
    const wrap = document.createElement("div");
    wrap.className = "settings-group";

    const header = document.createElement("div");
    header.className = "settings-group-header";
    header.innerHTML = `
      <span class="settings-group-title">${group}</span>
      <svg class="settings-group-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 4l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;

    const body = document.createElement("div");
    body.className = "settings-group-body";

    controls.forEach((ctrl) => {
      const row = _buildControl(ctrl, settings);
      if (row) body.appendChild(row);
    });

    // toggle collapse
    let collapsed = false;
    header.addEventListener("click", () => {
      collapsed = !collapsed;
      header.classList.toggle("collapsed", collapsed);
      body.classList.toggle("collapsed", collapsed);
    });

    wrap.appendChild(header);
    wrap.appendChild(body);
    return wrap;
  }

  function _buildControl(ctrl, settings) {
    const val = settings[ctrl.key];
    if (val === undefined && ctrl.type === "slider") return null;

    const row = document.createElement("div");
    row.className = "control-row";

    if (ctrl.type === "slider") {
      const display = _fmt(ctrl.key, val ?? ctrl.min ?? 0);

      row.innerHTML = `
        <div class="control-label-row">
          <span class="control-label">${ctrl.label}</span>
          <span class="control-value editable-value" id="val-${ctrl.key}" title="Click to type">${display}</span>
        </div>
        <div class="slider-track">
          <input type="range"
            id="ctrl-${ctrl.key}"
            min="${ctrl.min ?? 0}"
            max="${ctrl.max ?? 100}"
            step="${ctrl.step ?? 1}"
            value="${val ?? ctrl.min ?? 0}"
          />
        </div>
      `;

      const input = row.querySelector('input[type="range"]');
      const valueEl = row.querySelector(`#val-${ctrl.key}`);

      _updateTrack(input);

      input.addEventListener("input", () => {
        const v = parseFloat(input.value);
        valueEl.textContent = _fmt(ctrl.key, v);
        _updateTrack(input);
        Renderer.updateSetting(ctrl.key, v);
      });

      valueEl.addEventListener("click", () => {
        const currentVal = parseFloat(input.value);
        const textInput = document.createElement("input");
        textInput.type = "text";
        textInput.className = "control-value-input";
        textInput.value = currentVal;
        valueEl.replaceWith(textInput);
        textInput.focus();
        textInput.select();

        const commit = () => {
          let v = parseFloat(textInput.value);
          if (isNaN(v)) v = currentVal;
          v = Math.max(
            ctrl.min ?? -Infinity,
            Math.min(ctrl.max ?? Infinity, v),
          );
          input.value = v;
          _updateTrack(input);
          Renderer.updateSetting(ctrl.key, v);
          const newLabel = document.createElement("span");
          newLabel.className = "control-value editable-value";
          newLabel.id = `val-${ctrl.key}`;
          newLabel.title = "Click to type";
          newLabel.textContent = _fmt(ctrl.key, v);
          textInput.replaceWith(newLabel);
          newLabel.addEventListener(
            "click",
            () => newLabel.click && valueEl.click(),
          );
          build(Renderer.getType(), Renderer.getSettings());
        };

        textInput.addEventListener("blur", commit);
        textInput.addEventListener("keydown", (e) => {
          if (e.key === "Enter") commit();
          if (e.key === "Escape") {
            build(Renderer.getType(), Renderer.getSettings());
          }
        });
      });
    } else if (ctrl.type === "color") {
      const hex = _toHex(val || "#ffffff");
      row.innerHTML = `
        <div class="control-label-row">
          <span class="control-label">${ctrl.label}</span>
        </div>
        <div class="color-control">
          <div class="color-swatch" id="swatch-${ctrl.key}" style="background:${val || "#ffffff"};"></div>
          <input type="color" id="picker-${ctrl.key}" value="${hex}" />
          <input type="text" class="color-hex" id="hex-${ctrl.key}" value="${val || "#ffffff"}" maxlength="30" spellcheck="false" />
        </div>
      `;

      const swatch = row.querySelector(`#swatch-${ctrl.key}`);
      const picker = row.querySelector(`#picker-${ctrl.key}`);
      const hexIn = row.querySelector(`#hex-${ctrl.key}`);

      swatch.addEventListener("click", () => picker.click());
      picker.addEventListener("input", () => {
        swatch.style.background = picker.value;
        hexIn.value = picker.value;
        Renderer.updateSetting(ctrl.key, picker.value);
      });
      hexIn.addEventListener("input", () => {
        const v = hexIn.value.trim();
        if (/^#[0-9a-fA-F]{3,8}$/.test(v) || v === "transparent") {
          swatch.style.background = v;
          Renderer.updateSetting(ctrl.key, v);
        }
      });
    } else if (ctrl.type === "toggle") {
      row.innerHTML = `
        <div class="toggle-control">
          <span class="toggle-label">${ctrl.label}</span>
          <label class="toggle-switch">
            <input type="checkbox" id="ctrl-${ctrl.key}" ${val ? "checked" : ""} />
            <span class="toggle-slider"></span>
          </label>
        </div>
      `;
      row.querySelector("input").addEventListener("change", (e) => {
        Renderer.updateSetting(ctrl.key, e.target.checked);
      });
    }

    return row;
  }

  function _updateTrack(input) {
    const min = parseFloat(input.min);
    const max = parseFloat(input.max);
    const pct = ((parseFloat(input.value) - min) / (max - min)) * 100;
    input.style.background = `linear-gradient(to right, var(--accent-primary) ${pct}%, var(--bg-hover) ${pct}%)`;
  }

  function _fmt(key, v) {
    if (key === "opacity") return Math.round(v * 100) + "%";
    if (key === "rotation") return Math.round(v) + "°";
    if (key === "scale") return parseFloat(v.toFixed(2)) + "x";
    if (Number.isInteger(v) || v % 1 === 0) return String(v);
    return parseFloat(v.toFixed(2)).toString();
  }

  function _toHex(color) {
    if (!color || color === "transparent") return "#000000";
    if (/^#[0-9a-fA-F]{3,8}$/.test(color))
      return color.length === 7 ? color : color;
    const m = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (m)
      return (
        "#" +
        [m[1], m[2], m[3]]
          .map((n) => (+n).toString(16).padStart(2, "0"))
          .join("")
      );
    return color;
  }

  return { build };
})();
