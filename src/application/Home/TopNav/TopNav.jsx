import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { connect } from "react-redux";
import { setUser } from "$store/actions/user";

import { withStyles } from "@material-ui/core/styles";
import styles from "./TopNav.css";

class TopNav extends React.PureComponent {
  static propTypes = {
    onDrawerToggle: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      open: false,
    };

    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    this.handleProfileMenuClose = this.handleProfileMenuClose.bind(this);
  }

  handleProfileMenuOpen(event) {
    this.setState({
      anchorEl: event.currentTarget,
      open: true,
    });
  }

  handleProfileMenuClose(user) {
    this.props.dispatch(setUser(user));

    this.setState({
      anchorEl: null,
      open: false,
    });
  }

  render() {
    const { classes, onDrawerToggle } = this.props;

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
          <IconButton
            edge="end"
            aria-label="Account of current user"
            aria-haspopup="true"
            onClick={this.handleProfileMenuOpen}
            color="inherit"
            className={classes.menuRightIcon}
          >
            <AccountCircle />
          </IconButton>
          <Typography variant="h6">
            {this.props.user.name}
          </Typography>
          <Menu
            id="menu-appbar"
            anchorEl={this.state.anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={this.state.open}
            onClose={this.handleProfileMenuClose}
          >
            <MenuItem key="r2d21010" onClick={() => this.handleProfileMenuClose({ name: "R2-D2", cip: "rrdd2222" })}>R2-D2</MenuItem>
            <MenuItem key="chbc1000" onClick={() => this.handleProfileMenuClose({ name: "Chewbacca", cip: "chbc1000" })}>Chewbacca</MenuItem>
            <MenuItem key="yoda9999" onClick={() => this.handleProfileMenuClose({ name: "Yoda", cip: "yoda9999" })}>Yoda</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(TopNav));
