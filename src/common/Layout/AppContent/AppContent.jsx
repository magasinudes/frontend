import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./AppContent.css";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const useStyles = makeStyles(styles);

const AppContent = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.appContent}>
      {children}
    </div>
  );
};

AppContent.propTypes = propTypes;
AppContent.defaultProps = defaultProps;

export default AppContent;
