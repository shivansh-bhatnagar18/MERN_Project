import React from 'react';
import './UsersList.css'
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

const UsersList = props => {

    if(props.items.length === 0){
        return <Card><h2>No Users Found</h2></Card>
    }
    return (
        <ul className = "users-list">
            {props.items.map(user => 
                <UserItem key = {user.id}
                 id = {user.id}
                 name = {user.name} 
                 image = {user.image}
                 placeNumber = {user.places} />
            )}
        </ul>
    );
}

export default UsersList;