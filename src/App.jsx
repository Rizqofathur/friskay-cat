import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SecondSection from './components/SecondSection';
import ReviewCards from './components/ReviewCards';
import Facts from './components/Facts';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <SecondSection />
        <ReviewCards />
        <Facts />
      </main>
    </div>
  );
}

export default App;
