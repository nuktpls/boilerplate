"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _context = _interopRequireDefault(require("../services/context"));

var _Body = _interopRequireDefault(require("../components/Body"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line
const BodyContainer = _ref => {
  var _opt$bgImage;

  let {
    children,
    opt
  } = _ref;
  const bgImage = bgImage ? {
    backgroundImage: "url(".concat(opt === null || opt === void 0 ? void 0 : (_opt$bgImage = opt.bgImage) === null || _opt$bgImage === void 0 ? void 0 : _opt$bgImage.src, ")")
  } : null;
  return /*#__PURE__*/_react.default.createElement(_context.default.Consumer, null, value => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Body.default, {
    opt: opt || false,
    customClasses: (opt === null || opt === void 0 ? void 0 : opt.classes) || '',
    bgImage: bgImage || false
  }, children)));
};

var _default = BodyContainer;
exports.default = _default;