import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const middlewares= [];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middlewares.push(logger);
}

export var store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);
