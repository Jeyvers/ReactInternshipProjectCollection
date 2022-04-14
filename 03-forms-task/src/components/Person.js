import React from 'react';

const Person = ({ address, bio, email, firstName, gender, id, lastName }) => {
  return (
    <div className='card m-3 flex-grow-1' style={{ width: '25rem' }}>
      <div className='card-body'>
        <h5 className='card-title'>
          {firstName} {lastName}
        </h5>
        <h6 className='card-subtitle mb-2 text-muted'>Email: {email}</h6>
        <h6 className='card-subtitle mb-2 text-muted'>Address: {address}</h6>
        <p className='card-text'>
          Gender: <span className='text-capitalize'>{gender}.</span> {bio}.
        </p>
      </div>
    </div>
  );
};

export default Person;
