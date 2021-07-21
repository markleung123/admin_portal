import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import axios from "axios";
// import FormControl from "@material-ui/core/FormControl";
// import Input from "@material-ui/core/Input";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// import BackButton from "../components/BackButton";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AccountDetails({ AccInfo }) {
  console.log(AccInfo);
  const classes = useStyles();

  const [brands, setBrands] = useState([]);
  const [data, setData] = useState([]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="standard-required"
          label="Name"
          defaultValue={AccInfo.name}
        />
        <TextField
          required
          id="standard-required"
          label="Last name"
          defaultValue={AccInfo.lastname}
        />
        <TextField
          required
          id="standard-required"
          label="Phone"
          defaultValue={AccInfo.phone}
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
          label="Disabled"
          defaultValue={AccInfo.email}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
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
        {AccInfo.premium === 0 ? (
          <p>Premium period : None</p>
        ) : (
          <>
            <p>Premium start : {AccInfo.premiumStart}</p>
            <p>Premium End : {AccInfo.premiumEnd}</p>
          </>
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
          variant="outlined"
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
    </form>
  );
}

export default AccountDetails;
