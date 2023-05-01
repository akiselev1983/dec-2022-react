import React, {useEffect, useState} from 'react';
import Comment from "./Comment";
import {Outlet} from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments([...value]))
    }, [])
    return (
        <div>
            <Outlet/>
            <hr/>
            {
                comments.map(value => <Comment key={value.id} item={value }/>)
            }
        </div>
    );
};

export default Comments;