import React from 'react';

const User = ({user, setUserId}) => {
    return (
        <div>
            <div>id: {user.id}</div>
            <div>name: {user.name}</div>
            <div>username: {user.username}</div>
            <div>email: {user.email}</div>
            <div>phone: {user.phone}</div>
            <button onClick={() => setUserId(user.id)}>POSTS</button>
            <hr/>

        </div>
    );
};

export default User;