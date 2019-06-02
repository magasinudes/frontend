import React from "react";
import { Route } from "react-router-dom";
import { FallbackSwitch } from "$common";
import r from "$routes";

import Home from "./Home";
import Outlet from "./Outlet";

const Resources = () => (
  <FallbackSwitch>
    {/* Home */}
    <Route exact path={r.resources.index.path} component={Home} />
    {/* Outlet */}
    <Route path={r.resources.outlet.path} component={Outlet} />
  </FallbackSwitch>
);

export default Resources;
