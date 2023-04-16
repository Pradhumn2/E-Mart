import { applyMiddleware , legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reducerss from "./Reducers/index"

const store = legacy_createStore(reducerss, {} , applyMiddleware(thunk));

export default store