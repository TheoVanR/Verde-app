import { Form } from "react-bootstrap";
import React, { useState, useEffect } from 'react';


function Bform() {
    const [kundnamn, setKundnamn] = useState('');
    const [ankomstDatum, setAnkomstDatum] = useState('');
    const [bokningsDatum, setBokningsDatum] = useState('');
    const [antalPersoner, setAntalPersoner] = useState('');
    const [bokningar, setBokningar] = useState([]);


    // Post with fetchAPI

    const addBokning = async (kundnamn, ankomstDatum, bokningsDatum, antalPersoner) => {
        const response = await fetch("https://informatik7.ei.hv.se/Bordsbokning/api/Boknings", {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                kundnamn: kundnamn,
                ankomstDatum: ankomstDatum,
                bokningsDatum: bokningsDatum,
                antalPersoner: antalPersoner
            })
        });
        const data = await response.json();
        setBokningar([data, ...bokningar]);
        // Clear form fields after successful submission
        setKundnamn('');
        setAnkomstDatum('');
        setBokningsDatum('');
        setAntalPersoner('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        addBokning(kundnamn, ankomstDatum, bokningsDatum, antalPersoner);
    };


    return (
        <div className="BForm">
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="Arrival">Date</label>
                    <input type="text" className="form-control" value={ankomstDatum} onChange={(e) => setAnkomstDatum(e.target.value)} placeholder="YYYY-MM-DD">
                    </input>


                </div>


                <div className="form-group">
                    <label htmlFor="size">Booking size</label>
                    <input type="text" className="form-control" value={antalPersoner} onChange={(e) => setAntalPersoner(e.target.value)} placeholder="Number of guests"></input>

                </div>
                <div className="form-group">
                    <label htmlFor="Name">Email address</label>
                    <input type="text" className="form-control" value={kundnamn} onChange={(e) => setKundnamn(e.target.value)} placeholder="name@example.com"></input>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </Form>
        </div>
    );
}
export default Bform;