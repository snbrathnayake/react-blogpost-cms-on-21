import axios from 'axios';

const baseURL = 'http://localhost:8082/api';

const instance = axios.create({baseURL: `${baseURL}`});

export default instance;
