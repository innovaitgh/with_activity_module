"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventHideActivityDialog = exports.invokeShowActivityDialog = exports.EVENT_HIDE_ACTIVITY_DIALOG = exports.INVOKE_SHOW_ACTIVITY_DIALOG = void 0;
var INVOKE_SHOW_ACTIVITY_DIALOG = "INVOKE_SHOW_ACTIVITY_DIALOG";
exports.INVOKE_SHOW_ACTIVITY_DIALOG = INVOKE_SHOW_ACTIVITY_DIALOG;
var EVENT_HIDE_ACTIVITY_DIALOG = "EVENT_HIDE_ACTIVITY_DIALOG";
exports.EVENT_HIDE_ACTIVITY_DIALOG = EVENT_HIDE_ACTIVITY_DIALOG;

var invokeShowActivityDialog = function invokeShowActivityDialog(message) {
  return {
    type: INVOKE_SHOW_ACTIVITY_DIALOG,
    payload: message
  };
};

exports.invokeShowActivityDialog = invokeShowActivityDialog;

var eventHideActivityDialog = function eventHideActivityDialog() {
  return {
    type: EVENT_HIDE_ACTIVITY_DIALOG
  };
};

exports.eventHideActivityDialog = eventHideActivityDialog;