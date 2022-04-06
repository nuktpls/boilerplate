"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _InsertHTML = _interopRequireDefault(require("../../../tools/InsertHTML"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Row = _ref => {
  let {
    children,
    params,
    opt,
    bgOpt,
    bgImg,
    bugInfo
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InsertHTML.default, {
    type: "row",
    params: params,
    opt: opt,
    children: children,
    bgOpt: bgOpt,
    bgImg: bgImg
  }));
};

var _default = Row;
exports.default = _default;