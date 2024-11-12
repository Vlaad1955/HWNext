import React from 'react';

type Params = { id: string }

const PostPage = async ({params}: { params: Params }) => {

    const post = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id).then(res => res.json());


    return (
        <div>
           <h1>{post.id}. {post.title}</h1>
        </div>
    );
};

export default PostPage;