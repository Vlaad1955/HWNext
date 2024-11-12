import React from 'react';

type Params = { id: string }

const UserPage = async ({params}: { params: Params }) => {

    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + params.id).then(res => res.json());


    return (
        <div>
           <h1>{user.id}. {user.name}</h1>
        </div>
    );
};

export default UserPage;