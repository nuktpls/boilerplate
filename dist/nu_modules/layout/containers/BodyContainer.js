"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _SeoContainer = _interopRequireDefault(require("../containers/SeoContainer"));

var _context = _interopRequireDefault(require("../services/context"));

var _Body = _interopRequireDefault(require("../components/Body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
const BodyContainer = _ref => {
  let {
    children,
    opt
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_context.default.Consumer, null, value => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_SeoContainer.default, {
    title: opt.titleSeo,
    author: opt.authorSeo,
    datePublished: opt.datePublished,
    schemaType: opt.schemaType,
    titleSeo: opt.titleSeo,
    authorSeo: opt.authorSeo,
    featuredImage: opt.featuredImage,
    blogListing: opt.blogListing,
    articleBody: opt.articleBody,
    mainLogo: opt.mainLogo,
    description: opt.description || null,
    cardImage: opt.cardImage || null,
    serverUrl: opt.serverUrl || null
  }), /*#__PURE__*/_react.default.createElement(_Body.default, {
    opt: opt,
    bgImage: opt.bgImage,
    customClasses: opt.classes
  }, children)));
};

var _default = BodyContainer;
exports.default = _default;