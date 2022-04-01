"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.json.stringify.js");

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = /*#__PURE__*/_react.default.memo(_ref => {
  let {
    author,
    siteUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    schemaType,
    organization,
    title,
    url,
    socialSameAs,
    blogListing,
    articleBody,
    keywords,
    dateCreated,
    organizationLogo,
    telephone,
    sameAs,
    email,
    brandName,
    brandDescription,
    brandUrl,
    inLanguage,
    keywordsSchema,
    featuredImage
  } = _ref;
  console.log(organizationLogo);
  const dateNow = Date.now();
  const authorType = author === 'Descola' ? 'Organization' : 'Person';
  const orgSchema = [{
    '@type': ['Organization'],
    '@context': 'http://schema.org',
    name: title,
    url: brandUrl,
    email: email,
    description: brandDescription,
    sameAs: [sameAs.instagram, sameAs.facebook, sameAs.linkedIn, sameAs.youtube],
    potentialAction: 'Learning',
    logo: organizationLogo,
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: telephone,
      contactType: 'Serviço Ao Cliente'
    }]
  }];
  const webSiteSchema = [{
    '@type': 'WebSite',
    '@context': 'http://schema.org',
    name: title,
    description: brandDescription,
    url: brandUrl,
    potentialAction: 'Learning',
    keywords: [keywords.map(e => e)],
    inLanguage: inLanguage,
    copyrightYear: new Date().getFullYear(),
    datePublished: dateCreated,
    dateModified: dateNow,
    image: image || featuredImage,
    sameAs: [sameAs.instagram, sameAs.facebook, sameAs.linkedIn, sameAs.youtube]
  }]; // "potentialAction":
  // {
  // 	"@type": "SearchAction",
  // 	"target":
  // 	{
  // 		"@type": "EntryPoint",
  // 		"urlTemplate": "https://busca.uol.com.br/result.html?term={search_term_string}#gsc.tab=0&gsc.q={search_term_string}&gsc.page=1"
  // 	},
  // 	"query-input": "required name=search_term_string"
  // }

  const articleSchema = [{
    '@context': 'http://schema.org',
    '@type': 'NewsArticle',
    name: title,
    headline: 'excerpt',
    description: description,
    author: {
      '@type': authorType,
      name: author,
      url: siteUrl
    },
    image: {
      '@type': 'ImageObject',
      url: image || featuredImage,
      height: 156,
      width: 60
    },
    articleBody: articleBody,
    publisher: {
      '@type': 'Organization',
      name: brandName,
      url: brandUrl,
      logo: {
        '@type': 'ImageObject',
        url: organizationLogo,
        width: 156,
        height: 60
      }
    },
    datePublished: datePublished
  }];
  return /*#__PURE__*/_react.default.createElement(_reactHelmet.Helmet, null, schemaType === 'article' ? /*#__PURE__*/_react.default.createElement("script", {
    type: "application/ld+json",
    "data-schema": "Article"
  }, JSON.stringify(articleSchema)) : null, /*#__PURE__*/_react.default.createElement("script", {
    type: "application/ld+json",
    "data-schema": "WebSite"
  }, JSON.stringify(webSiteSchema)), /*#__PURE__*/_react.default.createElement("script", {
    type: "application/ld+json",
    "data-schema": "Organization"
  }, JSON.stringify(orgSchema)));
});

exports.default = _default;