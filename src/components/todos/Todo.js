import React from 'react';

const Todo = ({item}) => {
    return (
        <div>
            <div>userId: {item.userId}</div>
            <div>id: {item.id}</div>
            <div>title: {item.title}</div>
            <div>completed: {item.completed.toString()}</div>
            <hr/>
        </div>
    );
};

export default Todo;