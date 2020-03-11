const config = {
  publicPages: ['/login', '/register'],
  baseUrl: 'http://localhost:8000',
  user: {
    loginUrl: '/api/login',
    usersPaginationUrl: '/api/users?page=',
    userUrl: '/api/users/',
  }
};

export default config;