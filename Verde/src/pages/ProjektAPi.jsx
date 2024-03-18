import React, { useState } from "react";

function ProjektAPi() {
    const [events, setEvents] = useState(null);
    const [error, setError] = useState("");

    const getEventData = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://informatik4.ei.hv.se/EVENTAPI2/api/events");
            const data = await response.json();

            if (data) {
                setEvents(data);
                setError("");
            } else {
                setError("Could not fetch event data.");
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1> Event Information</h1>
            <button onClick={getEventData}>Get Event Data</button>
            {error && <p className="error">{error}</p>}
            {
                events && (
                    <div className="info">
                        {events.map(event => (
                            <div key={event.eventID}>
                                <p>Name: {event.name}</p>
                                <p>Description: {event.description}</p>
                                <p>Start Date Time: {event.startDateTime}</p>
                                <p>End Date Time: {event.endDateTime}</p>
                                <p>Price: {event.price}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        </div >
    );
}

export default ProjektAPi;