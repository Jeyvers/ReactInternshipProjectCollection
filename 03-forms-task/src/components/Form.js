import React, { useState } from 'react';
import { useRef } from 'react';
import Person from './Person';
// JS

const PersonInformation = ({ setError }) => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    address: '',
    bio: '',
  });
  const formRef = useRef(null);
  let currentValue = person.gender || 'DEFAULT';

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(person.email)) {
      runError('a valid email address');
    } else if (
      person.firstName &&
      person.lastName &&
      person.email &&
      person.gender &&
      person.address &&
      person.bio
    ) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        address: '',
        bio: '',
      });
    } else {
      runError('all fields');
    }
  };

  const runError = (errMessage) => {
    window.scroll(0, 0);
    setError({ err: true, message: errMessage });
    formRef.current.classList.add('was-validated');
    setTimeout(() => setError({ err: false, message: '' }), 3000);
  };

  return (
    <>
      <article>
        <form className='form' ref={formRef} onSubmit={handleSubmit}>
          <div className=' mb-3'>
            <label htmlFor='firstName' className='form-label'>
              First Name :
            </label>
            <input
              className='form-control'
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='lastName'>
              Last Name :{' '}
            </label>
            <input
              className='form-control'
              type='text'
              id='lastName'
              name='lastName'
              value={person.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='email'>
              Email :{' '}
            </label>
            <input
              className='form-control'
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='gender'>
              Gender
            </label>

            <select
              className='form-select'
              value={currentValue}
              name='gender'
              id=''
              onChange={handleChange}
            >
              <option value='DEFAULT' disabled>
                Select gender
              </option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>

          <div className='mb-3'>
            <label className='form-label' htmlFor='address'>
              Address :{' '}
            </label>

            <textarea
              className='form-control'
              type='text'
              id='address'
              name='address'
              value={person.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className='mb-3'>
            <label className='form-label' htmlFor='bio'>
              Bio :{' '}
            </label>
            <textarea
              className='form-control'
              type='text'
              id='bio'
              name='bio'
              value={person.bio}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type='submit'
            onClick={handleSubmit}
            className='btn btn-primary'
          >
            Submit
          </button>
        </form>
        <div className='d-flex flex-wrap'>
          {people.map((person) => {
            return <Person {...person} key={person.id} />;
          })}
        </div>
      </article>
    </>
  );
};

export default PersonInformation;
