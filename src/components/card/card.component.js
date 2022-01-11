import './card.styles.scss';

const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-front">
                    <div className="word-front">{props.question}</div>
                </div>
                <div className="card-back">
                    <div className="word-back">{props.answer}</div>
                </div>
            </div>

        </div>
    );
}

export default Card;
