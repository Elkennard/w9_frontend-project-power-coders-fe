// I understand I need a function that will return a quote with Author name.
//import react from "react"
//import css from "./quotes.css"

import react, { useState, useEffect } from "react";



function Quotes() {
    const [quote, setQuote] = useState([]);

    

    

    useEffect(() => {
        function randomQuote(quotes) {
            console.log(quotes)
            const randomNum = Math.floor(Math.random() * 1643);
            console.log(randomNum)
            const quote = quotes[randomNum];
            if (quote.author === null) {
                const newQuote = {...quote, author: "Anon"};
                console.log(newQuote);
                return newQuote;
            }
            console.log (quote);
            return quote;
        }
    
        async function getQuotes() {
            const response = await fetch('https://type.fit/api/quotes'); 
            const data = await response.json();
            console.log(data[0])
            const newQuote = randomQuote(data);
            setQuote(newQuote);        
        }
        getQuotes();
    },[])

    return (
        <section>        
            <h2 >{quote.text}</h2>                 
            <h3>- {quote.author}</h3>
        </section>

    
    )
}



export default Quotes; 