import vue from "vue";
import vuex from "vuex";
import auth from "./auth";

vue.use(vuex);

export const store = new vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth
  }
});
