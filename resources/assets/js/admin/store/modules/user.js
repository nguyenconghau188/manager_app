import userServices from '../../services/userServices';

const state = {
  user: {},
  token: '',
  isLogin: false,
  loginIssue: '',
};

const getters = {
  getUser: state => state.user,
  getIsLogin: state => state.isLogin,
  getLoginIssue: state => state.loginIssue,
};

const actions = {
  login(context, obj) {
    userServices.login(obj)
      .then(res => {
        context.commit('setUser', res.data.data.user);
        context.commit('setIsLogin', true);
      },
      error => {
        window.location.reload();
      });
  },
  forceLogout() {
    userServices.forceLogout();
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