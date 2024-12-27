import React from 'react';
import FlashcardList from './FlashcardList';

function Deck({ title, flashcards }) {
    return (
        <div className="deck">
            <h2>{title}</h2>
            <FlashcardList flashcards={flashcards} />
        </div>
    );
}

export default Deck;