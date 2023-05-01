import React, {useEffect, useState} from 'react';
import Todo from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => setTodos([...value]))

    }, [])
    return (

        <div>
            {
                todos.map(value => <Todo key={value.id} item={value}/>)
            }
        </div>
    );
};

export default Todos;