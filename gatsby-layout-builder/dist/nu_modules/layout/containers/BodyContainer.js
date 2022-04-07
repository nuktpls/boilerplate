"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = _interopRequireDefault(require("../services/context"));

var _Body = _interopRequireDefault(require("../components/Body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
const BodyContainer = _ref => {
  let {
    children,
    opt
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_context.default.Consumer, null, value => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Body.default, {
    opt: opt,
    bgImage: opt.bgImage,
    customClasses: opt.classes
  }, children)));
};

var _default = BodyContainer;
exports.default = _default;