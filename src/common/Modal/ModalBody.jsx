import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import styles from "./ModalBody.css";

const propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalBody = ({ classes, children }) => (
  <div className={classes.paper}>
    {children}
  </div>
);

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default withStyles(styles)(ModalBody);
