import React from 'react';
import CommentLayout from "@/app/(pages)/comments/[id]/layout";

type Params = { id: string }

const CommentPage = async ({params}: { params: Params }) => {

    const comment = await fetch('https://jsonplaceholder.typicode.com/comments/' + params.id).then(res => res.json());


    return (
        <div>
          <h1> {comment.id} {comment.name} </h1>
        </div>
    );
};

export default CommentPage;