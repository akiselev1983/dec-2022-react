import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


const Post = () => {
    const {postId} = useParams()
    const [post, setPost] = useState(null)
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts/'+postId)
            .then(value => value.json())
            .then(value => setPost(value))
    },[postId])
    return (
        <div>
            Hello
            {post&& (
                <div>
                    <div>id: {post.id}</div>
                    {/*<div>postId: {post.postId}</div>*/}
                    <div>body: {post.body}</div>
                    <div>title: {post.title}</div>
                </div>
            )}
        </div>
    );
};

export default Post;