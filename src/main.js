import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import { store } from "./store";
import firebase from "firebase";
import router from "./router";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
Vue.use(Vuetify);

Vue.config.productionTip = false;
const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
  new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
    created() {
      if (firebaseUser) {
        store.dispatch("autoSignIn", firebaseUser);
      }
    }
  });
  unsubscribe();
});
