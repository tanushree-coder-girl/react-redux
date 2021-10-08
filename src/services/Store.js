import { createStore } from "redux";
import rootReducer from './Reducers/index';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || typeof  compose;

const store = createStore(rootReducer, composeEnhancers());
export default store;