import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import JournalPage from './pages/JournalPage/JournalPage';
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState('journal');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} currentPage={currentPage} />;
      case 'journal':
        console.log("Journal");
        return <JournalPage onNavigate={setCurrentPage} currentPage={currentPage} />;
      default:
        return null;
    }
  };

  return (
    <Router>
      {/* React Router routes */}
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/" element={renderPage()} /> 
      </Routes>
    </Router>
  );
}

export default App;
