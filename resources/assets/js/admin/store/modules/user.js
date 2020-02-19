import userServices from '../../services/userServices';

const state = {
  user: {},
  token: '',
  isLogin: false,
};

const getters = {
  getUser: state => state.user,
  getIsLogin: state => state.isLogin,
};

const actions = {
  login(context, obj) {
    userServices.login(obj);
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
};

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
};