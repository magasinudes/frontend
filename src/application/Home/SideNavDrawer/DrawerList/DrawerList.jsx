import React from "react";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import DashboardIcon from "@material-ui/icons/Dashboard";
import OrderIcon from "@material-ui/icons/Assignment";
import ReservationIcon from "@material-ui/icons/Bookmarks";
import CartIcon from "@material-ui/icons/ShoppingCart";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import r from "$routes";

import styles from "./DrawerList.css";

const useStyles = makeStyles(styles);

const DrawerList = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <div>
        <List>
          <Link to={r.my.dashboard()} className={classes.link}>
            <ListItem button>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Vue d'ensemble" />
            </ListItem>
          </Link>
          <Link to={r.my.reservations()} className={classes.link}>
            <ListItem button>
              <ListItemIcon><ReservationIcon /></ListItemIcon>
              <ListItemText primary="Mes réservations" />
            </ListItem>
          </Link>
          <Link to={r.my.orders()} className={classes.link}>
            <ListItem button>
              <ListItemIcon><OrderIcon /></ListItemIcon>
              <ListItemText primary="Mes commandes" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={r.my.cart()} className={classes.link}>
            <ListItem button>
              <ListItemIcon><CartIcon /></ListItemIcon>
              <ListItemText primary="Panier" />
            </ListItem>
          </Link>
        </List>
      </div>
    </React.Fragment>
  );
};

export default DrawerList;
