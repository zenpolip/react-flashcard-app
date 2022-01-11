import { Component } from 'react';
import './draw-button.styles.scss'

class DrawButton extends Component {
    constructor(props) {
        super(props);

        this.drawCard = this.drawCard.bind(this);
    }

    drawCard() {
        this.props.drawCard();
    }

    render() {
        return (
            <div>
                <button className='btn' onClick={this.drawCard}>Draw card</button>
            </div>
        )
    }
}

export default DrawButton;