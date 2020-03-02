const config = {
  publicPages: ['/login', '/register'],
  baseUrl: 'http://localhost:8000',
  user: {
    loginUrl: '/api/login',
    usersPaginationUrl: '/api/users',
  }
};

export default config;