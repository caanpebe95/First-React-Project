import React from 'react';
import quotes from '../quotes.json'
import '../App.css';
import { useState } from 'react';

    const shuffle = () => Math.floor(Math.random() * quotes.length)

    const colors = ["#845EC2", "#00C9A7", "#C34A36", "#B0A8B9", "#9B89B3", "#008BC6", "#926D00","#FF9671","#FFC75F"];

const QuoteBox = () => {


    const [ quote , setQuote ] = useState(quotes[shuffle()]);

    //const quote = quotes[0];

    const changeQuote = () => {
        setQuote(quotes[shuffle()])
    }

    document.body.style = `background: ${colors[Math.floor(Math.random() * 9)]}`

    return (
        <div class="QuoteBox">
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p> 
            <button onClick={changeQuote}>
            <i className="fa-solid fa-shuffle"></i>
            </button>
        </div>
    );
};


export default QuoteBox;