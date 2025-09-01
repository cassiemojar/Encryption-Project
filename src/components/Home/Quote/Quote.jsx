import './Quote.css';

const Quote = ({ quote }) => {
    return (
        <div className="quote">
            <div className="quote-circle">
                <p>{quote}</p>
                <button>journal now</button>
            </div>
        </div>
    )
}

export default Quote;