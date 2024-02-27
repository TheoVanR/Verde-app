import React from 'react';

const style = {
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "white",
    color: "white",
    textAlign: "center",
    display: "inline-block",// Updated property
    height: "3rem",

};


function Footer() {
    return (
        <footer style={style}>

            <p>&copy; 2024 Verde. All rights reserved. </p>

        </footer>
    );
};

export default Footer;
