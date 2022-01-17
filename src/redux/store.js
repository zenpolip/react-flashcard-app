import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)