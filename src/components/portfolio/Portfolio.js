import React from 'react';
import { Outlet } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className='home'>
      <div className='container'>
        <h1 className='text-center mt-5'>Projects</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default Portfolio;