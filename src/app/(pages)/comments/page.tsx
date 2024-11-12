import React from "react";
import UsersComponent from "@/app/components/users/UsersComponent";
import CommentsComponent from "@/app/components/comments/CommentsComponent";
import {fetchData} from "@/app/service/appi.service";
import {urls} from "@/app/constant/urls";


const UsersPage = async () =>{

    const comments = await fetchData(urls.CommentsUrl);

    return(
        <div>
<CommentsComponent comments={comments}/>
        </div>
    );
};

export default UsersPage;