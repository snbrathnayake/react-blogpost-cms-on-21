import API from './axiosConfig';


/**
 * ------------------------------------------------------
 *  POST Func
 * ------------------------------------------------------
 */

export const createPosts = (data) => {
  return API.post(`/posts`,data);
};

export const uploadPostImage = (data) => {
  return API.post('/upload',data);
}

export const getPosts = (query) => {
  return API.get(`/posts${query}`);
};

export const getPostById = (id) => {
  return API.get(`/posts/${id}`);
};


export const updatePost = (id,data) => {
  return API.put(`/posts/${id}`,data);
};

export const deletePost = (id) => {
  return API.delete(`/posts/${id}`);
};

export const getCategories = () => {
  return API.get('/categories');
};

/**
 * ------------------------------------------------------
 *  Authentication & User Func
 * ------------------------------------------------------
 */

 export const singup = (data) => {
  return API.post('/auth/register',data);
};

export const singin = (data) => {
  return API.post('/auth/login',data);
};

export const profileUpdate = (data) => {
  return API.put(`/users/${data.userId}`,data);
};