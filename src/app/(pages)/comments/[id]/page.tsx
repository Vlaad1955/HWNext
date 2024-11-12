import React from 'react';
import CommentLayout from "@/app/(pages)/comments/[id]/layout";
import {fetchId} from "@/app/service/appi.service";
import {urls} from "@/app/constant/urls";

type Params = { id: string }

const CommentPage = async ({params}: { params: Params }) => {

    const comment = await fetchId(urls.CommentsUrl, params.id)


    return (
        <div>
          <h1> {comment.id}. {comment.name} </h1>
        </div>
    );
};

export default CommentPage;