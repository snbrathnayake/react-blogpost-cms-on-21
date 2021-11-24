import React from 'react';
import {Link} from 'react-router-dom';
import './register-page.css';

export default function RegisterPage() {


  return (
    <div className='pageLayout'>
      <div className='register'>
        <form className='registerForm'>
          <label>
            <i className='far fa-user'></i>Username
          </label>
          <input type='text' placeholder='Enter Username' />
          <label>
            <i className='far fa-envelope'></i>Email
          </label>
          <input type='email' placeholder='Enter Email Address' />
          <label>
            <i className='fas fa-key'></i>Password
          </label>
          <input type='password' placeholder='Enter Password' />
          <button className='registerBtn'>register</button>
        </form>
        <button className='switchLinkButton'>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
}
