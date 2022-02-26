import React from 'react';
import quotes from '../quotes.json'
import '../App.css';
import { useState } from 'react';
import App from '../App'


const QuoteBox = () => {

    const shuffle = () => Math.floor(Math.random() * quotes.length)

    const [ quote , setQuote ] = useState(quotes[shuffle()]);

    //const quote = quotes[0];

    const changeQuote = () => {
        setQuote(quotes[shuffle()])
    }
    return (
        <div class="QuoteBox">
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p> 
            <button onClick={changeQuote}></button>
            <i className="fad fa-archive"></i>
        </div>
    );
};

// 02.03.21


export default QuoteBox;