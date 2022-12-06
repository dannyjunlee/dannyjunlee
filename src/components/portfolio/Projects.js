import React from 'react';
import '../../index.css';
import lucarios from '../../images/lucarios.jpg';
import alphahub from '../../images/alphahub.png';
import pwGen from '../../images/random-password-generator.png';
import weather from '../../images/weather-dashboard.png';
import planner from '../../images/work-day-scheduler.png';

const Projects = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className='row align-items-center my-5'>

          <div className='col-lg-7'>
            <img
              href='https://github.com/dannyjunlee/restaurant-menu'
              target='_blank'
              className='img-fluid rounded mb-4 mb-lg-0'
              src={lucarios}
              alt='Lucarios'
            />
          </div>
          <div className='col-lg-5'>
            <h1 className='font-weight-light'>
              <a href='https://github.com/dannyjunlee/restaurant-menu' rel='noreferrer' target='_blank' className='prjTitle'>Lucario's</a></h1>
            <p>
              Lucario's is a group project where we collaborated in a team of 5 to create from scratch an application that can serve as a restaurant's menu, takeout, and delivery app. It utilizes Handlebars to generate the HTML elements, MySQL for the database, and Node and Express for the server. The project was deployed to Heroku; however, due to Heroku no longer having a free plan available, the link will redirect to the GitHub repo until further notice. Originally, the project was deployed at <a href='https://xyz-restaurant.herokuapp.com/' rel='noreferrer' target='_blank'>this link (https://xyz-restaurant.herokuapp.com/)</a>. Future development would build upon the cart feature to route payment information to third-party vendors, as well as add geolocation functionality to show distance and time for deliveries.
            </p>
          </div>
        </div>

        <div className='row align-items-center my-5'>
          <div className='col-lg-7'>
            <img
              href='https://dannyjunlee.github.io/alpha-hub/'
              target='_blank'
              className='img-fluid rounded mb-4 mb-lg-0'
              src={alphahub}
              alt='Alpha Hub'
            />
          </div>
          <div className='col-lg-5'>
            <h1 className='font-weight-light'>
              <a href='https://dannyjunlee.github.io/alpha-hub/' rel='noreferrer' target='_blank' className='prjTitle'>Alpha Hub</a></h1>
            <p>
              Alpha Hub is a group project where we collaborated to create a website, combining HTML, CSS, and JavaScript. It utilizes web APIs to pull stock data. The inspiration for this project came from my past work experience as a financial advisor, where I dealt with the stock market on a daily basis. Alpha Hub serves as both a starting place for beginner investors and a datahub for any investor to quickly and easily access information about not only individual stocks, but filter by sector, which is a service that is either not readily provided in currently available stock data resources or hidden behind paywalls. As such, we did face limitations such as a restriction of 5 API calls per minute and the data only being as up to date as market close of the previous market day. Future development would seek funding to utilize a paid tier API to access stock data with 15-minute delays or less and an unlimited amount of API calls.
            </p>
          </div>
        </div>

        <div className='row align-items-center my-5'>
          <div className='col-lg-7'>
            <img
              href='https://dannyjunlee.github.io/weather-dashboard/'
              target='_blank'
              className='img-fluid rounded mb-4 mb-lg-0'
              src={weather}
              alt='Weather Dashboard'
            />
          </div>
          <div className='col-lg-5'>
            <h1 className='font-weight-light'>
              <a href='https://dannyjunlee.github.io/weather-dashboard/' rel='noreferrer' target='_blank' className='prjTitle'>Weather Dashboard</a></h1>
            <p>
              Weather Dashboard is an individual project that takes a city name as the search input and displays the current and 5-day forecast weather for that city. This project is focused on deconstructing and utilizing public web APIs. Future development would take the form of a PWA application that can be downloaded and alert the user via notifications for certain weather conditions such as rain, snow, or extreme heat.
            </p>
          </div>
        </div>

        <div className='row align-items-center my-5'>
          <div className='col-lg-7'>
            <img
              href='https://dannyjunlee.github.io/daily-planner/'
              target='_blank'
              className='img-fluid rounded mb-4 mb-lg-0'
              src={planner}
              alt='Work Day Scheduler'
            />
          </div>
          <div className='col-lg-5'>
            <h1 className='font-weight-light'>
              <a href='https://dannyjunlee.github.io/daily-planner/' rel='noreferrer' target='_blank' className='prjTitle'>Work Day Scheduler</a></h1>
            <p>
              Work Day Scheduler is an individual project that allows a user to create and plan out a schedule for the day. It displays the current date at the top of the page. The schedule spans from 9AM-5PM and automatically changes the background of each time period depending on whether the time has passed or not. This project is focused on utilizing local storage to save data so that it reappears upon page reload. As this project utilized local storage rather than session storage, the data would be preserved even if the browser were closed. Future development would incorporate functionality to expand the application to a weekly, monthly, and yearly scheduler as well, as well as display public holidays based on user location.
            </p>
          </div>
        </div>

        <div className='row align-items-center my-5'>
          <div className='col-lg-7'>
            <img
              href='https://dannyjunlee.github.io/random-password-generator/'
              target='_blank'
              className='img-fluid rounded mb-4 mb-lg-0'
              src={pwGen}
              alt='Random Password Generator'
            />
          </div>
          <div className='col-lg-5'>
            <h1 className='font-weight-light'>
              <a href='https://dannyjunlee.github.io/random-password-generator/' rel='noreferrer' target='_blank' className='prjTitle'>Random Password Generator</a></h1>
            <p>
              Random Password Generator is an individual project that, as the name suggests, helps users create a random password given character length. It utilizes the browser alert popup functionality. The random password is generated via an algorithm and incorporates special characters as well. Future development would incorporate functionality to allow the user to choose which special characters can get incorporated.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects;