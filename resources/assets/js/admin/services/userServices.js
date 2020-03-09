import axios from 'axios';
import config from '../constants/config';

const userServices = {
  forceLogout() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      resolve();
    });
  },
  // handleResponse(response) {
  //   console.log(response)
  //   return response.text().then((text) => {
  //     const data = text && JSON.parse(text);
  //     if (!response.ok) {
  //       if (response.status === 401) {
  //         this.forceLogout();
  //         window.location.reload();
  //       }
  //       const error = (data && data.error) || response.statusText;
  //       return Promise.reject(error);
  //     }
  //     return data;
  //   });
  // },
  login(obj) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${config.baseUrl}${config.user.loginUrl}`,
        data: obj,
        method: 'POST',
      })
      .then(res => {
        const token = res.data.data.token;
        const user = res.data.data.user;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.removeItem('loginIssue');
        axios.defaults.headers.common['Authorization'] = token;
        
        resolve(res);
      })
      .catch(err => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.setItem('loginIssue', 'Login fail!');

        reject(err);
      });
    });
  },
  getUsersPagination(page) {
    return new Promise((resolve, reject) => {
      axios({
        url: `${config.baseUrl}${config.user.usersPaginationUrl}${page}`,
        method: 'GET',
      })
      .then(
        res => {
          resolve(res);
      })
      .catch(error => {
        reject(error);
      });
    });
  },
}

export default userServices;