import {Context} from 'context/Context';
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
  };

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
          <li className='navItem logoutLink' onClick={handleLogout}>
            {user && 'Logout'}
          </li>
        </ul>
      </div>
      <div className='navRight'>
        {user ? (
          <>
            <img
              className='profileImage'
              src={user.profileImage}
              alt={user.username}
            />
            <span style={{textTransform: 'capitalize'}}>{user.username}</span>
          </>
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
