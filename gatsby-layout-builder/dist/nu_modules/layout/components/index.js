"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = _interopRequireDefault(require("../services/context"));

var _Body = _interopRequireDefault(require("../components/Body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
const LayoutResolver = _ref => {
  let {
    children,
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_context.default.Consumer, null, value => /*#__PURE__*/_react.default.createElement(_Body.default, null, children));
};

var _default = LayoutResolver;
exports.default = _default;
LayoutResolver.propTypes = {
  children: _propTypes.default.node.isRequired
};