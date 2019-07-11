import React from "react";
import { Route } from "react-router-dom";
import { FallbackSwitch } from "$common";
import r from "$routes";
import withRouterShape from "$utils/withRouterShape";

import Category from "./Category";

const propTypes = {
  ...withRouterShape,
};

const Outlet = () => (
  <FallbackSwitch>
    {/* Category */}
    <Route
      path={r.resources.outlet.category.path}
      render={props => (
        <Category key={props.match.params.id} {...props} />
      )}
    />
  </FallbackSwitch>
);

Outlet.propTypes = propTypes;

export default Outlet;
