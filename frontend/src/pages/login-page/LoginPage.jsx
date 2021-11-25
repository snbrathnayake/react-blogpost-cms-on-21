import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {singin} from 'http/api';
import './login-page.css';
import {Context} from 'context/Context';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {dispatch, isFetching, error} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN_REQUEST'});

    try {
      const res = await singin({
        username: username,
        password: password,
      });
      dispatch({type: 'LOGIN_COMPLETED', payload: res.data});
      // res.data && window.location.replace('/');
    } catch (err) {
      console.log(err);
      dispatch({type: 'LOGIN_FAILURE'});
    }
  };

  return (
    <div className='pageLayout'>
      <div className='login'>
        <span className='loginTitle'>Login</span>
        {error && <span className='alert error-alert'>Error occurred while Login</span>}
        <form className='loginForm' onSubmit={handleSubmit}>
          <label>
            <i className='far fa-envelope'></i>Username
          </label>
          <input
            type='text'
            placeholder='Enter Username'
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>
            <i className='fas fa-key'></i>Password
          </label>
          <input
            type='password'
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='loginBtn' type='submit' disabled={isFetching}>
            Login
          </button>
        </form>
        <button className='switchLinkButton'>
          <Link to='/register'>Register</Link>
        </button>
      </div>
    </div>
  );
}
