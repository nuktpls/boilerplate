"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OffsetWindow = _ref => {
  let {
    subAgent
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "offset-window-container-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "offset-window-container"
  }, subAgent));
};

var _default = OffsetWindow;
exports.default = _default;