import Vue from "vue";
import Vuex from "vuex";
import feuds from '@store/feuds'
import notifications from '@store/notifications'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    feuds,
    notifications
  }
});
