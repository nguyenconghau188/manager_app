import axios from 'axios';
import config from '../constants/config';

const userServices = {
  login(obj) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${config.baseUrl}${config.user.loginUrl}`,
        data: obj,
        method: 'POST',
      }).then(res => {
        const token = res.data.token;
        const user = res.data.user;
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        axios.defaults.headers.common['Authorization'] = token;
        
        resolve(res);
      }).catch(err => {
        localStorage.removeItem('token');

        reject(err);
      });
    })
  },
}