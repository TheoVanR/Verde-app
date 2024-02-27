// src/components/AppRouter.jsx

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
                    <Link to="/Booking">Reservations</Link>
                </li>
                <li>
                    <Link to="/Api">Api</Link>
                </li>
                <li>
                    <Link to="/about">Make a reservation</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
