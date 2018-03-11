import { userNavigation } from './const';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  navigation: userNavigation.default,
  mobileMenu: false
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};