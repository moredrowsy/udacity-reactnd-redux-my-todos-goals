import { createStore, compose } from "redux";

// Middlewares
import middlewares from "./middlewares";
import reducers from "./reducers";

const initialState = {};

const store = createStore(
  reducers,
  initialState,
  compose(
    middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
