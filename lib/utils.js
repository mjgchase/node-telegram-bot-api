'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deprecate = undefined;

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deprecate = exports.deprecate = function deprecate(msg) {
  return _util2.default.deprecate(function () {}, msg, 'node-telegram-bot-api')();
};