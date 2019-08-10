import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './fontawesome';
import 'bootstrap';
import '@scss/application.scss';
import 'bootstrap/scss/bootstrap.scss';
import '@components/_globals'
import '@layouts/_globals'
import fetchable from "@mixins/fetchable";

Vue.config.productionTip = false;
Vue.mixin(fetchable);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
