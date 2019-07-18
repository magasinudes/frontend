import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import styles from "./ModalHeader.css";

const propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const ModalHeader = ({ classes, children }) => (
  <div className={classes.root}>
    <div>
      <Typography variant="h5" component="h2">
        {children}
      </Typography>
    </div>
  </div>
);

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default withStyles(styles)(ModalHeader);
