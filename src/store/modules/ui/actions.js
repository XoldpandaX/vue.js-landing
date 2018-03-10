export default {
  toggleMenu({ commit }, index) {
    commit('toggleMenu', index);
  },
  closeAllMenu({ commit }) {
    commit('closeAllMenu');
  }
}