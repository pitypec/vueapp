<template>
  <div>
    <Header></Header>
    <Chart></Chart>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Chart from "./Chart.vue";
import axios from "axios";
import datas from "../firebase/data";

const http = axios.create();
export default {
  name: "HelloWorld",
  components: {
    Header,
    Chart
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    async loadUser() {
      datas.map(data => {
        http
          .post("https://vueapp-90cf0.firebaseio.com/patients.json", { data })
          .then(data => {
            console.log(data);
          });
      });
    }
  }
  // mounted() {
  //   datas.map(data => {
  //     http
  //       .post("https://vueapp-90cf0.firebaseio.com/patients.json", { data })
  //       .then(data => {
  //         console.log(data);
  //       });
  //   });
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
