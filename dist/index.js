"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireDefault(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RenderDialog(_ref) {
  var open = _ref.open;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Dialog["default"], {
    open: open
  }, _react["default"].createElement(_DialogContent["default"], null, _react["default"].createElement(_CircularProgress["default"], null))));
}

function _default(Component) {
  return function (props) {
    var _React$useState = _react["default"].useState(false),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    _react["default"].useEffect(function () {
      return function () {
        toggleActivity(false);
      };
    }, []);

    function toggleActivity(e) {
      setOpen(e);
    }

    ;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(RenderDialog, {
      open: open
    }), _react["default"].createElement(Component, _extends({}, props, {
      toggleActivity: toggleActivity,
      open: open
    })));
  };
}