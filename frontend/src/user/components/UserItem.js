import React from 'react';
import './UserItem.css'
import Avatar from '../../shared/components/UIElements/Avatar';
import {Link} from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';

const UserItem = props => {
    return <li className='user-item'>
        <Card className='user-item__content'>
            <Link to = {`${props.id}/pages`}>
                <div className='user-item__image'>
                    <Avatar src={props.image} alt={props.name}></Avatar>
                </div>
                <div className='user_item__info'>
                    <h2>{props.name}</h2>
                    <h3>{props.placeNumber} {props.placeNumber === 1 ? 'place' : 'places'}</h3>
                </div>
            </Link>
        </Card>
    </li>
}

export default UserItem;