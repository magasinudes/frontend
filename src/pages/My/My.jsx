import React from "react";
import { Route } from "react-router-dom";
import { FallbackSwitch } from "$common";
import r from "$routes";

import Cart from "./Cart";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Reservations from "./Reservations";

const My = () => (
  <FallbackSwitch>
    {/* Cart */}
    <Route exact path={r.my.cart.path} component={Cart} />
    {/* Dashboard */}
    <Route exact path={r.my.dashboard.path} component={Dashboard} />
    {/* Orders */}
    <Route exact path={r.my.orders.path} component={Orders} />
    {/* Reservations */}
    <Route exact path={r.my.reservations.path} component={Reservations} />
  </FallbackSwitch>
);

export default My;
