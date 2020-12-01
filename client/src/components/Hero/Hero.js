import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from '@material-ui/core/Container';
import useStyles from "./styles"




export default function Hero (){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.HeroImage}></Paper>
          </Grid>
        </Grid>

        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.aboutSection}>
              <Typography>Love the skin you're in</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid container className={classes.root} spacing={0}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.profileSection}>
            <Typography>How it works</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}