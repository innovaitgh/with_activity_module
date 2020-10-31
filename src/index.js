import React from "react";
import {
  Dialog,
  DialogContent,
  CircularProgress,
  Typography
} from "@material-ui/core";

export const ActivityDialogContext = React.createContext();
export const HideActivityDialogDispatch = React.createContext();
export const ShowActivityDialogDispatch = React.createContext();

const ActivityDialog = () => {

  const activityDialogState = React.useContext(ActivityDialogContext);

  const {open, message} = activityDialogState;

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

};

export default (Component) => (props) => {

  const [activityDialogState, setActivityDialogState] = React.useState({
    open: false,
    message: ""
  });

  const hideActivityDialogDispatch = () => setOpen({ ...activityDialogState, open: false });

  const showActivityDialogDispatch = (message) => setOpen({ message, open: true });

  return (
    <ActivityDialogContext.Provider value={activityDialogState}>
      <HideActivityDialogDispatch.Provider value={hideActivityDialogDispatch}>
        <ShowActivityDialogDispatch.Provider value={showActivityDialogDispatch}>
          <Component {...props} />
          <ActivityDialog />
        </ShowActivityDialogDispatch.Provider>
      </HideActivityDialogDispatch.Provider>
    </ActivityDialogContext.Provider>
  );

};
