import {singup} from 'http/api';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './register-page.css';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const payload = {
      username: username,
      email: email,
      password: password,
      profileImage: '',
    };
    try {
      const res = await singup(payload);
      res.data && window.location.replace('/login');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className='pageLayout'>
      <div className='register'>
        {error && (
          <span className='alert error-alert'>
            Error occurred while creating new user account
          </span>
        )}
        <form className='registerForm' onSubmit={handleSubmit}>
          <label>
            <i className='far fa-user'></i>Username
          </label>
          <input
            type='text'
            placeholder='Enter Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>
            <i className='far fa-envelope'></i>Email
          </label>
          <input
            type='email'
            placeholder='Enter Email Address'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>
            <i className='fas fa-key'></i>Password
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='registerBtn' type='submit'>
            register
          </button>
        </form>
        <button className='switchLinkButton'>
          <Link to='/login'>Login</Link>
        </button>
      </div>
    </div>
  );
}
