import {combineReducers, compose, createStore} from "redux";
import pizzasReducer from "./reducers/pizzas";
import filtersReducer from "./reducers/filters";

const rootReducer = combineReducers({
   pizzasReducer,
   filtersReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;