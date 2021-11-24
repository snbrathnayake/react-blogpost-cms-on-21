import {getPostById} from 'http/api';
import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router';
import './single-post.css';

export default function SinglePost() {
  const location = useLocation();
  const postId = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPostById(postId);
      console.log(res.data);
      setPost(res.data);
    };
    fetchPost();
  }, [postId]);

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img className='singlePostImage' src={post.image && post.image} alt={post.title} />
        <h1 className='singlePostTitle'>{post.title}</h1>
        <div className='singlePostEditor'>
          <i className='singlePostEditIcon far fa-edit'></i>
          <i className='singlePostEditIcon fas fa-trash-alt'></i>
        </div>
        <div className='singlePostInfo'>
          <span className='postAuthor'>
            <i className='fas fa-feather-alt'></i>Author{' | '}
            <b>{post.username}</b>
          </span>
          <span className='postDateTimer'>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>{post.desciption}</p>
      </div>
    </div>
  );
}