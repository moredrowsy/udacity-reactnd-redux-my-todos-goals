import { applyMiddleware } from "redux";

import thunk from "redux-thunk";
import checker from "./checker.middleware";
import logger from "./logger.middleware";

const middlewares = [thunk, checker, logger];

export default applyMiddleware(...middlewares);
