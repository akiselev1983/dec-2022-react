import React from 'react';

const Character = ({character}) => {
    const {id, name, status, species, gender, image, created} = character;
    return (
        <div>
            <div>id {id}</div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{species}</div>
            <div>{gender}</div>
            <img src={image}/>
            <div>{created}</div>
        </div>
    );
};

export default Character;