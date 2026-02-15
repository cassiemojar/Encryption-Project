import Header from '../components/Header/Header';
import JournalPage from './JournalPage/JournalPage';

const Journal = ({ onNavigate, currentPage }) => {
  return (
    <div>
      <Header title="encode-it" onNavigate={onNavigate} currentPage={currentPage}/>
      <JournalPage/>
    </div>
  );
}

export default Journal;