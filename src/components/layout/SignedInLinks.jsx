import { Button, makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  decoration: {
    textDecoration: "none",
    color: "silver",
  },
  spacing: {
    display: "flex",
    gap: "2rem",
  },
  button: {
    borderRadius: 25,
    backgroundColor: "grey",
    textDecoration: "none",
    color: "silver",
    padding: "1rem",
  },
}));

const SignedInLinks = () => {
  const classes = useStyles();
  return (
    <Box className={classes.spacing}>
      <Button>
        <NavLink className={classes.decoration} to="/createproject">
          New Project
        </NavLink>
      </Button>
      <Button>
        <NavLink className={classes.decoration} to="/logout">
          Logout
        </NavLink>
      </Button>
      <Button>
        <NavLink className={classes.button} to="/user">
          VG
        </NavLink>
      </Button>
    </Box>
  );
};
export default SignedInLinks;
