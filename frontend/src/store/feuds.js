import FeudsApi from "../api/FeudsApi";

const state = {
  feuds: [],
};

const actions = {
  'INDEX' (context, options = {}) {
    return new FeudsApi()
      .index(options)
  },

  'CREATE' (context, options = {}) {
    return new FeudsApi()
      .create(options)
   }
};

const getters = {}

export default { namespaced: true, state, actions, getters }

