import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { AiFillHome, AiFillShopping, AiOutlineSelect, AiOutlineCopyrightCircle } from 'react-icons/ai'; import Navbar from './components/Navbar/Navbar';
import { BsBoxArrowUpRight, BsFillCartFill } from 'react-icons/bs';
import { FcViewDetails } from 'react-icons/fc';
import { FaUserAlt } from 'react-icons/fa';
import { GiMachineGunMagazine, GiAutogun } from 'react-icons/gi';
import { GrCheckboxSelected } from 'react-icons/gr';
import { GoDiffRemoved } from 'react-icons/go';
import Guns from './components/Guns/Guns';
import Questions from './components/Questions/Questions';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar GiMachineGunMagazine={GiMachineGunMagazine} BsFillCartFill={BsFillCartFill} FaUserAlt={FaUserAlt} AiFillHome={AiFillHome} AiFillShopping={AiFillShopping} />

      <Guns BsFillCartFill={BsFillCartFill} FcViewDetails={FcViewDetails} GrCheckboxSelected={GrCheckboxSelected} AiOutlineSelect={AiOutlineSelect} GiAutogun={GiAutogun} GoDiffRemoved={GoDiffRemoved} />

      <Questions BsBoxArrowUpRight={BsBoxArrowUpRight} />

      <Footer AiOutlineCopyrightCircle={AiOutlineCopyrightCircle} />
    </div>
  );
}

export default App;