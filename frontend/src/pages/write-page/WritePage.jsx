import React from 'react';
import './write-page.css';

export default function WritePage() {
  return (
    <div className='pageLayout'>
      <div className='write'>
        <img
          src='https://images.pexels.com/photos/669733/pexels-photo-669733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt=''
          className='writeImage'
        />
        <form className='writeForm' onSubmit={() => {}}>
          <div className='formGroup'>
            <label htmlFor='fileInput'>
              <i className='writeIcon fas fa-plus'></i>
            </label>
            <input type='file' id='fileInput' style={{display: 'none'}} />
            <input type='text' placeholder='Title' className='writeInputbox' autoFocus={true} />
          </div>
          <div className='formGroup'>
            <textarea
              placeholder='Tell your story...'
              type='text'
              className='writeInputbox writeText'
            ></textarea>
          </div>
          <button className='writeSubmitBtn'>Publish</button>
        </form>
      </div>
    </div>
  );
}
