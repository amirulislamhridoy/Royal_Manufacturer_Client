import axios from 'axios'
// import { signOut } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';
// import auth from '../firebase_init';
// import { toast } from "react-toastify";

const privateAxios = axios.create({})
// Add a request interceptor
privateAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(!config.headers.authorization){
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
privateAxios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  export default privateAxios