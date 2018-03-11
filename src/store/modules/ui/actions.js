export default {
  toggleMenu({ commit }, index) {
    commit('toggleMenu', index);
  },
  closeAllMenu({ commit }) {
    commit('closeAllMenu');
  },
  showMobileMenu({ commit }) {
    commit('showMobileMenu');
  },
  closeMobileMenu({ commit }) {
    commit('closeMobileMenu');
  }
}