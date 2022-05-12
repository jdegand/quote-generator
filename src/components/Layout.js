import { Link } from "react-router-dom";
import rightArrow from '../arrow-right-thin.svg';
import autorenew from '../autorenew.svg';

function Layout({quote, quotes, setRefetch}){

    // quotes request can take longer and button will update late

    return(
        <>
            <Link className="link" to="/" onClick={()=> setRefetch(prev => !prev)}>random <img src={autorenew} alt="" /></Link>
            <div className="div">
                <blockquote>&ldquo;{quote.en}&rdquo;</blockquote>
                {quotes.length > 1 ? <Link to="quotes" className="author">&mdash;&nbsp;{quote.author} <img src={rightArrow} alt=""/></Link> : <div className="author-nolink">&mdash;&nbsp;{quote.author}</div>}
            </div>
        </>
    )
}

export default Layout;