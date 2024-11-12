import React from "react";
import UsersComponent from "@/app/components/users/UsersComponent";
import CommentsComponent from "@/app/components/comments/CommentsComponent";


const UsersPage = async () =>{

    const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json());

    return(
        <div>
<CommentsComponent comments={comments}/>
        </div>
    );
};

export default UsersPage;