import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
      });
  };

  return (
    <div id="quote-box">
      <h1 id="text">{quoteInfo.text}</h1>
      <p id="author">{quoteInfo.author}</p>
      <button onClick={getQuote} id="new-quote">
        New quote
      </button>
      <a
        id="tweet-quote"
        href={
          "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text" +
          quoteInfo.text
        }
      >
        Post to Twitter
      </a>
    </div>
  );
}

export default App;
