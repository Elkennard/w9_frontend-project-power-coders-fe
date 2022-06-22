// I understand I need a function that will return a quote with Author name.
//import react from "react"
//import css from "./quotes.css"

import react, { useState, useEffect } from "react";

function Quotes() {
    const [quote, setQuote] = useState([]);
    async function randomQuote() {
        const response = await fetch('https://zenquotes.io/api/random', {
            method: "GET",
            mode: 'no-cors'
        }); 
        const data = await response.json();
        console.log(data)
                    }
    randomQuote();

    useEffect(() => {
        
    },[])

    return ([
        <section>        
            <h2 >{quote.q}</h2>
            <h3>-{quote.a}</h3>
        </section>

    ]
    )
}



export default Quotes; 