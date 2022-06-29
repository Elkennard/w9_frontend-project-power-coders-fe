import { useState, useEffect } from "react";

import "./quotesDisplay.css";

function QuotesDisplay() {
  const [randomQuote, setRandomQuote] = useState([]);

  useEffect(() => {
    function getRandomQuote(quotesArr) {
      const randomNum = Math.floor(Math.random() * 1643);

      const currentQuote = quotesArr[randomNum];
      if (currentQuote.author === null) {
        const updatedCurrentQuote = { ...currentQuote, author: "Anon" };

        return updatedCurrentQuote;
      }
      return currentQuote;
    }

    async function fetchQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();

      const newRandomQuote = getRandomQuote(data);
      setRandomQuote(newRandomQuote);
    }
    fetchQuotes();
  }, []);

  return (
    <section>
      <h2 className="quoteText">{randomQuote.text}</h2>
      <h3 className="quoteAuthor">- {randomQuote.author}</h3>
    </section>
  );
}

export default QuotesDisplay;
