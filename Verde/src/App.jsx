import { Routes, Route } from 'react-router-dom';
import NavBar from './assets/Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import ApiContent from './pages/ApiContent';

import ProjektApi from './pages/ProjektAPi';
import Menu from './pages/menu';
import About from './pages/About';
import Footer from './assets/Components/Footer';
import Booking from './pages/Booking';


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Booking" element={<Booking />} />
        <Route path="Api" element={<ApiContent />} />
        <Route path="ProjektApi" element={<ProjektApi />} />
        <Route path="About" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
