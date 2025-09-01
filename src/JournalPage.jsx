import './App.css';

const JournalPage = (props) => {
    return (
        <div className="journal-notebook">
            <div className="journal-binding"></div>
            <div className="journal-paper">
                <textarea
                    className="journal-textarea"
                    placeholder="Write your thoughts here..."
                    rows="1"
                ></textarea>

                <div className="journal-buttons">
                    <button className="encrypt-btn">encrypt entry</button>
                    <button className="decrypt-btn">decrypt entry</button>
                </div>

                <div className="encrypted-output">
                    <p>Encrypted text will appear here</p>
                </div>
            </div>
        </div>
    )
}

export default JournalPage;