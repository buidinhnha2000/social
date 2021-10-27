import React from 'react';
import Avatar from './Avatar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserCard = ({user, border}) => {
    
    return (
        <div className={`d-flex p-2 align-item-center ${border}`}>
            <Avatar src={user.avatar}  size="big-avatar" />
            <div className="ml-1" style={{transform: 'translateY(-3px)'}}>
            <span className="d-block">{user.username}</span>
            <small style={{opacity: 0.5}}>{user.fullname}</small>
            </div>
            
        </div>
    )
}

export default UserCard;
