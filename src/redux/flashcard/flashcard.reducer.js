import FlashcardActionTypes from "./flashcard.types";

const INITIAL_STATE = {
    cards: [],
    currentCard: {}
}

const flashcardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FlashcardActionTypes.SET_CARDS:
            return {
                ...state,
                cards: action.payload
            }
        case FlashcardActionTypes.SET_CURRENTCARD:
            return {
                ...state,
                currentCard: action.payload
            }
        default:
            return state;
    }
}

export default flashcardReducer;