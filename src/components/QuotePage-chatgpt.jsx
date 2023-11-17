import React, { useState } from 'react';
import "./QuoteComponent-chatgpt.css";

const quotes = [
    { author: "Albert Einstein", text: "Imagination is more important than knowledge." },
    { author: "Mark Twain", text: "The secret of getting ahead is getting started." },
    // Add more quotes here
];

function QuoteComponent() {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        const nextIndex = (index + 1) % quotes.length;
        setCurrentQuote(quotes[nextIndex]);
        setIndex(nextIndex);
    };

    return (
        <div className="quote-container" onClick={handleClick}>
            <p className="quote-text">"{currentQuote.text}"</p>
            <p className="quote-author">- {currentQuote.author}</p>
        </div>
    );
}

export default QuoteComponent;
