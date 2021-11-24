import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSecondary'>React & Node <b>CMS</b></span>
        <span className='headerTitlePrimary'>blogger.com</span>
      </div>
      <img
        className='headerImage'
        src='https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
        alt=''
      />
    </div>
  );
}
