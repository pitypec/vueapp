import axios from "axios";

export default {
  getPatients: ({ commit }) => {
    axios
      .get("http://localhost:8080/patients")
      .then(response => {
        console.log(response.data);
        commit("SET_PATIENTs", response.data);
      })
      .catch(err => console.log(err));
  }
};
