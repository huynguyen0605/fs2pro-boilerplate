import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://huy0605-sails-demo.herokuapp.com/',
    withCredentials: true
});

export default instance;