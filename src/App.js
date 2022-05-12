import { useEffect, useState } from 'react';
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Layout from './components/Layout';
import AuthorQuotes from './components/AuthorQuotes';
import './App.css';

function App() {

  const [quote, setQuote] = useState({});
  const [authorQuotes, setAuthorQuotes] = useState([])
  const [refetch, setRefetch] = useState(false);

  useEffect(()=> {
    getQuote()
  }, [refetch])

  
  useEffect(()=> {
    getQuotes()
  }, [quote])
  

  const getQuote = () => {
    fetch('http://programming-quotes-api.herokuapp.com/Quotes/random')
    .then(response => response.json())
    .then(data => setQuote(data))
    .catch(error => console.log(error))
  }

  const getQuotes = () => {
    fetch(`http://programming-quotes-api.herokuapp.com/Quotes/author/${quote.author}`)
    .then(response => response.json())
    .then(data => setAuthorQuotes(data))
    .catch(error => console.log(error))
}

  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout quote={quote} quotes={authorQuotes} refetch={refetch} setRefetch={setRefetch} />}/>
          <Route path="quotes" element={<AuthorQuotes author={quote.author} quotes={authorQuotes} refetch={refetch} setRefetch={setRefetch} />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
