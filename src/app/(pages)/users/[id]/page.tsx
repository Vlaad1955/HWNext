import React from 'react';
import {fetchId} from "@/app/service/appi.service";
import {urls} from "@/app/constant/urls";

type Params = { id: string }

const UserPage = async ({params}: { params: Params }) => {

    const user = await fetchId(urls.UserUrl, params.id)


    return (
        <div>
           <h1>{user.id}. {user.name}</h1>
        </div>
    );
};

export default UserPage;