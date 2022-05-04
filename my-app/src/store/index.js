import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";

const enhancers = [];
const initialState = {};

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(thunk), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
