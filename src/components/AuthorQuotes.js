import { Link } from 'react-router-dom';
import autorenew from '../autorenew.svg';

function AuthorQuotes({quotes, setRefetch}){

    // originally if page was refreshed, app would crash
    
    // useEffect on getQuotes being set to update based on quote allows a refresh to return new quotes
    // since quote is always fetched -  a reload on quotes route would display new quotes from another author

    return (
        <>
        <Link to="/" className="link" onClick={()=> setRefetch(prev => !prev)}>random <img src={autorenew} alt="" /></Link>
          <section>
            <h1>{quotes[0]?.author}</h1>        
            {quotes?.map(quote => {
                return (
                    <blockquote key={quote.id}>&ldquo;{quote.en}&rdquo;</blockquote>
                )
            })}
          </section>
        </>
    )
}

export default AuthorQuotes;