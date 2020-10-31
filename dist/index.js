"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ShowActivityDialogDispatch = exports.HideActivityDialogDispatch = exports.ActivityDialogContext = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ActivityDialogContext = _react["default"].createContext();

exports.ActivityDialogContext = ActivityDialogContext;

var HideActivityDialogDispatch = _react["default"].createContext();

exports.HideActivityDialogDispatch = HideActivityDialogDispatch;

var ShowActivityDialogDispatch = _react["default"].createContext();

exports.ShowActivityDialogDispatch = ShowActivityDialogDispatch;

var ActivityDialog = function ActivityDialog() {
  var activityDialogState = _react["default"].useContext(ActivityDialogContext);

  var open = activityDialogState.open,
      message = activityDialogState.message;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_core.Dialog, {
    open: open
  }, _react["default"].createElement(_core.DialogContent, {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, _react["default"].createElement(_core.CircularProgress, null), _react["default"].createElement(_core.Typography, {
    style: {
      marginLeft: "20px"
    }
  }, message))));
};

var _default = function _default(Component) {
  return function (props) {
    var _React$useState = _react["default"].useState({
      open: false,
      message: ""
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        activityDialogState = _React$useState2[0],
        setActivityDialogState = _React$useState2[1];

    var hideActivityDialogDispatch = function hideActivityDialogDispatch() {
      return setOpen(_objectSpread({}, activityDialogState, {
        open: false
      }));
    };

    var showActivityDialogDispatch = function showActivityDialogDispatch(message) {
      return setOpen({
        message: message,
        open: true
      });
    };

    return _react["default"].createElement(ActivityDialogContext.Provider, {
      value: activityDialogState
    }, _react["default"].createElement(HideActivityDialogDispatch.Provider, {
      value: hideActivityDialogDispatch
    }, _react["default"].createElement(ShowActivityDialogDispatch.Provider, {
      value: showActivityDialogDispatch
    }, _react["default"].createElement(Component, props), _react["default"].createElement(ActivityDialog, null))));
  };
};

exports["default"] = _default;