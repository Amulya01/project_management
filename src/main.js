import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
Vue.use(Vuetify);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
