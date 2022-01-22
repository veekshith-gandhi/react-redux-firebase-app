import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    marginTop: 15,
  },

  title: {
    fontSize: 20,
  },
});

export default function ProjectDetails(props) {
  console.log(props);
  const { id } = useParams();
  const classes = useStyles();

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <Card className={classes.root}>
        <CardContent item>
          <Box>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              {` Project Title ${id}`}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus dolor ea dolorum cumque voluptates ab reiciendis.
              Repellendus dolorum, excepturi voluptatibus perspiciatis eaque,
              tempora unde, alias facere hic maxime dicta eum cupiditate est
              laborum commodi consequuntur!
            </Typography>
          </Box>
          <hr />
          <Box>
            <Typography variant="h6" color="textSecondary" component="p">
              well meaning and kindly.
              <br />
              <Typography variant="body2">{"23rd septemper, 2am"}</Typography>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
