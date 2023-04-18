import React from 'react';

const Flight = ({flight}) => {
    return (
        <div>
                <div>mission_name: {flight.mission_name}</div>
                <div>launch_year: {flight.launch_year}</div>
                <img src={flight.mission_patch_small}/>
                <hr/>

        </div>
    );
};

export default Flight;