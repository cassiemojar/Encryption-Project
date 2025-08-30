import './App.css';

const HomeSecond = (props) => {
    return (
        <div className="about">
            <h1>why journal with us?</h1>
            <p className="intro">
                Journaling just once a week can help ease anxiety, reduce stress, and even boost memory. 
                With a private, distraction-free space, every entry feels more meaningful.
            </p>

            <div className="cards-row">
                <div className="card">
                    Rough day? Get your thoughts out and let the page take the weight off your shoulders.
                </div>
                <div className="card">
                    Song lyrics, story ideas, or thoughts you’re not ready to share? Keep them safe in a locked journal, just for you.
                </div>
                <div className="card">
                    And when you need to vent in the heat of the moment, you’ll always have a secure outlet for your emotions.
                </div>
            </div>
        </div>
    );
}

export default HomeSecond;
