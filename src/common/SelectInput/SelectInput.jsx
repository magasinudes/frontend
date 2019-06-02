import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { debounce } from "lodash";
import Paper from "@material-ui/core/Paper";
import NativeSelect from "@material-ui/core/NativeSelect";
import { withStyles } from "@material-ui/core/styles";
import uncontrolledInputShouldUpdate from "$utils/uncontrolledInputShouldUpdate";
import StyledInputBase from "./StyledInputBase";

import styles from "./SelectInput.css";

class SelectInput extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    children: PropTypes.node,
  };

  static defaultProps = {
    value: "",
    onChange: null,
    className: null,
    children: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };

    this.handleChange = this.handleChange.bind(this);
    this.dispatchChange = debounce(this.dispatchChange.bind(this), 100);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return uncontrolledInputShouldUpdate(this.props, this.state, nextProps, nextState);
  }

  setValue(value) {
    this.setState({ value });
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value });
    this.dispatchChange(value);
  }

  dispatchChange(value) {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  render() {
    const { classes, children, className } = this.props;
    const { value } = this.state;

    const klasses = classNames(classes.paper, className);

    return (
      <Paper className={klasses}>
        <NativeSelect
          value={value}
          onChange={this.handleChange}
          input={<StyledInputBase />}
        >
          {children}
        </NativeSelect>
      </Paper>
    );
  }
}

export default withStyles(styles)(SelectInput);
