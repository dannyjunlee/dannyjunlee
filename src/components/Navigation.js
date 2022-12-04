import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
          <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <div className='container'>
              {/* Header is part of the Navigation as both appear on every page */}
              <NavLink className='navbar-brand' to='/'>
                Danny Lee
              </NavLink>
              <div>
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>
                      Home
                      <span className='sr-only'>(current)</span>
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/about'>
                      About
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/portfolio'>
                      Portfolio
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/contact'>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
}

export default Navigation;