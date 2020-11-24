import React from 'react';
import Card from './Card.js';
import store from './store.js';
import './List.css'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this);
    }
    addCard(e) {
        store.lists.push({id: store.lists.length+1, header: 'next number', cardIds: store.allCards['a']})
    }
    render(){
        return(
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                {this.props.cards.map((card) => 
                    <Card
                        key={card.id}
                        title={card.title}
                        content={card.content}
                    />
                )}
                <button type="button" className="List-add-button" onClick={this.addCard}>
                + Add Random Card
                </button>
                </div>
            </section>
        )
    }
}

export default List;