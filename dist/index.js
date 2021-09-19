"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ActivityDialogContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ActivityDialogContext = /*#__PURE__*/_react["default"].createContext();

exports.ActivityDialogContext = ActivityDialogContext;

var ActivityDialog = function ActivityDialog() {
  var _React$useContext = _react["default"].useContext(ActivityDialogContext),
      open = _React$useContext.open,
      message = _React$useContext.message;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Dialog, {
    open: open
  }, /*#__PURE__*/_react["default"].createElement(_core.DialogContent, {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, null), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    style: {
      marginLeft: "20px"
    }
  }, message))));
};

var withActivityDialog = function withActivityDialog(Component) {
  return function (props) {
    var _React$useState = _react["default"].useState({
      open: false,
      message: ""
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        activityDialogState = _React$useState2[0],
        setActivityDialogState = _React$useState2[1];

    var hideActivityDialog = function hideActivityDialog() {
      return setActivityDialogState({
        open: false,
        message: ""
      });
    };

    var showActivityDialog = function showActivityDialog(message) {
      return setActivityDialogState({
        message: message,
        open: true
      });
    };

    var activityDialogContext = {
      activityDialogState: activityDialogState,
      showActivityDialog: showActivityDialog,
      hideActivityDialog: hideActivityDialog
    };
    return /*#__PURE__*/_react["default"].createElement(ActivityDialogContext.Provider, {
      value: activityDialogContext
    }, /*#__PURE__*/_react["default"].createElement(Component, props), /*#__PURE__*/_react["default"].createElement(ActivityDialog, null));
  };
};

var _default = withActivityDialog;
exports["default"] = _default;