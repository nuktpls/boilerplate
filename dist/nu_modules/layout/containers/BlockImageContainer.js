"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BlockImage = _interopRequireDefault(require("../components/BlockImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BlockImageContainer = _ref => {
  let {
    opt
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_BlockImage.default, {
    opt: opt
  });
};

var _default = BlockImageContainer;
exports.default = _default;