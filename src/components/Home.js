import React from 'react';
import profile from '../images/profile.png';
import '../index.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <div className='row align-items-center my-5'>
                    <img
                        className='img-fluid rounded mb-4 lb-lg-0'
                        src={profile}
                        alt='Profile'
                    />
                </div>
                <div className='col-lg-12'>
                    <h1 className='font-weight-light'>Home</h1>
                    <p>
                        Welcome to Danny Lee's Web Development Portfolio. Danny Lee joined the Columbia Coding Boot Camp in September of 2022 to learn essential skills in web development. He is skilled in HTML, CSS, and JavaScript. Danny has developed projects, both individually and as part of a group, related to JavaScript-related technologies such as Handlebars, React, MongoDB, and more.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;