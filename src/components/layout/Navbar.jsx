import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  decoration: {
    textDecoration: "none",
    color: "silver",
  },
  spacing: {
    display: "flex",
    gap: "2rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box>
            <Link className={classes.decoration} to="/">
              <Typography variant="h5">Application</Typography>
            </Link>
          </Box>
          <Box className={classes.toolbar}>
            <SignedOutLinks />
            <SignedInLinks />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
