import { useEffect, useState } from 'react';
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Layout from './components/Layout';
import AuthorQuotes from './components/AuthorQuotes';
import './App.css';

function App() {

  const [quote, setQuote] = useState({});
  const [authorQuotes, setAuthorQuotes] = useState([])
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    getQuote();
  }, [refetch])

  useEffect(() => {
    const getQuotes = () => {
      fetch(`https://api.quotable.io/quotes?author=${quote?.author?.split(' ').join('+')}`)
        .then(response => response.json())
        .then(data => setAuthorQuotes(data))
        .catch(error => console.log(error))
    }

    getQuotes();
  }, [quote])

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => setQuote(data))
      .catch(error => console.log(error))
  }

  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout quote={quote} quotes={authorQuotes} refetch={refetch} setRefetch={setRefetch} />} />
          <Route path="quotes" element={<AuthorQuotes author={quote.author} quotes={authorQuotes} refetch={refetch} setRefetch={setRefetch} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
