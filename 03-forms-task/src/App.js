import { useState } from 'react';
import Form from './components/Form';
const App = () => {
  const [error, setError] = useState({ err: false, message: '' });

  return (
    <div className='container'>
      <h1 className='text-center'>Form</h1>
      {error.err && (
        <div className='btn-danger p-3'> Please fill in {error.message} </div>
      )}

      <Form setError={setError} />
    </div>
  );
};

export default App;
