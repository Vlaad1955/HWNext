import React from 'react';
import PostsComponent from "@/app/components/posts/PostsComponent";
import {fetchData} from "@/app/service/appi.service";
import {urls} from "@/app/constant/urls";

const PostsPage = async () => {

    const posts = await fetchData(urls.PostsUrl);


    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;