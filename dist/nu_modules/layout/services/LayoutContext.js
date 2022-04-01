"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LayoutProvider = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultState = {
  themeLocation: 'zumba',
  bgColor: '#fff',
  handleLocation: null
};

const LayoutContext = /*#__PURE__*/_react.default.createContext(defaultState);

const LayoutProvider = _ref => {
  let {
    children
  } = _ref;
  const [themeLocation, toggleLocation] = (0, _react.useState)(null);
  const [bgColor, toggleBgColor] = (0, _react.useState)(null);
  const [bugInfo, toggleDebugInfo] = (0, _react.useState)(null);

  function handleLocation(newLocation) {
    toggleLocation(newLocation);
  }

  const handleBgColor = newColor => {
    toggleBgColor(newColor);
  };

  const handleDebugInfo = newdebugInfo => {
    toggleDebugInfo(newdebugInfo);
  };

  return /*#__PURE__*/_react.default.createElement(LayoutContext.Provider, {
    value: {
      themeLocation,
      handleLocation: handleLocation,
      bgColor: bgColor,
      handleBgColor: handleBgColor,
      handleDebugInfo: handleDebugInfo,
      bugInfo: bugInfo
    }
  }, children);
};

exports.LayoutProvider = LayoutProvider;
var _default = LayoutContext;
exports.default = _default;