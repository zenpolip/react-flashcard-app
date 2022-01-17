import Card from './components/card/card.component';
import CustomButton from './components/custom-button/custom-button.component';
import './App.scss';
import cardsArray from './assets/cards.data';
import { connect } from 'react-redux';
import { setCards, setCurrentCard } from './redux/flashcard/flashcard.actions';


const App = ({ cards, currentCard, setCards, setCurrentCard }) => {

  const shuffleCards = () => {
    const shuffledCards = cardsArray
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
    setCards(shuffledCards)
    setCurrentCard(shuffledCards[0])
    console.log(cards.indexOf(currentCard))
  }


  const drawCard = () => {
    console.log(cards.indexOf(currentCard))
    let i = cards.indexOf(currentCard)
    setCurrentCard(cards[i + 1])
  }

  return (
    <div className="App">
      <h1>Flashcard App</h1>
      <CustomButton handleClick={shuffleCards}>{currentCard
        ? "Shuffle Deck"
        : "New Round"}
      </CustomButton>
      {currentCard
        ? <div>
          <Card currentCard={currentCard} />
          <CustomButton handleClick={drawCard}>Next card</CustomButton>
        </div>
        : ''}
    </div>
  );
}

const mapStateToProps = state => ({
  cards: state.flashcard.cards,
  currentCard: state.flashcard.currentCard
})

const mapDispatchToProps = dispatch => ({
  setCards: cards => dispatch(setCards(cards)),
  setCurrentCard: currentCard => dispatch(setCurrentCard(currentCard))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
