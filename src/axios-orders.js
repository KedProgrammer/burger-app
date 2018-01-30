import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burguer-app.firebaseio.com/'

});


export default instance;
