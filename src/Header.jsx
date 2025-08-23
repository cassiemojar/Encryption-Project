import './App.css';

const Header = (props) => {
    return (
        <header class="header">
            <div class="title">
                <p>{props.title}</p>
            </div>


            <ul class="tabs">
                <li>
                    <div class="icon">
                        <p>Test</p>
                    </div>
                </li>
            </ul>

        </header>
    )
}

export default Header;