import './App.css';

const Header = (props) => {
    return (
        <div className="nav-bar">
            <header className="header">
                <div className="title">
                    <p>{props.title}</p>
                </div>

                <ul className="tabs">
                    <li>
                        <button>Sign In</button>
                    </li>
                    <li>
                        <button>Write</button>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header;
