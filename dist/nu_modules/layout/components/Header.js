"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _ = _interopRequireDefault(require("../../../../"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import MainMenuContainer from '../containers/MainMenuContainer'
// import MainMenuMobile from './MainMenuMobile'
// import MainMenuList from './MainMenuList'
// import layoutYAML from '@Content/configs/layout.yaml'
// import mainMenuYAML from '../../../../c'
const Header = _ref => {
  let {
    refState,
    handleRefState,
    mainMenu,
    logoComponent,
    logoSvg,
    logoUrl,
    menuActive,
    logo,
    wrapperRef
  } = _ref;
  // const mainMenuItems = mainMenuYAML.menu.items
  // const mainMenuStatus = mainMenuYAML.menu.status
  // const { logo_url, link_01 } = layoutYAML.layout02
  return /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement(_.default, {
    type: "ROW",
    opt: {
      isBoxed: false,
      bgColor: '#e9e9ed',
      classes: 'mobile-header mobile-only'
    }
  }, logo), /*#__PURE__*/_react.default.createElement(_.default, {
    type: "ROW",
    opt: {
      bgColor: '#e9e9ed',
      isBoxed: false
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    type: "ROW",
    opt: {
      isBoxed: true,
      classes: 'top-hibbon desktop-only',
      alignTo: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
    href: '#'
  }, "Login / Registre-se")))), /*#__PURE__*/_react.default.createElement(_.default, {
    type: "ROW",
    opt: {
      bgColor: '#f6f7fa',
      isBoxed: false,
      classes: 'header-logo-wrapper desktop-only'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    type: "ROW",
    opt: {
      isBoxed: true,
      classes: 'header-logo'
    }
  }, logo)));
};

var _default = Header;
exports.default = _default;