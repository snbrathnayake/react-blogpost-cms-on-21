import React, {useContext, useState} from 'react';
import {Context} from 'context/Context';
import Sidebar from '../../components/sidebar/Sidebar';
import './settings-page.css';
import {profileUpdate, uploadPostImage} from 'http/api';

export default function SettingsPage() {
  const {user} = useContext(Context);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [file, setFile] = useState(null);

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    let updatedUser = {
      userId: user._id,
      username: username,
      email: email,
      password: password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profileImage = `http://localhost:8082/backend/images/${filename}`;
      await uploadPostImage(data);
    }

    try {
      const res = await profileUpdate(updatedUser);
      if (res.status === 200) {
        setSuccess('User has been updated. please logout and login again to see the changes!');
      } else {
        setError('Error occured while updating the user profile.');
      }
      console.log(res);
    } catch (err) {
      console.log(err);
      setError('Unable to update user profile .');
    } finally {
      setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 5000);
    }
  };

  const handleProfileDelete = () => {
    alert('handle accout delete');
  };

  return (
    <div className='pageLayout'>
      <div className='settings'>
        <div className='settingsWrapper'>
          <div className='settingsTitle'>
            <span className='settingsUpdateTitle'>Update Your Account</span>
            <span className='settingsDeleteTitle' onClick={handleProfileDelete}>
              Delete Account
            </span>
          </div>
          {error && <span className='alert error-alert'>{error}</span>}
          {success && <span className='alert success-alert'>{success}</span>}

          <form className='settingsForm' onSubmit={handleSubmit}>
            <label htmlFor=''>Profile Picture</label>
            <div className='settingsPP'>
              <img src={file ? URL.createObjectURL(file) : user.profileImage} alt='profile' />
              <label htmlFor='fileInput'>
                <i className='settingsPPIcon fas fa-user-circle'></i>
              </label>
              <input
                type='file'
                id='fileInput'
                style={{display: 'none'}}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <label>Username</label>
            <input
              type='text'
              placeholder={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Email</label>
            <input type='email' placeholder={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password</label>
            <input type='password' onChange={(e) => setPassword(e.target.value)} />
            <button className='settingSubmitBtn' type='submit'>
              Update
            </button>
          </form>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
