"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _ = _interopRequireDefault(require("../../../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MainMenuList = _ref => {
  let {
    list,
    indx,
    isMobile,
    handleRefState,
    userIcon,
    refState,
    bagIcon,
    hanburguerIcon
  } = _ref;

  if (list.item.href) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: indx,
      role: "none"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: list.item.href,
      role: isMobile ? 'menuitem' : null,
      itemProp: "url",
      title: list.item.label,
      "aria-label": "Acesso a p\xE1gina: ".concat(list.item.label, ", no webs\xEDtio da Descola")
    }, list.item.label));
  }

  if (list.item.to) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: indx,
      role: "none"
    }, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
      to: list.item.to,
      role: isMobile ? 'menuitem' : null,
      itemProp: "url",
      title: list.item.label,
      "aria-label": "Acesso a p\xE1gina: ".concat(list.item.label, ", no webs\xEDtio da Descola")
    }, list.item.label));
  }

  if (list.item.icon) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "menu-shop-bag",
      key: indx,
      role: "none"
    }, bagIcon);
  }

  if (list.item.search_widget) {
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "main-menu-search",
      key: indx
    }, /*#__PURE__*/_react.default.createElement(_.default, {
      type: "SEARCH",
      opt: {
        placeholder: list.item.search_label,
        searchStringBase: list.item.search_url_prefix
      }
    }));
  }

  if (isMobile) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "header-columns toggle-menu"
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "menu-shop-bag-mobile"
    }, userIcon), /*#__PURE__*/_react.default.createElement("p", {
      className: "menu-shop-bag-mobile",
      tabIndex: "-1"
    }, /*#__PURE__*/_react.default.createElement(RiShoppingBag3Line, null)), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      id: "check-toggle-icon",
      onClick: handleRefState,
      "aria-haspopup": "true",
      "aria-controls": "mainmenu",
      "aria-expanded": refState,
      "aria-label": "Alternar visibilidade do menu",
      className: "menu-wrapper menu-bar-icon mobile-only ".concat(refState ? 'active' : 'not-active')
    }, hanburguerIcon));
  }

  return null;
};

var _default = MainMenuList;
exports.default = _default;