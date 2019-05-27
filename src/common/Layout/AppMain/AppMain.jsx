import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./AppMain.css";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const useStyles = makeStyles(styles);

const AppMain = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.appMain}>
      {children}
    </div>
  );
};

AppMain.propTypes = propTypes;
AppMain.defaultProps = defaultProps;

export default AppMain;
