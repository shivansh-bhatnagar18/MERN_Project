import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [{id:'u1',
        name:'Fabio Viviani',
        image:'../../../public/fabio-viviani_8105.jpeg',
        places: 3}]

    return (<div>
    <UsersList items = {USERS} />
    </div>);
}

export default Users;