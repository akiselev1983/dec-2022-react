import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({item}) => {
    const {id, name, email, body, postId, } = item
    const navigate = useNavigate()
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <div>postId: {postId}</div>
            <button onClick={()=>navigate(postId.toString())}>info post</button>

        </div>
    );
};

export default Comment;