import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.maxRetryCount = 2;
axios.defaults.delay = 1000;

axios.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token');
  if (token) {
    config.headers['x-access-token'] = token;
  }

  return config;
})