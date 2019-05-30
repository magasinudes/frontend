import React from "react";
import { Route } from "react-router-dom";
import { FallbackSwitch } from "$common";
import r from "$routes";

import Home from "./Home";

const Resources = () => (
  <FallbackSwitch>
    {/* Home */}
    <Route exact path={r.resources.index.path} component={Home} />
  </FallbackSwitch>
);

export default Resources;
