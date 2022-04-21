import { useState, useEffect } from 'react';
import User from './User';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );

      const data = await response.json();
      console.log(data[0]);
      setUsers(data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='users-container'>
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Users;
