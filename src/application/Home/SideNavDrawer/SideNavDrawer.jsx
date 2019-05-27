import React from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import DrawerList from "./DrawerList";

import styles from "./SideNavDrawer.css";

const useStyles = makeStyles(styles);

const propTypes = {
  open: PropTypes.bool.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

const SideNavDrawer = ({ open, onDrawerToggle }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer}>

      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={open}
          onClose={onDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <DrawerList />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <Drawer
          variant="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <DrawerList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

SideNavDrawer.propTypes = propTypes;

export default SideNavDrawer;
