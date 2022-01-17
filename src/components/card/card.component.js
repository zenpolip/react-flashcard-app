import './card.styles.scss';

const Card = ({ currentCard }) => {
    const { question, answer } = currentCard
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <div className="word-front">{question}</div>
                </div>
                <div className="card-back">
                    <div className="word-back">{answer}</div>
                </div>
            </div>

        </div>
    );
}

export default Card;
