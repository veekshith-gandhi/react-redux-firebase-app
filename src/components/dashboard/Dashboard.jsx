import Grid from "@material-ui/core/Grid";

import { makeStyles, Paper } from "@material-ui/core";
import Notifications from "./Notification";
import ProjectList from "../projects/ProjectList";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6}>
          <ProjectList />
        </Grid>
        <Grid item xs={5}>
          <Notifications />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
