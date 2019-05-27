/* eslint-disable no-underscore-dangle */

import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore } from "redux";
import reducers from "$store/reducers";
import initStoreCurrentUser from "$initializers/initStoreCurrentUser";
import registerServiceWorker from "./registerServiceWorker";
import Application from "./application";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

initStoreCurrentUser(store).then(() => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <Application />
    </ReduxProvider>,
    document.getElementById("root"),
  );
});
registerServiceWorker();
