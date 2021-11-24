import React, {useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import {getPosts} from 'http/api';
import './home-page.css';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className='pageLayout'>
        <div className='homePage'>
          <Posts posts={posts}/>
          <Sidebar />
        </div>
      </div>
    </React.Fragment>
  );
}
