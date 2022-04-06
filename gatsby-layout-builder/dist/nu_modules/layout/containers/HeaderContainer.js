"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _Header = _interopRequireDefault(require("../components/Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import layoutYAML from '@Content/configs/layout.yaml'
const HeaderContainer = _ref => {
  let {
    logo,
    opt
  } = _ref;
  const [refState, setRefState] = (0, _react.useState)(false);
  const wrapperRef = (0, _react.useRef)(null);

  function handleRefState() {
    setRefState(!refState);
  }

  const logoHeader = opt ? opt.logoHeader : null;
  const hasMainMenu = opt ? opt.mainMenu : null;
  const menuActive = refState ? 'visible' : 'not-visible'; // const mainMenuItems = mainMenuYAML.menu.items

  const {
    logo_url
  } = null;
  const logotype = logo_url ? /*#__PURE__*/_react.default.createElement("a", {
    href: logo_url,
    className: "logo-link"
  }, opt.logoSvg) : /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: "/",
    className: "logo-link"
  }, opt.logoSvg);
  return /*#__PURE__*/_react.default.createElement(_Header.default // logo={logo}
  , {
    logoSvg: opt.logoSvg,
    refState: refState,
    handleRefState: handleRefState,
    logoComponent: logoHeader,
    mainMenu: hasMainMenu,
    logoUrl: opt.logoUrl,
    menuActive: menuActive,
    logo: logotype,
    wrapperRef: wrapperRef
  });
};

var _default = HeaderContainer;
exports.default = _default;