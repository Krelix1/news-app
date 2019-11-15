import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import newsReducer from "./news-reducer";


let reducers = combineReducers({
 news: newsReducer
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;