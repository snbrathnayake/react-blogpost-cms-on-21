import React, {useContext, useState} from 'react';
import {Context} from 'context/Context';
import './write-page.css';
import {createPosts, uploadPostImage} from 'http/api';

export default function WritePage() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newPost = {
      title: title,
      desciption: desc,
      username: user.username,
      categories: [],
    };

    try {
      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append('name', filename);
        data.append('file', file);

        newPost.image = `http://localhost:8082/backend/images/${filename}`;

        await uploadPostImage(data);
      }
    } catch (err) {
      console.log('Upload file error:' + err);
      return;
    }

    try {
      const res = await createPosts(newPost);
      window.location.replace('/post/' + res.data._id);
      console.log(newPost);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='pageLayout'>
      <div className='write'>
        {file && <img src={URL.createObjectURL(file)} alt='' className='writeImage' />}

        <form className='writeForm' onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label htmlFor='fileInput'>
              <i className='writeIcon fas fa-plus'></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{display: 'none'}}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type='text'
              placeholder='Title'
              className='writeInputbox'
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='formGroup'>
            <textarea
              placeholder='Tell your story...'
              type='text'
              className='writeInputbox writeText'
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className='writeSubmitBtn' type='submit'>
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
