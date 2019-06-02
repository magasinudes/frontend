/* eslint-disable react/prop-types */

import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputBase from "@material-ui/core/InputBase";
import { debounce } from "lodash";
import uncontrolledInputShouldUpdate from "$utils/uncontrolledInputShouldUpdate";

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value || "",
    };

    this.setInputRef = this.setInputRef.bind(this);
    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.dispatchChange = debounce(this.dispatchChange.bind(this), 100);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return uncontrolledInputShouldUpdate(this.props, this.state, nextProps, nextState);
  }

  setInputRef(inputRef) {
    this.inputRef.current = inputRef;
  }

  setValue(value) {
    this.setState({ value });
  }

  focus() {
    if (this.inputRef) {
      this.inputRef.current.focus();
    }
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
    const { outlined } = this.props;

    return (
      outlined ? (
        <OutlinedInput
          {...this.props}
          inputRef={this.inputRef}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      ) : (
        <InputBase
          {...this.props}
          inputRef={this.inputRef}
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      )
    );
  }
}

export default TextInput;
