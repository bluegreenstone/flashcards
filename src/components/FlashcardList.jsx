import React from 'react';
import Flashcard from './Flashcard.jsx';

function FlashcardList({ flashcards }) {
    return (
        <div className="flashcard-list">
            {flashcards.map((card, index) => (
                <Flashcard key={index} {...card} />
            ))}
        </div>
    );
}

export default FlashcardList;