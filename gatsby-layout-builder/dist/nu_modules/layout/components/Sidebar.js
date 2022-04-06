"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Sidebar = _ref => {
  let {
    subAgent
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("aside", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "aside-container-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "aside-container"
  }, subAgent.map((e, i) => /*#__PURE__*/_react.default.createElement("section", {
    key: i
  }, e)))));
};

var _default = Sidebar;
exports.default = _default;