"use strict";

var _config = require("./config");
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(_config.config.port);
console.log("Server running on port ".concat(_config.config.port));