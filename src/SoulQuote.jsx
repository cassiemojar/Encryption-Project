import './App.css';

const SoulQuote = (props) => {
    return (
        <div className="quote">
            <div className="quote-circle">
                <p>{props.quote}</p>
                <button>journal now</button>
            </div>
        </div>
    )
}


export default SoulQuote;