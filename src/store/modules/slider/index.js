import { slidesData } from './const';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const state = {
  slides: slidesData
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
