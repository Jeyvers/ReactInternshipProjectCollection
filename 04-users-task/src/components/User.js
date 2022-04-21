import React from 'react';

const User = ({
  address,
  company,
  email,
  id,
  name,
  phone,
  username,
  website,
}) => {
  const { street, suite, city, zipcode } = address;
  const userAddress = street + ',' + suite + ', ' + city;

  return (
    <div className='user-card'>
      <h1>{name}</h1>
      <span className='user-website'>{website}</span>

      <div className='user-general-info'>
        <h4>General Info</h4>
        <ul>
          <li>
            <span>Username</span>
            <span>{username}</span>
          </li>
          <li>
            <span>Address</span>
            <span>{userAddress}</span>
          </li>
          <li>
            <span>Email</span>
            <span className='email'>{email.toLowerCase()}</span>
          </li>

          <li>
            <span>Phone</span>
            <span>{phone}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
