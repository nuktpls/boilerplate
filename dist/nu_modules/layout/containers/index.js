"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _BodyContainer = _interopRequireDefault(require("./BodyContainer"));

var _HeaderContainer = _interopRequireDefault(require("./HeaderContainer"));

var _FooterContainer = _interopRequireDefault(require("./FooterContainer"));

var _RowContainer = _interopRequireDefault(require("./RowContainer"));

var _BlockImageContainer = _interopRequireDefault(require("./BlockImageContainer"));

var _FormContainer = _interopRequireDefault(require("./FormContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LayoutResolver = _ref => {
  let {
    subAgent,
    opt,
    type,
    sectionTitle,
    setLocation,
    logo
  } = _ref;

  function renderComponent(renderThis) {
    switch (renderThis) {
      case 'BODY':
        return /*#__PURE__*/_react.default.createElement(_BodyContainer.default, {
          children: subAgent,
          opt: opt
        });

      case 'FOOTER':
        return /*#__PURE__*/_react.default.createElement(_FooterContainer.default, {
          children: subAgent,
          opt: opt
        });

      case 'BLOCK_IMAGE':
        return /*#__PURE__*/_react.default.createElement(_BlockImageContainer.default, {
          opt: opt
        });

      case 'SEARCH':
        return /*#__PURE__*/_react.default.createElement(_FormContainer.default, {
          opt: opt
        });
      // case 'BLOCK_SHARE':
      // return <BlockShareContainer opt={opt} />

      case 'HEADER':
        return /*#__PURE__*/_react.default.createElement(_HeaderContainer.default, {
          logo: logo,
          opt: opt
        });

      case 'ROW':
        return /*#__PURE__*/_react.default.createElement(_RowContainer.default, {
          opt: opt,
          children: subAgent,
          sectionTitle: sectionTitle,
          setLocation: setLocation
        });

      default:
        return console.log(renderThis);
    }
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderComponent(type));
};

var _default = LayoutResolver;
exports.default = _default;