import React from 'react';

const Post = ({post, setPost}) => {
    return (
        <div>
                {
                    <p>
                        id - {post.id}<br/>
                        title - {post.title}<br/>
                        <button onClick={() => setPost(post)}>INFO</button>
                    </p>
                }
        </div>
    );
};

export default Post;