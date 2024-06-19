import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SecondSection from './components/SecondSection';
import ReviewCards from './components/ReviewCards';
import Facts from './components/Facts';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      <Navbar />
      <Header />
      <main>
        <SecondSection />
        <ReviewCards />
        <Facts />
        <ClosingSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
