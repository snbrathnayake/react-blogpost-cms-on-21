import React from 'react';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          className='aboutmeImage'
          src='https://images.pexels.com/photos/42399/pexels-photo-42399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt=''
        />
        <p>
          What happened to about me?
          <br /> The product is shut down, the team is put to work on other projects, and the
          founders quit just as soon as they're contractually allowed to. But for identity service
          About.me.
        </p>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>life</li>
          <li className='sidebarListItem'>music</li>
          <li className='sidebarListItem'>style</li>
          <li className='sidebarListItem'>sport</li>
          <li className='sidebarListItem'>tech</li>
          <li className='sidebarListItem'>cinema</li>
        </ul>
      </div>

      <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
}
