import { Link } from 'react-router-dom';
import autorenew from '../autorenew.svg';

function AuthorQuotes({ quotes, setRefetch }) {

  // originally if page was refreshed, app would crash

  // useEffect on getQuotes being set to update based on quote allows a refresh to return new quotes
  // since quote is always fetched -  a reload on quotes route would display new quotes from another author

  return (
    <>
      {quotes.length === 0 && <Link to="/" className="link" onClick={() => setRefetch(prev => !prev)}>random <img src={autorenew} alt="" /></Link>}
      <Link to="/" className="link" onClick={() => setRefetch(prev => !prev)}>random <img src={autorenew} alt="" /></Link>
      {quotes.count > 0 && <section>
        <h1>{quotes?.results[0].author}</h1>
        {quotes?.results.map((quote, index) => {
          return (
            <blockquote key={index}>&ldquo;{quote.content}&rdquo;</blockquote>
          )
        })}
      </section>}
    </>
  )
}

export default AuthorQuotes;