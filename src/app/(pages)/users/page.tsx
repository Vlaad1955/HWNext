import React from 'react';
import UsersComponent from "@/app/components/users/UsersComponent";
import {fetchData} from "@/app/service/appi.service";
import {urls} from "@/app/constant/urls";

const UsersPage = async () => {

    const users = await fetchData(urls.UserUrl);

    return (
        <div>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;