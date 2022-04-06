"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _SchemaOrgContainer = _interopRequireDefault(require("../containers/SchemaOrgContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Seo = _ref => {
  let {
    lang,
    title,
    siteTitle,
    metaDescription,
    meta,
    siteUrl,
    image,
    author,
    organization,
    social,
    datePublished,
    description,
    url,
    schemaType,
    socialSameAs,
    blogListing,
    articleBody,
    keywords,
    dateCreated,
    organizationLogo,
    featuredImage,
    cardImage,
    serverUrl,
    themeColor
  } = _ref;
  const hasBar = serverUrl === null || serverUrl === void 0 ? void 0 : serverUrl.charAt(serverUrl.length - 1);
  const servBar = hasBar === '/' ? serverUrl === null || serverUrl === void 0 ? void 0 : serverUrl.slice(0, -1) : serverUrl;
  const cardImagesrc = servBar + cardImage || servBar || cardImage;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactHelmet.default, {
    htmlAttributes: {
      lang
    },
    titleTemplate: "%s | ".concat(siteTitle)
  }, /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "image",
    content: cardImagesrc || featuredImage
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "keywords",
    content: keywords.map(e => e)
  }), /*#__PURE__*/_react.default.createElement("link", {
    rel: "canonical",
    href: serverUrl
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:url",
    content: serverUrl
  }), schemaType === 'article' ? /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:type",
    content: "article"
  }) : /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:type",
    content: "blog"
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:description",
    content: description
  }), /*#__PURE__*/_react.default.createElement("meta", {
    property: "og:image",
    content: cardImagesrc || featuredImage
  }), social.fbAppID ? /*#__PURE__*/_react.default.createElement("meta", {
    property: "fb:app_id",
    content: social.fbAppID
  }) : null, /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), social.twitter ? /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:creator",
    content: social.twitter
  }) : null, /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:description",
    content: description
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:image:src",
    content: cardImagesrc || featuredImage
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "theme-color",
    content: themeColor || '#FF0081'
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "twitter:site",
    content: "@" + social.twitter
  }), /*#__PURE__*/_react.default.createElement("meta", {
    name: "author",
    content: author
  })), /*#__PURE__*/_react.default.createElement(_SchemaOrgContainer.default, {
    schemaType: schemaType,
    url: siteUrl,
    title: title,
    image: cardImagesrc || image || featuredImage,
    description: description,
    datePublished: datePublished,
    siteUrl: siteUrl,
    author: author,
    organization: organization,
    defaultTitle: title,
    socialSameAs: socialSameAs,
    blogListing: blogListing,
    articleBody: articleBody,
    keywords: keywords,
    dateCreated: dateCreated,
    organizationLogo: organizationLogo,
    serverUrl: serverUrl
  }));
};

var _default = Seo;
exports.default = _default;