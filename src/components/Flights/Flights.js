import React, {useEffect, useState} from 'react';
import Flight from "../Flight/Flight";

const Flights = () => {
    const [flights, setFlights]=useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                const filtered = value.filter(item => item.launch_year!=="2020")
                setFlights(filtered)
            })
    })
    return (
        <div>
            {flights.map(flight => (<Flight key={flight.flight_number} flight={flight}/>))}
        </div>
    );
};

export default Flights;