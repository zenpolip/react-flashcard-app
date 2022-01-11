import { Component } from 'react';
import Card from './components/card/card.component';
import DrawButton from './components/draw-button/draw-button.component';
import './App.scss';
import cardsArray from './assets/cards.data';


class App extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: cardsArray,
      currentCard: {}
    }
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Flashcard App</h1>
        <Card question={this.state.currentCard.question}
          answer={this.state.currentCard.answer}
        />
        <div>
          <DrawButton drawCard={this.updateCard}></DrawButton>
        </div>
      </div>
    );
  }
}

export default App;
