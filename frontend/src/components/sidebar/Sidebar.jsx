import {getCategories} from 'http/api';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getCategories();
      setCategories(res.data);
    };
    fetchCategories();
  }, []);

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
          {categories.map((category) => (
            <li className='sidebarListItem' key={category.name}>
              <Link to={`/?category=${category.name}`}>{category.name}</Link>
            </li>
          ))}
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
