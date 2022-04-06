"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Menu = _ref => {
  let {
    wrapperRef,
    isVisibleClass,
    isHiddenState,
    link_01
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("nav", {
    ref: wrapperRef,
    className: 'main-nav zin menu-state-' + isVisibleClass,
    id: "site-navigation",
    "aria-hidden": isHiddenState
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "",
    id: "mainmenu",
    "aria-labelledby": "check-toggle-icon"
  }, /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: link_01
  }, "Login / Registre-se"))), /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://descola.org/cursos",
    role: "menuitem",
    tabIndex: "0"
  }, "Cursos")), /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://descola.org/sobre",
    role: "menuitem",
    tabIndex: "0"
  }, "O Que \xE9 a Descola?")), /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://descola.org/empresas",
    role: "menuitem",
    tabIndex: "0"
  }, "Para empresas")), /*#__PURE__*/_react.default.createElement("li", {
    role: "none"
  }, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: "/",
    role: "menuitem",
    tabIndex: "0"
  }, "Blog"))));
};

var _default = Menu;
exports.default = _default;