import { createStore, compose } from "redux";
import reducer from "./reducers"
import initial from "./initial"
import persistState from "redux-localstorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(persistState()));

store.dispatch({ type: "RESET", hardReset: true });

export default store;