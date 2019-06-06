import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { FallbackSwitch } from "$common";
import r from "$routes";

import My from "$pages/My";
import Resources from "$pages/Resources";
import TopNav from "./TopNav";
import SideNavDrawer from "./SideNavDrawer";

import styles from "./Home.css";

class Home extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      mobileDrawerOpen: false,
    };

    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle() {
    this.setState(prevState => (
      { mobileDrawerOpen: !prevState.mobileDrawerOpen }
    ));
  }

  render() {
    const { classes } = this.props;
    const { mobileDrawerOpen } = this.state;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <TopNav onDrawerToggle={this.handleDrawerToggle} />
          <SideNavDrawer open={mobileDrawerOpen} onDrawerToggle={this.handleDrawerToggle} />
        </div>
        <div className={classes.content}>
          <FallbackSwitch>
            <Route
              exact
              path={r.root.path}
              render={() => (
                <Redirect to={r.my.dashboard()} />
              )}
            />
            <Route path={r.my.path} component={My} />
            <Route path={r.resources.path} component={Resources} />
          </FallbackSwitch>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
