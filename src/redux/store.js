import {combineReducers, compose, createStore} from "redux";
import pizzas from "./reducers/pizzas";
import filters from "./reducers/filters";

const rootReducer = combineReducers({
   pizzas,
   filters
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

window.store = store;

export default store;