import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='home'>
        <div className='container'>
            <Link to='/portfolio/project1'>
              <div className='row align-items-center my-5'>
                <div className='col-lg-7'>
                  <img
                    className='img-fluid rounded mb-4 mb-lg-0'
                    src='https://static.wikia.nocookie.net/rezero/images/0/02/Rem_Anime.png/revision/latest?cb=20210916151323'
                    alt=''
                  />
                </div>
                <div className='col-lg-5'>
                  <h1 className='font-weight-light'>Project 1</h1>
                  <p>
                    This is project 1, where ...
                  </p>
                </div>
              </div>
            </Link>

            <Link to='/portfolio/project2'>
              <div className='row align-items-center my-5'>
                <div className='col-lg-7'>
                  <img
                    className='img-fluid rounded mb-4 mb-lg-0'
                    src='https://static.wikia.nocookie.net/rezero/images/0/02/Rem_Anime.png/revision/latest?cb=20210916151323'
                    alt=''
                  />
                </div>
                <div className='col-lg-5'>
                  <h1 className='font-weight-light'>Project 2</h1>
                  <p>
                    This is project 2, where ...
                  </p>
                </div>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Projects;