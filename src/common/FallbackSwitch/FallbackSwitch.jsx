import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import NotFound from "$pages/NotFound";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const FallbackSwitch = (props) => {
  const { children, ...switchProps } = props;

  return (
    <Switch {...switchProps}>
      {children}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

FallbackSwitch.propTypes = propTypes;
FallbackSwitch.defaultProps = defaultProps;

export default FallbackSwitch;
