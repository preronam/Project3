import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";


export default function AboutSection() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.aboutSection}>
          <Typography variant="h5">~About~</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0} className={classes.stylesection}></Paper>
      </Grid>
    </Grid>
  );
}