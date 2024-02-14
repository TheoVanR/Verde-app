import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home';
import NavBar from './Navbar';
import Menu from './pages/menu';
import About from './pages/About';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Menu" element={<Menu />} />
        <Route exact path="About" element={<About />} />
      </Routes>

    </>


  );
}

export default App;
