import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import Journal from './pages/Journal';

const App = () => {
  const [currentPage, setCurrentPage] = useState('journal');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        
        return <Home onNavigate={setCurrentPage} currentPage={currentPage} />;
      case 'journal':
        console.log("Journal")
        return <Journal onNavigate={setCurrentPage} currentPage={currentPage} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;