// I understand I need a function that will return a quote with Author name.
//import react from "react"
//import css from "./quotes.css"

import react, { useState, useEffect } from "react";

import "./quotes.css"

function Quotes() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    function randomQuote(quotes) {
      const randomNum = Math.floor(Math.random() * 1643);

      const quote = quotes[randomNum];
      if (quote.author === null) {
        const newQuote = { ...quote, author: "Anon" };

        return newQuote;
      }

      return quote;
    }

    async function getQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      const newQuote = randomQuote(data);
      setQuote(newQuote);
    }
    getQuotes();
  }, []);

  return (
    <section>
      <h2 className="quoteText">{quote.text}</h2>
      <h3 className="quoteAuthor">- {quote.author}</h3>
    </section>
  );
}

export default Quotes;
