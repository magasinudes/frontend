import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./AppContainer.css";

const propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.bool,
};

const defaultProps = {
  children: null,
  fluid: false,
};

const useStyles = makeStyles(styles);

const AppContainer = ({ children, fluid }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Container fixed={!fluid} className={classes.container}>
        {children}
      </Container>
    </React.Fragment>
  );
};

AppContainer.propTypes = propTypes;
AppContainer.defaultProps = defaultProps;

export default AppContainer;
