"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.search.js");

var _react = _interopRequireDefault(require("react"));

var _ri = require("react-icons/ri");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Form(_ref) {
  let {
    // msg,
    // success,
    handleSubmit,
    honeypotStateChanger,
    searchStateChanger,
    search,
    honey,
    bot_msg,
    form_class,
    // msgStyle,
    // link_url,
    // link_text,
    // has_Link,
    search_placeholder,
    noSPAM,
    warnME,
    placeholder,
    size
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: form_class
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "main-menu-form validate",
    method: "post",
    id: "mc-embedded-subscribe-form",
    name: "mc-embedded-subscribe-form",
    target: "_blank",
    onSubmit: e => handleSubmit(e, search, honey),
    noValidate: true,
    role: "search",
    "aria-label": "Busque por cursos da Descola"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "hidden"
  }, /*#__PURE__*/_react.default.createElement("label", null, bot_msg, /*#__PURE__*/_react.default.createElement("input", {
    name: "bot-field",
    onChange: e => honeypotStateChanger(e.target.value),
    value: honey
  }))), /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    name: "SEARCH",
    id: "mce-SEARCH",
    placeholder: search_placeholder,
    required: true,
    className: "inputzim",
    size: size,
    onChange: e => searchStateChanger(e.target.value),
    value: search,
    "aria-label": "Search"
  }), honey !== '' ? null : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "main-menu-search-input",
    name: "subscribe",
    id: "mc-embedded-subscribe",
    disabled: search ? false : true
  }, warnME || /*#__PURE__*/_react.default.createElement(_ri.RiSearchLine, null))))));
}