import React from 'react';
import { Container } from 'react-bootstrap';

const Menu = () => {
    const tacos = [
        { name: 'Pollo', price: 5.99 },
        { name: 'Carnitas', price: 6.99 },
        { name: 'El pastor', price: 7.99 },
        { name: 'Birria', price: 4.99 },
    ];

    return (
        <Container className='hero'>
            <h1>Menu</h1>
            <Container className='listMenu'>
                <ul>
                    {tacos.map((taco, index) => (
                        <li key={index}>
                            {taco.name} - ${taco.price}
                        </li>
                    ))}
                </ul>
            </Container>

        </Container>
    );
};

export default Menu;
