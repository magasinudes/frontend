import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { debounce } from "lodash";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import { TextInput } from "$common";

import styles from "./SearchInput.css";

class SearchInput extends React.PureComponent {
  static propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.object.isRequired,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }

  static defaultProps = {
    onSearch: null,
    placeholder: "",
    className: null,
  }

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.dispatchSearch = debounce(this.dispatchSearch.bind(this), 100);
  }

  handleSearch() {
    const value = this.inputRef.current.state.value;
    this.dispatchSearch(value);
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.dispatchSearch(e.target.value);
    }
  }

  dispatchSearch(value) {
    if (this.props.onSearch) {
      this.props.onSearch(value);
    }
  }

  render() {
    const { placeholder, classes, className } = this.props;
    const klasses = classNames(classes.paper, className);

    return (
      <Paper className={klasses}>
        <TextInput
          className={classes.input}
          placeholder={placeholder}
          ref={this.inputRef}
          inputProps={{
            onKeyPress: this.handleKeyPress,
          }}
        />
        <IconButton
          onClick={this.handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

export default withStyles(styles)(SearchInput);
