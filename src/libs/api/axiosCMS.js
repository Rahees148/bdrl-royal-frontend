import axios from 'axios';

const axiosCMS = axios.create();

axiosCMS.defaults.baseURL = process.env.STRAPI_API_URL;

axiosCMS.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

//All request will wait 4 seconds before timeout
axiosCMS.defaults.timeout = 4000;

axiosCMS.defaults.withCredentials = true;

export default axiosCMS; 