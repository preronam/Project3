import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles"

export default function Hero (){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.HeroImage}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}