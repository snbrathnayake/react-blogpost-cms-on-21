import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const user = !true;

  return (
    <div className='nav'>
      <div className='navLeft'>
        <i className='socialIcon fab fa-facebook-square'></i>
        <i className='socialIcon fab fa-twitter-square'></i>
        <i className='socialIcon fab fa-pinterest-square'></i>
        <i className='socialIcon fab fa-instagram-square'></i>
      </div>
      <div className='navCenter'>
        <ul className='navList'>
          <li className='navItem'>
            <Link to='/'>home</Link>
          </li>
          <li className='navItem'>
            <Link to='/about'>about</Link>
          </li>
          <li className='navItem'>
            <Link to='/contact'>contact</Link>
          </li>
          <li className='navItem'>
            <Link to='/write'>write</Link>
          </li>
          <li className='navItem'>{user && 'Logout'}</li>
        </ul>
      </div>
      <div className='navRight'>
        {user ? (
          <img
            className='profileImage'
            src='https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            alt='profile'
          />
        ) : (
          <ul className='navList'>
            <li className='navItem'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='navItem'>
              <Link to='/register'>register</Link>
            </li>
          </ul>
        )}

        <i className='navSearchIcon fas fa-search'></i>
      </div>
    </div>
  );
}
