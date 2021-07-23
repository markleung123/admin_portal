import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import axios from "axios";
import { Button } from "@material-ui/core";
// import FormControl from "@material-ui/core/FormControl";
// import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// import BackButton from "../components/BackButton";
import DraggableDialog from "../components/Dialog";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function AccountDetails({ AccInfo }) {
  // console.log(AccInfo);
  const classes = useStyles();

  const [brands, setBrands] = useState([]);
  const [data, setData] = useState([]);

  const [state, setState] = useState({
    id: AccInfo.id,
    name: AccInfo.name,
    lastname: AccInfo.lastname,
    country: AccInfo.country,
    phone: AccInfo.phone,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const State = state;
    // const headers = {
    //   "Content-Type": "application/json;charset=utf-8",
    // };
    // axios.defaults.baseURL = "https://cors-anywhere.herokuapp.com/";
    axios
      .post("http://localhost:8091/poparedadmin/admin/updataUser", {
        id: State.id,
        name: State.name,
        lastname: State.lastname,
        country: State.country,
        phone: State.phone,
      })
      .then((response) => {
        setState(response.data.data);
        console.log(state);
        console.log(response);
      });
  };

  console.log(state);
  // const handleChange = (event) => {
  //   setName(event.target.value);
  //   console.log(name);
  // };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        {/* <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input
          id="component-simple"
          value={name}
          onChange={handleChange}
          defaultValue={AccInfo.name}
        /> */}
        <TextField
          required
          id="standard-required"
          label="Name"
          name="name"
          // value={name}
          onChange={handleChange}
          defaultValue={state.name}
        />
        <TextField
          required
          id="standard-required"
          label="Last name"
          name="lastname"
          onChange={handleChange}
          defaultValue={state.lastname}
        />
        <TextField
          required
          id="standard-required"
          label="Phone"
          name="phone"
          onChange={handleChange}
          defaultValue={state.phone}
        />
        <TextField
          required
          id="standard-required"
          label="Country"
          name="country"
          onChange={handleChange}
          defaultValue={state.country}
        />
        <TextField
          required
          id="standard-required"
          label="Company Name"
          defaultValue={AccInfo.legal}
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Email"
          defaultValue={AccInfo.email}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          // autoComplete="current-password"
        />
        {/* <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        /> */}
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="standard-search" label="Search field" type="search" />
        {/* <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        /> */}
        <TextField
          required
          id="standard-required"
          label="Is black list"
          defaultValue={AccInfo.isBlackListed}
        />
        {/* <p>
          Premium period:{" "}
          {AccInfo.premium === 0
            ? "None"
            : AccInfo.premiumStart + " " + " To " + " " + AccInfo.premiumEnd}
        </p> */}
        {"premium" in AccInfo ? (
          AccInfo.premium === 0 ? (
            <p>Premium period : None</p>
          ) : (
            <>
              <p>Premium start : {AccInfo.premiumStart}</p>
              <p>Premium End : {AccInfo.premiumEnd}</p>
            </>
          )
        ) : (
          <></>
        )}
        <p>Activated: {AccInfo.isActive === 1 ? "Yes" : "No"}</p>
        <p>Register date: {AccInfo.rdate}</p>
      </div>
      {/* <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div> */}
      {/* <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlinedimport DraggableDialog from '../components/Dialog';
"
        />
        <h1>
          <BackButton
            variant="outlined"
            color="secondary"
            style={{ marginLeft: "1rem" }}
          >
            Back
          </BackButton>
        </h1>
      </div> */}
      <Button
        variant="contained"
        color="primary"
        onClick={(state) => {
          handleUpdate();
          handleClickOpen();
        }}
      >
        Update
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}

export default AccountDetails;
