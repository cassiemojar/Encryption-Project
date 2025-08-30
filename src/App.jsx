import './App.css';
import Header from './Header';
import SoulQuote from './SoulQuote';
import About from './About';

const App = () => {
    console.log("Still working!")
    // Below is the actual html
    return (
        <div>
            <Header title="encode-it"/>
             <SoulQuote quote="“the soul becomes dyed with the color of its thoughts.” - marcus aurnelius"/>
             <About/>
        </div>

        

    )
}

export default App