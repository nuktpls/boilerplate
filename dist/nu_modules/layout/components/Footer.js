"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import SocialInfos from './SocialInfos'
// import {
// 	RiInstagramFill,
// 	RiYoutubeFill,
// 	RiTwitterFill,
// 	RiFacebookCircleFill,
// } from 'react-icons/ri'
const Footer = _ref => {
  let {
    children,
    opt
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "container footer-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "text-center"
  }, children)));
};

var _default = Footer;
exports.default = _default;