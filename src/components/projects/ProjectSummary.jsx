import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 15,
  },

  title: {
    fontSize: 14,
  },
});

export default function ProjectSummary({ project }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            {project.title}
          </Typography>

          <Box>
            {" "}
            <Typography variant="h6" color="textSecondary" component="p">
              well meaning and kindly.
              <br />
            </Typography>
            <Typography variant="body2">{"23rd septemper, 2am"}</Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
