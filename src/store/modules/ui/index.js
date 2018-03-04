import { userNavigation } from './const';
import getters from './getters';

const state = {
  navigation: userNavigation.default
};

export default {
  namespaced: true,
  state,
  getters
};