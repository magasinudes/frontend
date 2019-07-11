import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Modal as MaterialModal } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import styles from "./Modal.css";

class Modal extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    onBackdropClick: PropTypes.func,
    onRendered: PropTypes.func,
  }

  static defaultProps = {
    children: null,
    size: "md",
    onClose: null,
    onBackdropClick: null,
    onRendered: null,
  }

  render() {
    const { classes, size } = this.props;
    const klasses = classNames(
      classes.paper,
      (size === "sm") && classes.sm,
      (size === "md") && classes.md,
      (size === "lg") && classes.lg,
      (size === "xl") && classes.xl,
    );

    return (
      <MaterialModal
        open={this.props.open}
        onClose={this.props.onClose}
        onBackdropClick={this.props.onBackdropClick}
        onRendered={this.props.onRendered}
        disableEscapeKeyDown
      >
        <div className={klasses}>
          {this.props.children}
        </div>
      </MaterialModal>
    );
  }
}

export default withStyles(styles)(Modal);
