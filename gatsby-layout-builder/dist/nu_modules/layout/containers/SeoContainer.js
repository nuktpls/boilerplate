"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Seo = _interopRequireDefault(require("../components/Seo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { useSiteMetaDatas } from '../../../tools/useSiteMetaDatas'
// import brandYAML from '@Content/brand.yaml'
function SeoContainer(_ref) {
  let {
    frontmatter = {},
    lang,
    meta,
    title,
    datePublished,
    schemaType,
    titleSeo,
    authorSeo,
    featuredImage,
    blogListing,
    articleBody,
    mainLogo,
    cardImage,
    serverUrl
  } = _ref;
  // const { site } = useSiteMetaDatas()
  const businessName = null;
  const description = null;
  const url = null;
  const image = null;
  const social = null;
  const dateCreated = null;
  const themeColor = null;
  const keywords = null;
  const metaDescription = description;
  return /*#__PURE__*/_react.default.createElement(_Seo.default, {
    lang: lang,
    title: titleSeo || businessName,
    siteTitle: businessName,
    url: url,
    metaDescription: metaDescription,
    description: description,
    meta: meta,
    siteUrl: url,
    image: featuredImage || image,
    organizationLogo: mainLogo,
    author: authorSeo || businessName,
    organization: businessName,
    social: social,
    datePublished: datePublished,
    dateCreated: dateCreated,
    schemaType: schemaType,
    socialSameAs: social,
    blogListing: blogListing,
    articleBody: articleBody,
    keywords: keywords,
    cardImage: cardImage || null,
    serverUrl: url || serverUrl,
    themeColor: themeColor
  });
}

SeoContainer.defaultProps = {
  lang: "pt-br",
  meta: [],
  description: ""
};
SeoContainer.propTypes = {
  description: _propTypes.default.string,
  lang: _propTypes.default.string,
  meta: _propTypes.default.arrayOf(_propTypes.default.object),
  title: _propTypes.default.string.isRequired
};
var _default = SeoContainer;
exports.default = _default;