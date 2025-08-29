import './App.css';

const SoulQuote = (props) => {
    return (
        <div className="quote">
            <div className="quote-circle">
                <p>{props.quote}</p>
                <button>sign in</button>
            </div>
        </div>
    )
}


export default SoulQuote;