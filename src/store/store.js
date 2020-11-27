import vue from "vue";
import vuex from "vuex";
import axios from "axios";

vue.use(vuex);

// import state from "./state";
// import * as mutations from "./mutations";
// import * as actions from "./actions";
export const store = new vuex.Store({
  state: {
    products: []
  },
  getters: {},
  mutations: {},
  actions: {
    getPatients: ({ commit }) => {
      axios
        .get("https://vueapp-90cf0.firebaseio.com/patients")
        .then(response => {
          console.log(response.data);
          commit("SET_PATIENTs", response.data);
        })
        .catch(err => console.log(err));
    }
  }
});
