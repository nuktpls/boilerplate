"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _MainMenuList = _interopRequireDefault(require("../components/MainMenuList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import useListenOutsideEvents from "../../../tools/useListenOutsideEvents";
// import { mainMenuEventsSettings } from '../config/'
// import mainMenuYAML from '@Content/menus/main-menu.yaml'
const MainMenuContainer = _ref => {
  let {
    refState,
    mainMenuStatus,
    isMobile,
    wrapperRef
  } = _ref;
  const mainMenuItems = null;
  const isVisibleClass = refState ? 'visible' : 'not-visible';
  const navClasses = isMobile ? 'main-nav menu-state-' + isVisibleClass : 'main-nav desktop-onl main-header main-header-' + isVisibleClass;
  const labelledby = isMobile ? 'check-toggle-icon' : null; // const { handleRefState } = props;
  // const toggleConfig = mainMenuEventsSettings({
  //   wrapperRef,
  //   handleRefState,
  //   refState,
  // });
  // useListenOutsideEvents(toggleConfig);
  // if (mainMenuStatus !== 'active') {
  // 	return null
  // }

  return /*#__PURE__*/_react.default.createElement("nav", {
    className: navClasses,
    ref: wrapperRef,
    id: "site-navigation",
    itemScope: "itemScope",
    itemType: "http://schema.org/SiteNavigationElement"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "main-ul",
    id: "mainmenu",
    role: "menu",
    "aria-labelledby": labelledby
  }, mainMenuItems === null || mainMenuItems === void 0 ? void 0 : mainMenuItems.map((listMobile, indxMobile) => /*#__PURE__*/_react.default.createElement(_MainMenuList.default, {
    list: listMobile,
    key: indxMobile,
    isMobile: isMobile
  }))));
};

var _default = MainMenuContainer;
exports.default = _default;