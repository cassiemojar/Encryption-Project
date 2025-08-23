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
                        <button>sign in</button>
                    </li>
                    <li>
                        <button>write</button>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header;
