import './App.css';
import Questions from './components/Questions/Questions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Guns from './components/Guns/Guns';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { BsFillCartFill } from 'react-icons/bs';
import { FcViewDetails } from 'react-icons/fc';
import { FaUserAlt } from 'react-icons/fa';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar BsFillCartFill={BsFillCartFill} FaUserAlt={FaUserAlt} AiFillHome={AiFillHome} AiFillShopping={AiFillShopping} ></Navbar>
      <Guns BsFillCartFill={BsFillCartFill} FcViewDetails={FcViewDetails} />
      <Questions />
      <Footer></Footer>
    </div>
  );
}

export default App;
