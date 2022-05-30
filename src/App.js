import './App.css';
import Navbar from './components/navbar/Navbar';
import LandingPage from './components/landing-page/LandingPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
