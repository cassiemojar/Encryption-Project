import Header from '../components/Header/Header';
import Quote from '../components/Home/Quote/Quote';
import EncryptAbout from '../components/Home/EncryptAbout/EncryptAbout';
import About from '../components/Home/About/About';

const Home = ({ onNavigate, currentPage }) => {
  return (
    <div>
      <Header title="encode-it" onNavigate={onNavigate} currentPage={currentPage}/>
      <Quote quote="“the soul becomes dyed with the color of its thoughts.” - marcus aurnelius"/>
      <EncryptAbout/>
      <About/>
    </div>
  );
};

export default Home;