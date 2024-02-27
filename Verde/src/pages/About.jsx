// src/components/About.jsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Bform from '../assets/Components/BForm';


function About() {
    return (
        <Container className="hero" >
            <h2>Have a table!</h2>
            <p>Enter your reservation info</p>
            <Bform />
        </Container>
    );
};

export default About;
