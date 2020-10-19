import React from "react";
import {Dialog, DialogContent, CircularProgress, Typography} from "@material-ui/core";
import ActivityDialogReducer from './reducer';
import {eventHideActivityDialog,EVENT_HIDE_ACTIVITY_DIALOG, invokeShowActivityDialog, INVOKE_SHOW_ACTIVITY_DIALOG} from "./actions";

export {
  ActivityDialogReducer,
  eventHideActivityDialog,
  EVENT_HIDE_ACTIVITY_DIALOG,
  invokeShowActivityDialog,
  INVOKE_SHOW_ACTIVITY_DIALOG
}

export default ({activityDialogReducer}) => {
  const {open, message} = activityDialogReducer;

  return (
    <React.Fragment>
      <Dialog {...{open}}>
        <DialogContent>
          <CircularProgress />
          <Typography>
            {message}
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
