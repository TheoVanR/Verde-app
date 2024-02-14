// src/components/AppRouter.jsx

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/menu';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav >
            <ul className='inline-block'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
