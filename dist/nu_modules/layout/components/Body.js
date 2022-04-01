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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "descola-tema ".concat(customClasses),
    style: {
      backgroundImage: "url(".concat(bgImage ? bgImage.src : ' ', ")")
    }
  }, children);
};

var _default = Body;
exports.default = _default;