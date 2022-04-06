"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsbyPluginImage = require("gatsby-plugin-image");

var _slugify = _interopRequireDefault(require("./slugify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InsertHTML = _ref => {
  let {
    type,
    params,
    opt,
    children,
    bgOpt,
    bgImg
  } = _ref;
  let elementClass = opt ? opt.elementClass : type;

  switch (type) {
    case 'img':
      if (params.srcSet && params.sizes && params.src) {
        const alt = params.alt ? params.alt : 'image desciption';
        return /*#__PURE__*/_react.default.createElement("img", {
          className: elementClass,
          srcSet: params.srcSet,
          sizes: params.sizes,
          src: params.src,
          alt: alt
        });
      } else {
        return null;
      }

    case 'heading':
      if (params.heading) {
        return /*#__PURE__*/_react.default.createElement("h2", {
          className: elementClass
        }, params.heading);
      } else {
        return null;
      }

    case 'paragraph':
      if (params.paragraph) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: elementClass,
          dangerouslySetInnerHTML: {
            __html: params.paragraph
          }
        });
      } else {
        return null;
      }

    case 'link':
      if (params.link && params.linkText) {
        return /*#__PURE__*/_react.default.createElement("a", {
          className: elementClass,
          href: params.link
        }, params.linkText);
      } else {
        return null;
      }

    case 'row':
      const SubRow = _ref2 => {
        let {
          children,
          element,
          numColumns,
          rowWidth,
          boxed,
          themeColor,
          bgImg
        } = _ref2;

        // const basis = 100 / params.numColumns
        switch (element) {
          case 'list':
            return /*#__PURE__*/_react.default.createElement("li", {
              className: rowWidth + '-child'
            }, children);

          default:
            return /*#__PURE__*/_react.default.createElement("div", {
              className: rowWidth + '-child ' + opt.elementClass,
              role: opt.role || null,
              style: {
                backgroundColor: bgOpt.theme_color && opt.boxed === true ? bgOpt.value_bgColor : null,
                backgroundImage: bgImg,
                display: 'grid',
                gridTemplateColumns: "repeat(".concat(opt.numColumns, ", ").concat(opt.widthColumns, ")")
              }
            }, children);
        }
      };

      if (params.element && children) {
        const rowWidth = opt.boxed ? 'boxed-column' : 'full-width-row';
        const heading = params.rowHeading ? /*#__PURE__*/_react.default.createElement("h2", {
          className: "row-heading"
        }, params.rowHeading, " ") : null;
        elementClass = elementClass ? elementClass : '';

        switch (params.element) {
          case 'list':
            return /*#__PURE__*/_react.default.createElement("ul", {
              className: rowWidth + ' ' + elementClass + ' align-to-' + opt.alignTo + ' responsive-padding' + ' ' + bgOpt.value_bgColor ? bgOpt.theme_color : '',
              style: {
                backgroundColor: bgOpt.theme_color && opt.boxed !== false ? bgOpt.value_bgColor : 'transparent'
              }
            }, heading, /*#__PURE__*/_react.default.createElement(SubRow, {
              children: children,
              element: params.element,
              numColumns: opt.numColumns,
              rowWidth: rowWidth
            }));

          case 'divisor':
            let refImage = null;

            if (bgOpt.background) {
              refImage = (0, _gatsbyPluginImage.getImage)(bgOpt.background.datas);
            }

            elementClass = elementClass ? elementClass : '';
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "".concat(rowWidth, " ").concat(elementClass, " align-to-").concat(opt.alignTo, " responsive-padding ").concat(bgOpt.value_bgColor ? bgOpt.theme_color : ''),
              style: {
                backgroundColor: bgOpt.theme_color && opt.boxed === false ? bgOpt.value_bgColor : null,
                backgroundImage: bgImg
              }
            }, bgImg ? /*#__PURE__*/_react.default.createElement(_gatsbyPluginImage.GatsbyImage, {
              image: refImage,
              src: refImage,
              srcSet: refImage,
              layout: 'fullWidth',
              formats: ['auto'],
              alt: "asd" // style={
              // 	!bgImg.alignTo
              // 		? { objectPosition: 'top' }
              // 		: { objectPosition: bgImg.alignTo }
              // }
              ,
              className: "gatsbyImgHero",
              imgClassName: "imgHero",
              objectPosition: !bgImg.alignTo ? 'top' : bgImg.alignTo
            }) : null, heading, /*#__PURE__*/_react.default.createElement(SubRow, {
              children: children,
              element: params.element,
              numColumns: opt.numColumns,
              rowWidth: rowWidth,
              themeColor: bgOpt.theme_color,
              boxed: opt.boxed,
              bgImg: bgImg
            }));

          default:
            return /*#__PURE__*/_react.default.createElement("div", {
              className: elementClass + ' responsive-padding' + ' ' + bgOpt.theme_color || bgOpt.value_bgColor,
              style: {
                backgroundColor: bgOpt.theme_color ? null : bgOpt.value_bgColor
              }
            }, children);
        }
      } else {
        return null;
      }

    case 'carousel':
      if (children && params.wrapperRef) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: 'grid-' + params.gridType + ' ' + elementClass
        }, /*#__PURE__*/_react.default.createElement("ul", {
          ref: params.wrapperRef,
          className: 'grid-' + params.gridType + '-list ' + elementClass + '-list no-pdd-mrg-first-last-child'
        }, children));
      } else {
        return null;
      }

    case 'content-item':
      if (params.gridType && params.gridClass) {
        const basis = 100 / opt.numColumns;
        const elementTag = params.gridType === 'carousel' ? /*#__PURE__*/_react.default.createElement("li", {
          className: params.gridClass,
          style: {
            flexBasis: basis + '%',
            minWidth: basis + '%'
          }
        }, children) : /*#__PURE__*/_react.default.createElement("div", {
          className: params.gridClass // style={{ flexBasis: basis + '%' }}

        }, children);
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, elementTag);
      } else {
        return null;
      }

    case 'columns':
      if (children) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: 'grid-' + params.gridType + '-list',
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: params.alignTo
          }
        }, children);
      } else {
        return null;
      }

    case 'form':
      if (params.form && params.formID && params.textButton && params.heading && params.buttonColor && params.textButtonColor && params.tksMsg) {
        const formId = (0, _slugify.default)(params.formID);
        const visibleClassState = params.refState ? 'visible' : 'not-visible';
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
          className: "modal-button-wrapper"
        }, /*#__PURE__*/_react.default.createElement("button", {
          onClick: params.handleRefState,
          className: "modal-button button-black-gray"
        }, "Nu\xE9")), /*#__PURE__*/_react.default.createElement("div", {
          id: "ref-overlay",
          ref: params.wrapperRef,
          className: 'modal-wrapper modal-state-' + visibleClassState
        }, /*#__PURE__*/_react.default.createElement("div", {
          id: "ref-inner",
          className: "modal-inner black-row",
          style: {
            backgroundColor: params.modalBackgroundColor
          }
        }, /*#__PURE__*/_react.default.createElement("button", {
          className: "close-button",
          onClick: params.handleRefState
        }, "X"), /*#__PURE__*/_react.default.createElement("div", {
          className: "modal-content"
        }, /*#__PURE__*/_react.default.createElement("h2", {
          className: "modal-heading"
        }, params.heading), /*#__PURE__*/_react.default.createElement("div", {
          className: "modal-text",
          dangerouslySetInnerHTML: {
            __html: params.modalText
          }
        }), /*#__PURE__*/_react.default.createElement("div", {
          id: "modal-code"
        }, /*#__PURE__*/_react.default.createElement("form", {
          name: params.formID,
          method: "POST",
          "data-netlify": "true",
          "netlify-honeypot": "bot-field",
          className: "modal-form align-center",
          id: formId
        }, /*#__PURE__*/_react.default.createElement("p", {
          className: "bot-field-hide"
        }, /*#__PURE__*/_react.default.createElement("label", null, "Don\u2019t fill this out if you're human:", /*#__PURE__*/_react.default.createElement("input", {
          name: "bot-field"
        }))), /*#__PURE__*/_react.default.createElement("div", {
          className: "modal-code-div",
          dangerouslySetInnerHTML: {
            __html: params.form
          }
        }), /*#__PURE__*/_react.default.createElement("button", {
          type: "submit",
          className: "modal-submit button-black-gray",
          style: {
            backgroundColor: params.buttonColor,
            color: params.textButtonColor,
            borderColor: params.textButtonColor
          }
        }, params.textButton)))))));
      } else {
        return null;
      }

    default:
      return null;
  }
};

var _default = InsertHTML;
exports.default = _default;