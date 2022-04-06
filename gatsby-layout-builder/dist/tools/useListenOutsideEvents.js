"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const useListenOutsideEvents = _ref => {
  let {
    handleRefState,
    refState,
    wrapperRef,
    mouseDown,
    outsideClick,
    hasOverlay,
    scroll,
    resize
  } = _ref;

  function handleClickOutside(event) {
    const refElement = wrapperRef.current;
    const isntClickOverlay = event.target.id !== 'ref-overlay';
    const isClickInside = outsideClick ? refElement.contains(event.target) : true;
    const isntOutsideClick = hasOverlay ? isntClickOverlay : isClickInside;
    const customMouseDown = mouseDown ? event.target.closest(mouseDown.clickElement) === null : true;

    if (refElement && refState && !isntOutsideClick && customMouseDown) {
      return handleRefState();
    }
  }

  const [width, setWidth] = (0, _react.useState)(0);

  const handleWindowsEvent = event => {
    setWidth(window.innerWidth);

    if (refState !== false && width > 768 && event.type === 'scroll') {
      handleRefState();
    }
  };

  (0, _react.useEffect)(() => {
    if (mouseDown || outsideClick) document.addEventListener('mousedown', handleClickOutside);
    if (resize) window.addEventListener('resize', handleWindowsEvent);
    if (scroll) window.addEventListener('scroll', handleWindowsEvent);
    return () => {
      if (mouseDown || outsideClick) document.removeEventListener('mousedown', handleClickOutside);
      if (resize) window.removeEventListener('resize', handleWindowsEvent);
      if (scroll) window.removeEventListener('scroll', handleWindowsEvent);
    };
  });
};

var _default = useListenOutsideEvents;
exports.default = _default;