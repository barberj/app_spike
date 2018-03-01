import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import reducers from "./reducers";

const middlewares = [
  thunk,
];

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger({
    collapsed: true,
  }));
}

export default createStore(
  reducers,
  applyMiddleware(...middlewares),
);
