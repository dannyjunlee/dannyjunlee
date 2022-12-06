import React from 'react';
import mern from '../images/mern-stack.png';

const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='row align-items-center my-5'>
                    <div className='col-lg-1'></div>
                    <div className='col-lg-6'>
                        <img
                            className='img-fluid rounded mb-4 mb-lg-0'
                            src={mern}
                            alt='MERN Stack'
                        />
                    </div>
                    <div className='col-lg-5'>
                        <h1 className='font-weight-light'>About Me</h1>
                        <p>
                            I am Danny Lee, a 24 year old Korean-American aspiring web developer. I graduated from Cornell University's School of Hotel Administration in 2021 and worked as a Financial Advisor at Morgan Stanley for 1 year before deciding to make a career change in a field I had great interest in. At Cornell, I took courses in Python and Excel VBA, where I gained my first exposure to coding. After a year at Morgan Stanley, I decided to pursue this passion before it was too late and enrolled in Columbia's bootcamp.

                            I hope that, further down this new career path, I can not only contribute to web and app development, but utilize these skills that I have acquired in the past three months to learn other languages such as C++ and move into the gaming industry as well.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;