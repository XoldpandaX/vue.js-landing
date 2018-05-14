import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
import * as stateConstantData from './const.js';

const {background, blockTitle, blockSubtitle} = stateConstantData.blockData;

const state = {
  block: {
    background: background,
    blockTitle: blockTitle,
    blockSubtitle: blockSubtitle
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}