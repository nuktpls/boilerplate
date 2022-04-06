"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Menu = _interopRequireDefault(require("../components/Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import useListenOutsideEvents from '../../../tools/useListenOutsideEvents'
const MenuContainer = props => {
  const {
    refState
  } = props;
  const {
    handleRefState
  } = props;
  const wrapperRef = (0, _react.useRef)(null);
  const toggleConfig = {
    wrapperRef: wrapperRef,
    refState: refState,
    handleRefState: handleRefState,
    // application configs
    scroll: true,
    resize: true,
    outsideClick: true,
    hasOverlay: false,
    mouseDown: {
      on: true,
      clickElement: '.menu-wrapper'
    }
  }; // useListenOutsideEvents(toggleConfig)

  const isVisibleClass = toggleConfig.refState ? 'visible' : 'not-visible';
  const isHiddenState = toggleConfig.refState ? false : true; // const ariaVisible = toggleConfig.refState ? 'true' : 'false'

  return /*#__PURE__*/_react.default.createElement(_Menu.default, {
    wrapperRef: toggleConfig.wrapperRef,
    isVisibleClass: isVisibleClass,
    isHiddenState: isHiddenState,
    link_01: props.link_01
  });
};

var _default = MenuContainer;
exports.default = _default;