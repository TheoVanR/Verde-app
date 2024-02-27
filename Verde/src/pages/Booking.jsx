import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';



function Booking() {
    const [kundNamn, setKundnamn] = useState('');
    const [ankomstDatum, setAnkomstDatum] = useState('');
    const [bokningsDatum, setBokningsDatum] = useState('');
    const [antalPersoner, setAntalPersoner] = useState('');
    const [bokningar, setBokningar] = useState([]);


    // GET with fetch API

    useEffect(() => {
        const fetchBokningar = async () => {
            const response = await fetch(
                "https://informatik7.ei.hv.se/Bordsbokning/api/Boknings"
            );
            const data = await response.json();
            setBokningar(data);
        };
        fetchBokningar();
    }, []);


    const deleteBokning = async (id) => {
        let response = await fetch(
            `https://informatik7.ei.hv.se/Bordsbokning/api/Boknings/${id}`,
            {
                method: 'DELETE',

            }
        );
        if (response.status === 200) {
            setBokningar(
                bokningar.filter((bokning) => {
                    return bokning.id !== id;
                })
            );
        } else {
            return;
        }
    };


    // Put with fetchAPI
    const editBokning = async (id, updatedData) => {
        let response = await fetch(
            `https://informatik7.ei.hv.se/Bordsbokning/api/Boknings/${id}`,
            {
                method: 'PUT',

            }
        );
        if (response.status === 200) {
            setBokningar(
                bokningar.filter((bokning) => {
                    return bokning.id !== id;
                })
            );
        } else {
            return;
        }
    };


    const addBokningar = async (kundNamn, ankomstDatum, bokningsDatum, antalPersoner) => {
        const response = await fetch("https://informatik7.ei.hv.se/Bordsbokning/api/Boknings", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                kundNamn: kundNamn,
                ankomstDatum: ankomstDatum,
                bokningsDatum: bokningsDatum,
                antalPersoner: antalPersoner
            })
        });
        const data = await response.json();
        setBokningar([data, ...bokningar]);
        // Clear form fields after successful submission l

        setKundnamn('');
        setAnkomstDatum('');
        setBokningsDatum('');
        setAntalPersoner('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBokningar(kundNamn, ankomstDatum, bokningsDatum, antalPersoner);
    };



    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" className="formimp" value={kundNamn} onChange={(e) => setKundnamn(e.target.value)} placeholder="Kundnamn" />
                <input type="text" className="formimp" value={ankomstDatum} onChange={(e) => setAnkomstDatum(e.target.value)} placeholder="AnkomstDatum" />
                <input type="text" className="formimp" value={bokningsDatum} onChange={(e) => setBokningsDatum(e.target.value)} placeholder="BokningsDatum" />
                <input type="text" className="formimp" value={antalPersoner} onChange={(e) => setAntalPersoner(e.target.value)} placeholder="AntalPersoner" />
                <Button type='submit'>Add Booking</Button>
            </form>
            <div className="posts-container">
                <h2>Bookings</h2>
                {bokningar.map((bokning) => {
                    return (
                        <div className="post-card" key={bokning.id}>
                            <div>
                                <p>Kundnamn</p>
                                <p className="post-body" >{bokning.kundNamn}</p>
                            </div>
                            <div>
                                <p>AnkomstDatum</p>
                                <p className="post-body">{bokning.ankomstDatum}</p>
                            </div>
                            <div>
                                <p>BokningsDatum</p>
                                <p className="post-body">{bokning.bokningsDatum}</p>
                            </div>
                            <div>
                                <p>AntalPersoner</p>
                                <p className="post-body">{bokning.antalPersoner}</p>
                            </div>
                            <Button onClick={deleteBokning(bokning.id)} >Delete</Button>
                            <Button onClick={editBokning(bokning.id)} >Edit</Button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Booking;
