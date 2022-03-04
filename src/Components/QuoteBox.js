import quotes from '../quotes.json'
import '../App.css';
import { useState } from 'react';

    const shuffle = () => Math.floor(Math.random() * quotes.length)

    const colors = ["#845EC2" , "#00C9A7" , "#C34A36" , "#B0A8B9" , "#9B89B3" , "#008BC6" , "#926D00" , "#FF9671", "#FFC75F"];



const QuoteBox = () => {


    const [ quote , setQuote ] = useState(quotes[shuffle()]);

    //const quote = quotes[0];

    const changeQuote = () => {

        setQuote(quotes[shuffle()]);

    };

    const color = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.background = `${color}`;

    return (
        <div class="QuoteBox" style={{color:color}}>
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p> 
            <button onClick={changeQuote} style={{background:color}}></button>
        </div>
    );
};


export default QuoteBox;