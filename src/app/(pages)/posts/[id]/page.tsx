import React from 'react';
import {fetchId} from "@/app/service/appi.service";
import {urls} from "@/app/constant/urls";

type Params = { id: string }

const PostPage = async ({params}: { params: Params }) => {

    const post = await fetchId(urls.PostsUrl, params.id);

    return (
        <div>
           <h1>{post.id}. {post.title}</h1>
        </div>
    );
};

export default PostPage;