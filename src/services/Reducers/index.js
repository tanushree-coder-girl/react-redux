import startCounting from './reducer';
import multiplyAndDivide from './multiplydivision';

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    startCounting,
    multiplyAndDivide
});

export default rootReducer;