"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
const Body = _ref => {
  let {
    children,
    customClasses,
    bgImage
  } = _ref;
  const bgStyle = bgImage !== null && bgImage !== void 0 && bgImage.src ? {
    backgroundImage: "url(".concat((bgImage === null || bgImage === void 0 ? void 0 : bgImage.src) || ' ', ")")
  } : {
    backgroundImage: 'unset'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "boilerplate ".concat(customClasses),
    style: bgStyle
  }, children);
};

var _default = Body;
exports.default = _default;