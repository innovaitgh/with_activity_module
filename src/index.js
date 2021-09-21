import React from "react";
import {
  Dialog,
  DialogContent,
  CircularProgress,
  Typography
} from "@material-ui/core";

export const ActivityDialogContext = React.createContext();

const ActivityDialog = ({activityDialogState}) => {

  const {
    open,
    message
  } = activityDialogState;

  return (
    <React.Fragment>
      <Dialog {...{open}} disableEnforceFocus>
        <DialogContent style={{display: "flex", alignItems: "center"}}>
          <CircularProgress />
          <Typography style={{marginLeft: "20px"}}>
            {message}
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );

};

const withActivityDialog = (Component) => (props) => {

  const [activityDialogState, setActivityDialogState] = React.useState({
    open: false,
    message: ""
  });

  const hideActivityDialog = () => setActivityDialogState({ open: false, message: "" });

  const showActivityDialog = (message) => setActivityDialogState({ message, open: true });

  const activityDialogContext = {
    showActivityDialog,
    hideActivityDialog
  }

  return (
    <ActivityDialogContext.Provider value={activityDialogContext}>
      <Component {...props} />
      <ActivityDialog {...{activityDialogState}} />
    </ActivityDialogContext.Provider>
  );

};

export default withActivityDialog;

