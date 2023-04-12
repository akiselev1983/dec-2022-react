import React from 'react';

const Simpson = ({simpson}) => {
    const {id, name, img, info} = simpson;
    return (
        <div>
            <div>id {id}</div>
            <div>name {name}</div>
            <img src={img}/>
            <p>{info}</p>
        </div>
    );
};

export default Simpson;