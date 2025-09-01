import './JournalPage.css'; 

const JournalPage = () => {
    return (
        <div className="journal-section">

            <p className="intro">
                Write your thoughts freely. Everything is encrypted and only accessible with your personal key.
            </p>
            
            <div className="journal-notebook">
                <div className="journal-binding"></div>
                <div className="journal-paper">
                    <textarea 
                        className="journal-textarea"
                        placeholder="Write your thoughts here..."
                        rows="10"
                    ></textarea>
                    
                    <div className="journal-buttons">
                        <button className="encrypt-btn">encrypt entry</button>
                        <button className="decrypt-btn">decrypt entry</button>
                    </div>
                    
                    <div className="encrypted-output">
                        <p>Encrypted text will appear here...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JournalPage;