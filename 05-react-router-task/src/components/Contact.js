import React from 'react';

const Contact = () => {
  return (
    <section className='showcase'>
      <div className='container grid'>
        <div className='showcase-form contact-form card'>
          <h2>Contact Us</h2>
          <form>
            <div className='form-control'>
              <input type='text' name='name' placeholder='Name' required />
            </div>

            <div className='form-control'>
              <input type='email' name='email' placeholder='Email' required />
            </div>
            <div className='form-control'>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                required
              />
            </div>

            <div className='form-control'>
              <textarea
                type='text'
                name='message'
                placeholder='Input your message'
                required
              />
            </div>
            <input type='submit' value='Send' className='btn btn-primary' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
