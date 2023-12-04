import { createStore } from 'vuex';
import { getUser, login, register, logout } from '@/api/user.js';
import { getToken, setToken, removeToken, removeJwtToken } from '@/utils/auth';

export default createStore({
  state: {
    userInfo: {},
    token: getToken() || '',
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.userInfo = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    clearStore(state) {
      state.userInfo = {};
      state.token = '';
    },
  },
  actions: {
    // 登录
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then((res) => {
            if (res?.token) {
              setToken(res.token);
              commit('setToken', res.token);
              resolve();
            } else {
              reject(new Error('login fail'));
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 注册
    signUp({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        register(userInfo)
          .then((res) => {
            if (res?.key) {
              setToken(res.key);
              commit('setToken', res.key);
              resolve();
            } else {
              reject(new Error('sign up fail'));
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 获取当前用户信息
    getUserInfo({ commit }) {
      return getUser().then((res) => {
        commit('setUser', res);
      });
    },

    // 退出系统
    logOut({ commit }) {
      return new Promise((resolve, reject) => {
        logout()
          .then((res) => {
            removeToken();
            removeJwtToken();
            commit('clearStore');
            resolve(res);
          })
          .catch((error) => {
            removeToken();
            removeJwtToken();
            commit('clearStore');
            reject(error);
          });
      });
    },
  },
  modules: {},
});
