import axios from 'axios';
import config from '../constants/config';

const rolesServices = {
  getAllRoles() {
    return new Promise((resolve, reject) => {
      axios({
        url: `${config.baseUrl}${config.roles.getRolesUrl}`,
        method: 'GET',
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
    });
  },
}

export default rolesServices;
