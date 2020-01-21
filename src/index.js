import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";


function RenderDialog({ open }){
  return(
    <React.Fragment>
      <Dialog { ...{ open } }>
        <DialogContent>
          <CircularProgress />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default function (Component) {
  return function(props){
    const [open, setOpen] = React.useState(false);

    React.useEffect(function(){
      return function(){ toggleActivity(false); };
    }, []);

    function toggleActivity(e) { setOpen(e); };

    return (
      <React.Fragment>
        <RenderDialog { ...{ open } } />
        <Component { ...props } { ...{ toggleActivity, open } } />
      </React.Fragment>
    );
  }
}
