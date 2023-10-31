"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar2,
  Button: () => Button,
  FormText: () => FormText,
  Menu: () => Menu,
  Modal: () => Modal,
  Table: () => Table,
  Text: () => Text,
  TextArea: () => TextArea
});
module.exports = __toCommonJS(src_exports);
var import_bootstrap_min = require("bootstrap/dist/css/bootstrap.min.css");

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  purple500: "#8b5cf6",
  orange500: "#f97316",
  red200: "#fecaca",
  red300: "#fca5a5",
  red500: "#ef4444",
  lime500: "#84cc16",
  green200: "#bbf7d0",
  green300: "#86efac",
  green500: "#22c55e",
  slate500: "#64748b",
  slate700: "#334155",
  slate800: "#1e293b",
  slate900: "#0f172a",
  yellow200: "#fef08a",
  yellow300: "#fde047",
  yellow500: "#eab308",
  amber100: "#fef3c7",
  amber300: "#fcd34d",
  amber400: "#fbbf24",
  amber500: "#f59e0b",
  blue500: "#3b82f6",
  blue900: "#1e3a8a",
  sky100: "#e0f2fe",
  sky400: "#38bdf8",
  zinc200: "#e4e4e7",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  indigo50: "#eef2ff",
  indigo100: "#e0e7ff",
  indigo200: "#c7d2fe",
  indigo300: "#a5b4fc",
  indigo500: "#6366f1",
  indigo700: "#4338ca",
  indigo900: "#1e3a8a",
  indigo950: "#1e1b4b"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  boxSizing: "border-box",
  padding: "0 $4",
  color: "$white",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$indigo500",
        "&:not(:disabled):hover": {
          background: "$indigo300"
        },
        "&:disabled": {
          backgroundColor: "$indigo200",
          cursor: "not-allowed"
        }
      },
      secondary: {
        color: "$white",
        background: "$gray400",
        "&:not(:disabled):hover": {
          background: "$gray300"
        },
        "&:disabled": {
          backgroundColor: "$gray200",
          cursor: "not-allowed"
        }
      },
      warning: {
        color: "$white",
        background: "$yellow500",
        "&:not(:disabled):hover": {
          background: "$yellow300"
        },
        "&:disabled": {
          backgroundColor: "$yellow200",
          cursor: "not-allowed"
        }
      },
      danger: {
        color: "$white",
        background: "$red500",
        "&:not(:disabled):hover": {
          background: "$red300"
        },
        "&:disabled": {
          backgroundColor: "$red200",
          cursor: "not-allowed"
        }
      },
      success: {
        color: "$white",
        background: "$green500",
        "&:not(:disabled):hover": {
          background: "$green300"
        },
        "&:disabled": {
          backgroundColor: "$green200",
          cursor: "not-allowed"
        }
      },
      primaryOutline: {
        color: "$indigo500",
        backgroundColor: "transparent",
        border: "1px solid $indigo500",
        "&:not(:disabled):hover": {
          color: "$white",
          backgroundColor: "$indigo500"
        },
        "&:disabled": {
          backgroundColor: "$indigo200",
          cursor: "not-allowed"
        }
      },
      secondaryOutline: {
        color: "$gray400",
        border: "1px solid $gray400",
        "&:not(:disabled):hover": {
          background: "$gray400",
          color: "$white"
        },
        "&:disabled": {
          backgroundColor: "$gray200",
          cursor: "not-allowed"
        }
      },
      warningOutline: {
        color: "$yellow500",
        border: "1px solid $yellow500",
        "&:not(:disabled):hover": {
          color: "$white",
          background: "$yellow500"
        },
        "&:disabled": {
          borderColor: "$yellow200",
          color: "$yellow200",
          cursor: "not-allowed"
        }
      },
      dangerOutline: {
        color: "$red500",
        border: "1px solid $red500",
        "&:not(:disabled):hover": {
          color: "$white",
          background: "$red500"
        },
        "&:disabled": {
          borderColor: "$red200",
          color: "$gray200",
          cursor: "not-allowed"
        }
      },
      successOutline: {
        color: "$green500",
        border: "1px solid $green500",
        "&:not(:disabled):hover": {
          color: "$white",
          background: "$green500"
        },
        "&:disabled": {
          borderColor: "$green200",
          color: "$green200",
          cursor: "not-allowed"
        }
      }
    },
    size: {
      sm: {
        height: 32,
        minWidth: 32
      },
      md: {
        height: 46,
        minWidth: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/Text.tsx
var Text = styled("span", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$md",
  fontFamily: "$default",
  paddingBottom: "$2",
  color: "$slate800",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    },
    variant: {
      primary: {},
      bigTitle: {
        fontWeight: "$medium",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        width: "$40"
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Text.displayName = "Card";

// src/components/FormText/index.tsx
var import_react2 = require("react");

// src/components/FormText/styles.ts
var FormTextContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "$1 $2",
  borderRadius: "$md",
  backgroundColor: "transparent",
  border: "1px solid $gray300",
  gap: "$2",
  minWidth: "270px",
  height: "40px",
  "&:has(input:focus)": {
    borderColor: "$gray400",
    div: {
      borderColor: "$gray400",
      svg: {
        color: "$gray400"
      }
    }
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  defaultVariants: {
    size: "md"
  }
});
var Prefix = styled("div", {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "100%",
  borderRight: "1px solid $gray300",
  padding: "$1 $2",
  width: "$8",
  svg: {
    color: "$gray300"
  }
});
var Input = styled("input", {
  width: "100%",
  border: "0 none",
  color: "$slate900",
  background: "transparent",
  outline: "none",
  padding: "$1"
});

// src/components/FormText/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var FormText = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, { prefix, text, as = "input" } = _b, props = __objRest(_b, ["prefix", "text", "as"]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: "$2" }, children: [
      !!text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: text }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormTextContainer, { children: [
        !!prefix && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prefix, { children: prefix }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, __spreadValues({ as, ref }, props))
      ] })
    ] });
  }
);
FormText.displayName = "FormText";

// ../../node_modules/phosphor-react/dist/lib/index.esm.js
var import_react3 = require("react");
var IconContext = /* @__PURE__ */ (0, import_react3.createContext)({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: false
});
var renderPathForWeight = function renderPathForWeight2(weight, color, pathsByWeight2) {
  var path = pathsByWeight2.get(weight);
  if (!!path)
    return path(color);
  console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".');
  return null;
};

// ../../node_modules/phosphor-react/dist/lib/IconBase.esm.js
var import_react4 = __toESM(require("react"));

// ../../node_modules/phosphor-react/dist/_virtual/_rollupPluginBabelHelpers.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// ../../node_modules/phosphor-react/dist/lib/IconBase.esm.js
var IconBase = /* @__PURE__ */ (0, import_react4.forwardRef)(function(props, ref) {
  var alt = props.alt, color = props.color, size = props.size, weight = props.weight, mirrored = props.mirrored, children = props.children, renderPath3 = props.renderPath, restProps = _objectWithoutPropertiesLoose(props, ["alt", "color", "size", "weight", "mirrored", "children", "renderPath"]);
  var _useContext = (0, import_react4.useContext)(IconContext), _useContext$color = _useContext.color, contextColor = _useContext$color === void 0 ? "currentColor" : _useContext$color, contextSize = _useContext.size, _useContext$weight = _useContext.weight, contextWeight = _useContext$weight === void 0 ? "regular" : _useContext$weight, _useContext$mirrored = _useContext.mirrored, contextMirrored = _useContext$mirrored === void 0 ? false : _useContext$mirrored, restContext = _objectWithoutPropertiesLoose(_useContext, ["color", "size", "weight", "mirrored"]);
  return import_react4.default.createElement("svg", Object.assign({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size != null ? size : contextSize,
    height: size != null ? size : contextSize,
    fill: color != null ? color : contextColor,
    viewBox: "0 0 256 256",
    transform: mirrored || contextMirrored ? "scale(-1, 1)" : void 0
  }, restContext, restProps), !!alt && import_react4.default.createElement("title", null, alt), children, import_react4.default.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), renderPath3(weight != null ? weight : contextWeight, color != null ? color : contextColor));
});
IconBase.displayName = "IconBase";
var IconBase_esm_default = IconBase;

// ../../node_modules/phosphor-react/dist/icons/User.esm.js
var import_react5 = __toESM(require("react"));
var pathsByWeight = /* @__PURE__ */ new Map();
pathsByWeight.set("bold", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }), import_react5.default.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "24"
  }));
});
pathsByWeight.set("duotone", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    opacity: "0.2"
  }), import_react5.default.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), import_react5.default.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
pathsByWeight.set("fill", function() {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("path", {
    d: "M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"
  }));
});
pathsByWeight.set("light", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), import_react5.default.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }));
});
pathsByWeight.set("thin", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }), import_react5.default.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }));
});
pathsByWeight.set("regular", function(color) {
  return import_react5.default.createElement(import_react5.default.Fragment, null, import_react5.default.createElement("circle", {
    cx: "128",
    cy: "96",
    r: "64",
    fill: "none",
    stroke: color,
    strokeMiterlimit: "10",
    strokeWidth: "16"
  }), import_react5.default.createElement("path", {
    d: "M31,216a112,112,0,0,1,194,0",
    fill: "none",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "16"
  }));
});
var renderPath = function renderPath2(weight, color) {
  return renderPathForWeight(weight, color, pathsByWeight);
};
var User = /* @__PURE__ */ (0, import_react5.forwardRef)(function(props, ref) {
  return import_react5.default.createElement(IconBase_esm_default, Object.assign({
    ref
  }, props, {
    renderPath
  }));
});
User.displayName = "User";
var User_esm_default = User;

// src/components/Avatar/styles.ts
var Avatar = __toESM(require("@radix-ui/react-avatar"));
var AvatarContainer = styled(Avatar.Root, {
  display: "flex",
  width: "$16",
  height: "$16",
  overflow: "hidden",
  borderRadius: "$md",
  border: "2px solid $indigo200",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$indigo200",
  outline: "none",
  cursor: "pointer",
  "&:hover": {
    borderColor: "$indigo500",
    backgroundColor: "$indigo500"
  }
});
var AvatarImage = styled(Avatar.Image, {
  width: "98%",
  height: "98%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$white",
  svg: {
    width: "$8",
    height: "$8"
  }
});

// src/components/Avatar/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Avatar2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(AvatarContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(User_esm_default, { weight: "fill" }) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray300",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  resize: "none",
  minHeight: 80,
  "&:focus": {
    outline: 0,
    borderColor: "$gray400"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Menu/index.tsx
var import_react6 = require("react");
var DropdownMenu2 = __toESM(require("@radix-ui/react-dropdown-menu"));

// src/components/Menu/styles.ts
var DropdownMenu = __toESM(require("@radix-ui/react-dropdown-menu"));
var Content2 = styled(DropdownMenu.Content, {
  minWidth: 150,
  backgroundColor: "$white",
  borderRadius: "$sm",
  padding: "$1",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity"
});
var Item2 = styled(DropdownMenu.Item, {
  font: "$default",
  fontSize: "$md",
  lineHeight: "$md",
  borderRadius: "$sm",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "$8",
  outline: "none",
  gap: "$2",
  "&:hover": {
    backgroundColor: "$indigo500",
    color: "$white",
    cursor: "pointer"
  },
  svg: {
    width: "$5",
    height: "$5"
  },
  variants: {
    variant: {
      primary: {
        "&:hover": {
          backgroundColor: "$indigo500",
          color: "$white",
          cursor: "pointer",
          svg: {
            color: "$white"
          }
        },
        svg: {
          color: "$indigo500"
        }
      },
      warning: {
        "&:hover": {
          backgroundColor: "$yellow500",
          svg: {
            color: "$white"
          }
        },
        svg: {
          color: "$yellow500"
        }
      },
      danger: {
        "&:hover": {
          backgroundColor: "$red500",
          svg: {
            color: "$white"
          }
        },
        svg: {
          color: "$red500"
        }
      }
    }
  }
});
var Arrow2 = styled(DropdownMenu.Arrow, {
  fill: "$white"
});

// src/components/Menu/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Menu = (0, import_react6.forwardRef)(
  (_a, ref) => {
    var _b = _a, { icon, content, variant, side, as = "input" } = _b, props = __objRest(_b, ["icon", "content", "variant", "side", "as"]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(DropdownMenu2.Root, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenu2.Trigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant, children: !!icon && icon }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenu2.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Content2, { sideOffset: 5, side, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Arrow2, {}),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DropdownMenu2.Group, { children: content == null ? void 0 : content.map((content2, index) => {
          return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            Item2,
            {
              variant: content2.variantItem,
              onClick: content2.handleClick,
              children: [
                content2.icon && content2.icon,
                " ",
                content2.title && content2.title
              ]
            },
            index
          );
        }) })
      ] }) })
    ] });
  }
);
Menu.displayName = "FormText";

// src/components/Table/index.tsx
var import_react7 = require("react");

// src/components/Table/styles.ts
var TableRoot = styled("table", {
  width: "100%",
  font: "$default",
  textAlign: "center",
  "th": {
    padding: "$2",
    borderBottom: "1px solid $indigo50",
    height: "$12"
  },
  "td": {
    padding: "$2",
    borderBottom: "1px solid $indigo50",
    height: "$12"
  },
  "tbody": {
    "tr:nth-child(odd)": {
      backgroundColor: "$indigo50"
    },
    "tr": {
      "&:hover": {
        backgroundColor: "$indigo100"
      }
    }
  }
});

// src/components/Table/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Table = (0, import_react7.forwardRef)(
  (_a, ref) => {
    var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TableRoot, __spreadProps(__spreadValues({}, props), { children }));
  }
);
Table.displayName = "Table";

// src/components/Modal/index.tsx
var import_react8 = require("react");
var Dialog2 = __toESM(require("@radix-ui/react-dialog"));

// src/components/Modal/styles.ts
var Dialog = __toESM(require("@radix-ui/react-dialog"));
var Overlay2 = styled(Dialog.Overlay, {
  backgroundColor: "rgba(0, 0, 0, 0.75)",
  position: "fixed",
  inset: 0,
  animation: "overlayShadow 150ms cubic-bezier(0.16, 1, 0.3, 1)"
});
var Content4 = styled(Dialog.Content, {
  borderRadius: "$md",
  padding: "$4",
  backgroundColor: "$white",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "0 none",
  outline: "0 none"
});
var Close2 = styled(Dialog.Close, {
  position: "absolute",
  background: "transparent",
  border: 0,
  top: "1.5rem",
  right: "1.5rem",
  lineHeight: 0,
  cursor: "pointer"
});

// src/components/Modal/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var Modal = (0, import_react8.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      children,
      icon,
      modalTitle,
      description,
      close,
      width,
      height
    } = _b, props = __objRest(_b, [
      "children",
      "icon",
      "modalTitle",
      "description",
      "close",
      "width",
      "height"
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Dialog2.Root, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Dialog2.Trigger, { asChild: true, children: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Dialog2.Portal, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Overlay2, {}),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Content4, __spreadProps(__spreadValues({}, props), { style: { width, height }, children: [
          !!modalTitle && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Dialog2.Title, { children: modalTitle }),
          !!description && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Dialog2.Description, { children: description }),
          !!close && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Close2, { asChild: true, children: close }),
          children
        ] }))
      ] })
    ] });
  }
);
Modal.displayName = "Modal";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Button,
  FormText,
  Menu,
  Modal,
  Table,
  Text,
  TextArea
});
