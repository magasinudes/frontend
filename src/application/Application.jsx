import React from "react";
import { hot } from "react-hot-loader/root";
import { Route, BrowserRouter as Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import r from "$routes";
import Home from "./Home";

const Application = () => (
  <React.Fragment>
    <Router>
      <CssBaseline />
      <Route path={r.root.path} component={Home} />
    </Router>
  </React.Fragment>
);

export default hot(Application);
