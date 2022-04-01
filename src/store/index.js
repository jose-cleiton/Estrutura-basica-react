import { combineReducers, createStore } from "redux";
import adicionarTarefa from "../reducers";

const meuReduce = combineReducers({ adicionarTarefa });

const store = createStore(meuReduce);

export default store;
