import React from "react";
import {Dialog, DialogContent, CircularProgress, Typography} from "@material-ui/core";
import ActivityDialogReducer from './reducer';
import {eventHideActivityDialog,EVENT_HIDE_ACTIVITY_DIALOG, invokeShowActivityDialog, INVOKE_SHOW_ACTIVITY_DIALOG} from "./actions";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export {
  ActivityDialogReducer,
  eventHideActivityDialog,
  EVENT_HIDE_ACTIVITY_DIALOG,
  invokeShowActivityDialog,
  INVOKE_SHOW_ACTIVITY_DIALOG
}

const ActivityDialog = ({activityDialogReducer}) => {

  const {open, message} = activityDialogReducer;

  return (
    <React.Fragment>
      <Dialog {...{open}}>
        <DialogContent style={{display: "flex", alignItems: "center"}}>
          <CircularProgress />
          <Typography style={{marginLeft: "20px"}}>
            {message}
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const mapStateToProps = ({ActivityDialogReducer}) => ({activityDialogReducer: ActivityDialogReducer});

export default connect(mapStateToProps, {})(ActivityDialog);
