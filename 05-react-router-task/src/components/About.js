import React from 'react';

const About = ({ description, deployments, published, projects }) => {
  return (
    <section className='stats'>
      <div className='container'>
        <h3 className='stats-heading text-center my-1'>{description}</h3>
        <div className='grid grid-3 text-center my-4'>
          <div>
            <i className='fas fa-server fa-3x'></i>
            <h3>{deployments.toLocaleString()}</h3>
            <p className='text-secondary'>Deployments</p>
          </div>
          <div>
            <i className='fas fa-upload fa-3x'></i>
            <h3>{published.toLocaleString()} TB</h3>
            <p className='text-secondary'>Published</p>
          </div>
          <div>
            <i className='fas fa-project-diagram fa-3x'></i>
            <h3>{projects.toLocaleString()}</h3>
            <p className='text-secondary'>Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
