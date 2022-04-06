"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = excerpt;

/* eslint-disable */
function excerpt(str, max, suffix) {
  if (!str) {
    return null;
  }

  return str.length < max ? str : "".concat(str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))).concat(suffix);
}