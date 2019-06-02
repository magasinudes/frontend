import React from "react";
import { Route } from "react-router-dom";
import { FallbackSwitch } from "$common";
import r from "$routes";
import withRouterShape from "$utils/withRouterShape";

import Category from "./Category";
import Categories from "./Categories";

const propTypes = {
  ...withRouterShape,
};

const Outlet = () => (
  <FallbackSwitch>
    {/* Category */}
    <Route path={r.resources.outlet.category.path} component={Category} />
    {/* Categories */}
    <Route exact path={r.resources.outlet.categories.path} component={Categories} />
  </FallbackSwitch>
);

Outlet.propTypes = propTypes;

export default Outlet;
