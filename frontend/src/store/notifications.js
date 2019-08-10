const state = {
  userMessage: '',
  userMessageType: '',
};

const actions = {
  'CLEAR' (context) {
    context.state.userMessage = '';
    context.state.userMessageType = '';
  },
  'ERROR' (context, userMessage) {
    context.state.userMessage = userMessage;
    context.state.userMessageType = 'error';
  },
};

const getters = {}

export default { namespaced: true, state, actions, getters }

