import userServices from '../../services/userServices';
import routes from '../../router/index';

const state = {
  user: {},
  users: [],
  pagination: {},
  current_page: 1,
  token: '',
  isLogin: false,
  loginIssue: '',
  loadingIssue: '',
};

const getters = {
  getToken: state => state.token,
  getUser: state => state.user,
  getUsers: state => state.users,
  getCurrentPage: state => state.current_page,
  getPagination: state => state.pagination,
  getIsLogin: state => state.isLogin,
  getLoginIssue: state => state.loginIssue,
  getLoadingIssue: state => state.loadingIssue,
};

const actions = {
  login(context, obj) {
    return userServices.login(obj)
      .then(
      res => {
        context.commit('setUser', res.data.data.user);
        context.commit('setIsLogin', true);
        context.commit('setLoginIssue', localStorage.getItem('loginIssue'));
        routes.push({ name: 'Dashboard' });
      },
      err => {
        context.commit('setIsLogin', false);
        context.commit('setLoginIssue', localStorage.getItem('loginIssue'));
      });
  },
  forceLogout(context) {
    return userServices.forceLogout()
      .then(() => {
        context.commit('setIsLogin', false);
        context.commit('setLoginIssue', '');
        context.commit('setToken', '');
        context.commit('setUser', {});
      });
  },
  removeLoginIssue(context) {
    localStorage.removeItem('loginIssue');
    context.commit('setLoginIssue', '');
  },
  getUsersPagination(context, page) {
    return userServices.getUsersPagination(page)
      .then(
        (res) => {
          context.commit('setPagination', res.data.data.pagination);
          context.commit('setUsers', res.data.data.data.data);
          context.commit('setCurrentPage', res.data.data.data.current_page);
          context.commit('setLoadingIssue', '');
        },
        (err) => {
          context.commit('setLoadingIssue', 'Can not loading. Please try again!');
        }
      );
  },
  getUserById(context, id) {
    return userServices.getUser(id)
      .then(
        (res) => {
          context.commit('setUser', res.data.data);
          context.commit('setLoadingIssue', '');
        },
        (err) => {
          console.log('error')
          context.commit('setUser', []);
          context.commit('setLoadingIssue', 'Can not loading. Please try again!');
        },
      )
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setUsers(state, users) {
    state.users = users;
  },
  setToken(state, token) {
    state.token = token;
  },
  setIsLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
  setLoginIssue(state, issue) {
    state.loginIssue = issue;
  },
  setPagination(state, pagination) {
    state.pagination = pagination;
  },
  setCurrentPage(state, page) {
    state.current_page = page;
  },
  setLoadingIssue(state, issue) {
    state.loadingIssue = issue;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};