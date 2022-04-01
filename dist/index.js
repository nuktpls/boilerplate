"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _containers = _interopRequireDefault(require("./src/nu_modules/layout/containers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  Export with named export to be able to pull in from library
*/
const Layout = _ref => {
  let {
    type,
    opt,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_containers.default, {
    type: type,
    opt: opt,
    subAgent: children
  });
};

var _default = Layout;
exports.default = _default;