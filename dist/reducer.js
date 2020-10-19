"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actions = require("./actions");

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    open: false,
    message: ""
  };

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions.EVENT_HIDE_ACTIVITY_DIALOG:
      return {
        open: false
      };

    case _actions.INVOKE_SHOW_ACTIVITY_DIALOG:
      return {
        open: true,
        message: payload
      };

    default:
      return state;
  }
};

exports["default"] = _default;