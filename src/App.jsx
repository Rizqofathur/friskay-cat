import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Illustration from './components/Illustration';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Illustration />
    </div>
  );
}

export default App;
