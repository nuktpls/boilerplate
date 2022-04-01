"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

const useListenOutsideEvents = _ref => {
  let {
    setThemeLocation,
    themeLocation
  } = _ref;

  function handelSetLocation(func, location) {
    return func(location);
  }

  (0, _react.useEffect)(() => {
    document.addEventListener('onReady', handelSetLocation(setThemeLocation, themeLocation));
    return () => {
      document.removeEventListener('onReady', handelSetLocation());
    };
  });
};

var _default = useListenOutsideEvents;
exports.default = _default;