import React from 'react';
import Deck from './components/Deck';
import './styles/App.css';

const sampleDecks = [
    {
        title: "JavaScript Basics",
        flashcards: [
            { question: "What is a closure?", answer: "A function that retains access to its outer scope." },
            { question: "What is 'use strict'?", answer: "A way to enable strict mode in JavaScript." },
        ],
    },
    {
        title: "React Basics",
        flashcards: [
            { question: "What is JSX?", answer: "A syntax extension for JavaScript that looks like HTML." },
            { question: "What is state?", answer: "An object that determines how a component behaves and renders." },
        ],
    },
];

function App() {
    return (
        <div className="app">
            <h1>Flashcard App</h1>
            {sampleDecks.map((deck, index) => (
                <Deck key={index} {...deck} />
            ))}
        </div>
    );
}

export default App;