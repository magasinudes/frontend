import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./TopNav.css";

const useStyles = makeStyles(styles);

const propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

const TopNav = ({ onDrawerToggle }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={onDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Magasin UdeS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

TopNav.propTypes = propTypes;

export default TopNav;
