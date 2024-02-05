// UserCredentials.jsx
import React from 'react';
import image from './user.png';

const UserCredentials = ({ email }) => {
  return (
    <div className="user-credentials">
      <img src={image} alt="User Profile"></img>
      <div className="user-email">{email}</div>

    </div>
  );
}

export default UserCredentials;
