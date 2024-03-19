import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Booking() {

    const API_BASE_URL = 'https://informatik7.ei.hv.se/Bordsbokning/api/Boknings';

    const [kundNamn, setKundnamn] = useState('');
    const [bokningsDatum, setBokningsDatum] = useState('');
    const [antalPersoner, setAntalPersoner] = useState('');
    const [bokningar, setBokningar] = useState([]);

    const [id, setId] = useState('');
    const [nykundNamn, setNyKundnamn] = useState('');
    const [nybokningsDatum, setNyBokningsDatum] = useState('');
    const [nyantalPersoner, setNyAntalPersoner] = useState('');


    // GET request
    useEffect(() => {
        const fetchBokningar = async () => {
            try {
                const response = await fetch(
                    "https://informatik7.ei.hv.se/Bordsbokning/api/Boknings"
                );
                const data = await response.json();
                setBokningar(data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };
        fetchBokningar();
    }, []);

    const deleteBokning = async (id) => {
        const url = `${API_BASE_URL}/${id}`
        const response = await fetch(url, {
            method: 'DELETE',
        });
        window.location.reload();
    };

    const handleEdit = (e, id) => {

        e.preventDefault();
        editBokning(id);
    };

    //PUT request
    const editBokning = async (id) => {

        try {
            const url = `${API_BASE_URL}/${id}`; // Construct the complete URL
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    kundNamn: nykundNamn,
                    bokningsDatum: nybokningsDatum,
                    antalPersoner: parseInt(nyantalPersoner)
                })
            });
            // Handle response as needed
            window.location.reload();
        }
        catch (error) {
            console.error('Error fetching bookings:', error);
        }


    };





    const addBokningar = async () => {
        const response = await fetch("https://informatik7.ei.hv.se/Bordsbokning/api/Boknings", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                kundNamn: kundNamn,
                bokningsDatum: bokningsDatum,
                antalPersoner: parseInt(antalPersoner)
            })
        });
        const data = await response.json();
        setBokningar([data, ...bokningar]);
        // Clear form fields after successful submission
        setKundnamn('');
        setBokningsDatum('');
        setAntalPersoner('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBokningar();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" className="formimp" value={kundNamn} onChange={(e) => setKundnamn(e.target.value)} placeholder="Kundnamn" />
                <input type="text" className="formimp" value={bokningsDatum} onChange={(e) => setBokningsDatum(e.target.value)} placeholder="BokningsDatum" />
                <input type="text" className="formimp" value={antalPersoner} onChange={(e) => setAntalPersoner(e.target.value)} placeholder="AntalPersoner" />
                <Button variant="dark" type='submit'>Add Booking</Button>
            </form>

            <div className="posts-container">
                <h2>Bookings</h2>
                {bokningar.map(bokning => (
                    <div className="post-card" key={bokning.id}>
                        <div>
                            <p>Kundnamn</p>
                            <p className="post-body" >{bokning.kundNamn}</p>
                        </div>
                        <div>
                            <p>BokningsDatum</p>
                            <p className="post-body">{bokning.bokningsDatum}</p>
                        </div>
                        <div>
                            <p>AntalPersoner</p>
                            <p className="post-body">{bokning.antalPersoner}</p>
                        </div>
                        <Button variant="dark" onClick={() => deleteBokning(bokning.id)}>Delete</Button>


                        <form onSubmit={(e) => handleEdit(e, bokning.id)}>

                            <input
                                type="text"
                                className="formimp"
                                value={nykundNamn}
                                placeholder="Nytt Kundnamn"
                                onChange={(e) => setNyKundnamn(e.target.value)}
                            />
                            <input
                                type="text"
                                className="formimp"
                                value={nybokningsDatum}
                                onChange={(e) => setNyBokningsDatum(e.target.value)}
                                placeholder="Nytt BokningsDatum"
                            />
                            <input
                                type="text"
                                className="formimp"
                                value={nyantalPersoner}
                                onChange={(e) => setNyAntalPersoner(e.target.value)}
                                placeholder="Nytt AntalPersoner"
                            />
                            <Button variant="dark" type='submit'>Edit Booking</Button>
                        </form>
                    </div>
                ))}
            </div>
        </>
    );

};
export default Booking;
