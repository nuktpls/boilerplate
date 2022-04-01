"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GlobalProvider = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultState = {
  pageNameState: 'Home',
  handlePageName: null
};

const GlobalContext = /*#__PURE__*/_react.default.createContext(defaultState);

const GlobalProvider = _ref => {
  let {
    children,
    pageName
  } = _ref;
  const [pageNameState, togglePageName] = (0, _react.useState)('Home');

  function handlePageName(xxx) {
    togglePageName(xxx);
  }

  return /*#__PURE__*/_react.default.createElement(GlobalContext.Provider, {
    value: {
      pageNameState,
      handlePageName: handlePageName
    }
  }, children);
};

exports.GlobalProvider = GlobalProvider;
var _default = GlobalContext;
exports.default = _default;