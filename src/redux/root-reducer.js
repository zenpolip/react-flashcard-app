import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import flashcardReducer from "./flashcard/flashcard.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['flashcard']
}

const rootReducer = combineReducers({
    flashcard: flashcardReducer
})

export default persistReducer(persistConfig, rootReducer)
