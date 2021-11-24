import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from '../../components/singlePost/SinglePost';
import './single-page.css';

export default function SinglePage() {
  return (
    <div className='pageLayout'>
      <div className='singlePage'>
        <SinglePost />
        <Sidebar />
      </div>
    </div>
  );
}
