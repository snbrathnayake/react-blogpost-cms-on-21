import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './settings-page.css';

export default function SettingsPage() {
  return (
    <div className='pageLayout'>
      <div className='settings'>
        <div className='settingsWrapper'>
          <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle'>Delete Account</span>
          </div>
          <form className='settingsForm'>
            <label htmlFor=''>Profile Picture</label>
            <div className='settingsPP'>
              <img
                src='https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                alt=''
              />
              <label htmlFor='fileInput'>
                <i className='settingsPPIcon fas fa-user-circle'></i>
              </label>
              <input type='file' id='fileInput' style={{display: 'none'}} />
            </div>

            <label>Username</label>
            <input type='text' placeholder='Username' />

            <label>Email</label>
            <input type='email' placeholder='address@gmail.com' />

            <label>Password</label>
            <input type='password' />

            <button className='settingSubmitBtn'>Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
