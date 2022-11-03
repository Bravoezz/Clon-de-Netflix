import { createStore,applyMiddleware, compose  } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancer(applyMiddleware(thunk)));
export default store; 