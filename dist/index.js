"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ActivityDialogReducer", {
  enumerable: true,
  get: function get() {
    return _reducer["default"];
  }
});
Object.defineProperty(exports, "eventHideActivityDialog", {
  enumerable: true,
  get: function get() {
    return _actions.eventHideActivityDialog;
  }
});
Object.defineProperty(exports, "EVENT_HIDE_ACTIVITY_DIALOG", {
  enumerable: true,
  get: function get() {
    return _actions.EVENT_HIDE_ACTIVITY_DIALOG;
  }
});
Object.defineProperty(exports, "invokeShowActivityDialog", {
  enumerable: true,
  get: function get() {
    return _actions.invokeShowActivityDialog;
  }
});
Object.defineProperty(exports, "INVOKE_SHOW_ACTIVITY_DIALOG", {
  enumerable: true,
  get: function get() {
    return _actions.INVOKE_SHOW_ACTIVITY_DIALOG;
  }
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _reducer = _interopRequireDefault(require("./reducer"));

var _actions = require("./actions");

var _redux = require("redux");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ActivityDialog = function ActivityDialog(_ref) {
  var activityDialogReducer = _ref.activityDialogReducer;
  var open = activityDialogReducer.open,
      message = activityDialogReducer.message;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_core.Dialog, {
    open: open
  }, _react["default"].createElement(_core.DialogContent, {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, _react["default"].createElement(_core.CircularProgress, null), _react["default"].createElement(_core.Typography, {
    style: {
      marginRight: "20px"
    }
  }, message))));
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var ActivityDialogReducer = _ref2.ActivityDialogReducer;
  return {
    activityDialogReducer: ActivityDialogReducer
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(ActivityDialog);

exports["default"] = _default;