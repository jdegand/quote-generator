import {useEffect, useState} from 'react';
import './App.css';

function App() {

  const [quote, setQuote] = useState({});
  const [authorQuotes, setAuthorQuotes] = useState('');
  const [requestMoreQuotes, setRequestMoreQuotes] = useState(false)

  useEffect(()=> {
    getQuote()
  }, [])

  const getQuote = () => {
    fetch('http://programming-quotes-api.herokuapp.com/Quotes/random')
    .then(response => response.json())
    .then(data => {
      setQuote(data)
      fetch(`http://programming-quotes-api.herokuapp.com/Quotes/author/${data.author}`)
      .then(response => response.json())
      .then(data => setAuthorQuotes(data));
    })
  }
  /*
  const getAuthorQuotes = (author) => {
    console.log('author', author);
    console.log(authorQuotes)
  }
  */

  return (
    <div className="App">
      <blockquote>{quote.en} - {quote.author}</blockquote>
      {authorQuotes.length > 1 ? <button onClick={()=> setRequestMoreQuotes(prev => !prev)}>Get more quotes from {quote.author}</button> : <button onClick={getQuote}>Get another quote</button>}
      {authorQuotes.length > 1 && requestMoreQuotes ? <div>here</div> : null}
    </div>
  );
}

export default App;
