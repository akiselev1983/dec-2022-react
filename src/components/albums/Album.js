import React from 'react';

const Album = ({item}) => {
    return (
        <div>
            <div>userId: {item.userId}</div>
            <div>id: {item.id}</div>
            <div>title: {item.title}</div>
            <br/>

        </div>
    );
};

export default Album;