import React from 'react';
import { Link } from 'react-router-dom';
import './login-page.css';

export default function LoginPage() {
  return (
    <div className='pageLayout'>
      <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
          <label>
            <i className='far fa-envelope'></i>Email
          </label>
          <input type='email' placeholder='Enter Email Address' />
          <label>
            <i className='fas fa-key'></i>Password
          </label>
          <input type='password' placeholder='Enter Password' />
          <button className='loginBtn'>Login</button>
        </form>
        <button className='switchLinkButton'>
          <Link to='/register'>Register</Link>
        </button>
      </div>
    </div>
  );
}
