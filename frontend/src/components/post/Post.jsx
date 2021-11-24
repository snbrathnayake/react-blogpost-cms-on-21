import React from 'react';
import {Link} from 'react-router-dom';
import './post.css';

export default function Post({post}) {
  return (
    <div className='post'>
      <img className='postImage' src={post.image} alt={post.title} />
      <div className='postInfo'>
        <div className='postCategories'>
          {post.categories.map((category, index) => (
            <span className='postCat' key={index}>
              {category}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <hr />
        <span className='postDateTime'>{new Date(post.createdAt).toDateString()}</span>
      </div>

      <p className='postDesc'>{post.desciption}</p>
    </div>
  );
}
