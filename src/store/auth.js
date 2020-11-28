import axios from "axios";
import firebase from "../firebase/init";

const db = firebase.firestore();
export default {
  namespaced: true,
  state: {
    patients: []
  },
  getters: {
    patients() {
      return state.patients;
    }
  },
  mutations: {
    SET_PATIENTS(state, data) {
      state.patients = data;
    }
  },
  actions: {
    async getPatients({ dispatch }) {
      //   let patients = [];
      //   db.collection("patients")
      //     .get()
      //     .then(querySnapShot => {
      //       querySnapShot.foreach(doc => {
      //         patients.push({
      //           id: doc.id,
      //           fullName: doc.data().fullName,
      //           age: doc.data().age,
      //           bloodGroup: doc.data().blood - group
      //         });
      //         console.log(doc.id, "=>", doc.data());
      //       });
      //       dispatch("listPatients", patients);
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      let response = await axios.get("/patients");
      dispatch("listPatients", response.data);
      console.log(response.data);
    },
    listPatients({ commit }, data) {
      commit("SET_PATIENTS", data);
      console.log(data);
    }
  }
};
