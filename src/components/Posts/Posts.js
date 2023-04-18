import React, {useEffect, useState} from 'react';
import Post from "../Post/Post";

const Posts = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(allPosts => {setPosts(allPosts)});
    }, [])

    let [posts, setPosts] = useState([]);

    return (
        <>
            {
                post&&
                <div>
                    <div>userId: {post.userId}</div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            }
            {
                posts.map(post => <Post post={post} key={post.id} setPost={setPost}/>)
            }
        </>

    );
};

export default Posts;