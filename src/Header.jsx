import './App.css';

const Header = (props) => {
    return (
        <header className="header">
            <h1>{props.title}</h1>
            <p>Welcome, {props.userName}</p>
        </header>
    )
}

export default Header;