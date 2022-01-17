import FlashcardActionTypes from "./flashcard.types";

export const setCards = cards => ({
    type: FlashcardActionTypes.SET_CARDS,
    payload: cards
})

export const setCurrentCard = currentCard => ({
    type: FlashcardActionTypes.SET_CURRENTCARD,
    payload: currentCard
})