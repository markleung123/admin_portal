import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@material-ui/core";
import AccountDetails from "./AccountDetails";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function AccPopUp({ AccInfo }) {
  // console.log(id);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //   const [fullWidth, setFullWidth] = React.useState(true);
  //   const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const handleMaxWidthChange = (event) => {
  //     setMaxWidth(event.target.value);
  //   };

  //   const handleFullWidthChange = (event) => {
  //     setFullWidth(event.target.checked);
  //   };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        TEST
      </Button>
      <Dialog fullWidth={30} maxWidth={30} open={open} onClose={handleClose}>
        <DialogTitle id="account-details-dialog-title">
          Account Details
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Account Details</DialogContentText> */}
          <form className={classes.form} noValidate>
            <AccountDetails AccInfo={AccInfo} />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
