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
}));

const SignedOutLinks = () => {
  const classes = useStyles();
  return (
    <Box className={classes.spacing}>
      <Button>
        <NavLink className={classes.decoration} to="/signup">
          Sign up
        </NavLink>
      </Button>
      <Button>
        <NavLink className={classes.decoration} to="/login">
          Login
        </NavLink>
      </Button>
    </Box>
  );
};
export default SignedOutLinks;
