"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _gatsbyPluginImage = require("gatsby-plugin-image");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BlockImage = _ref => {
  let {
    opt
  } = _ref;
  const image = opt.queryCard && typeof opt.queryCard === 'object' ? (0, _gatsbyPluginImage.getImage)(opt.queryCard.childrenImageSharp[0]) : !opt.queryCard ? null : (0, _gatsbyPluginImage.getImage)(opt.queryCard);

  if (!image) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, opt.hasLink ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_gatsby.Link, {
    to: opt.link,
    tabIndex: "0"
  }, /*#__PURE__*/_react.default.createElement(_gatsbyPluginImage.GatsbyImage, {
    image: image,
    alt: opt.alt,
    placeholder: opt.placeholder,
    critical: "true",
    className: opt.classes
  }))) : /*#__PURE__*/_react.default.createElement(_gatsbyPluginImage.GatsbyImage, {
    image: image,
    alt: opt.alt,
    placeholder: opt.placeholder,
    critical: "true",
    className: opt.classes
  }));
};

var _default = BlockImage;
exports.default = _default;