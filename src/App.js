import './App.css';
import Questions from './components/Questions/Questions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Guns from './components/Guns/Guns';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { BsFillCartFill } from 'react-icons/bs';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Guns BsFillCartFill={BsFillCartFill} />
      <Questions />
    </div>
  );
}

export default App;
