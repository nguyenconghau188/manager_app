import userServices from '../../services/userServices';
import routes from '../../router/index';

const state = {
  user: {},
  token: '',
  isLogin: false,
  loginIssue: '',
};

const getters = {
  getToken: state => state.token,
  getUser: state => state.user,
  getIsLogin: state => state.isLogin,
  getLoginIssue: state => state.loginIssue,
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
      error => {
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
};

const mutations = {
  setUser(state, user) {
    state.user = user;
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
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};