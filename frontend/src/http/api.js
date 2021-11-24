import API from './axiosConfig';

export const createPosts = () => {
  // TODO
};

export const getPosts = () => {
  return API.get('/posts');
};

export const getPostById = (id) => {
  return API.get(`/posts/${id}`);
};