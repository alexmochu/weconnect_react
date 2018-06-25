import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./Components/App/App";
import jwt from "jsonwebtoken";
import { BrowserRouter } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import registerServiceWorker from "./registerServiceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { userLoggedIn, setCurrentUser } from "./actions/auth.actions";
import setAuthToken from "./utilities/setAuthToken";
import logger from "./middlewares/logger.middleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

if (localStorage.JWT) {
  const user = { auth_token: localStorage.JWT };
  setAuthToken(localStorage.JWT);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.JWT)));
  store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
  /* <Provider> gives all it's children access to the 
    store via the connect() method. */
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
