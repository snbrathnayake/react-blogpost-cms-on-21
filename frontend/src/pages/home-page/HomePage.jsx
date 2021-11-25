import React, {useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import {getPosts} from 'http/api';
import {useLocation} from 'react-router';
import './home-page.css';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const {search: queryString = null} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts(queryString);
      setPosts(res.data);
    };
    fetchPosts();
  }, [queryString]);

  return (
    <React.Fragment>
      <Header />
      <div className='pageLayout'>
        <div className='homePage'>
          {posts.length === 0 ? (
            <div className='noPostFound'>NO POST FOUND</div>
          ) : (
            <Posts posts={posts} />
          )}
          <Sidebar />
        </div>
      </div>
    </React.Fragment>
  );
}
