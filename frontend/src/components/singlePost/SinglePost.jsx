import {Context} from 'context/Context';
import {deletePost, getPostById, updatePost} from 'http/api';
import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import {Link} from 'react-router-dom';
import './single-post.css';

export default function SinglePost() {
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  const {user} = useContext(Context);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPostById(postId);
      setPost(res.data);
      setModifiyFeilds(res.data);
    };
    fetchPost();
  }, [postId]);

  const setModifiyFeilds = (data) => {
    setTitle(data.title);
    setDesc(data.desciption);
  };

  const handleUpdate = async () => {
    const updatedPayload = {
      username: user.username,
      title: title,
      desciption: desc,
      categories: [],
    };
    try {
      await updatePost(post._id, updatedPayload);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(postId);
      window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className='singlePostImage' src={post.image && post.image} alt={post.title} />
        {updateMode ? (
          <input
            type='text'
            value={title}
            className='singlePostTitleInput'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <React.Fragment>
            <h1 className='singlePostTitle'>{post.title}</h1>
            {post.username === user?.username && (
              <div className='singlePostEditor'>
                <i
                  className='singlePostEditIcon far fa-edit'
                  onClick={(e) => setUpdateMode(true)}
                ></i>
                <i className='singlePostEditIcon fas fa-trash-alt' onClick={handleDelete}></i>
              </div>
            )}
          </React.Fragment>
        )}

        <div className='singlePostInfo'>
          <span className='postAuthor'>
            <i className='fas fa-feather-alt'></i>Author{' | '}
            <Link to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='postDateTimer'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <>
            <textarea
              type='text'
              className='singlePostDescInput'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <button className='singlePostUpdateBtn' onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <p className='singlePostDesc'>{post.desciption}</p>
        )}
      </div>
    </div>
  );
}
