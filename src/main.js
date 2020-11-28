// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import { store } from "./store/store";
import "./firebase/init";
import { firestorePlugin } from "vuefire";
import axios from "axios";

// axios.defaults.baseURL = "https://vueapp-90cf0.firebaseio.com";

Vue.config.productionTip = false;

Vue.use(firestorePlugin);

/* eslint-disable no-new */
new Vue({
  store: store,
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
