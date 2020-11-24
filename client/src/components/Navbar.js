import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";

const useStyles = makeStyles({
  header: {
    backgroundColor: "white",
    color: "black",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="sticky" className={classes.header}>
        <Toolbar>
          <IconButton aria-label="app" color="inherit">
            <Menu />
          </IconButton>

          <Typography variant="h6"> DermPal </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
