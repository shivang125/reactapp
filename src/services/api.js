// api.js

import axios from 'axios';

const baseURL = 'http://localhost:2030'; // Replace with your backend URL

const api = axios.create({
  baseURL,
});

export default api;
