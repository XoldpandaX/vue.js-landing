export default {
  toggleMenu(state, index) {
    for (let i = 0; i < state.navigation.length; i++) {
      if (state.navigation[i].active !== state.navigation[index].active) {
        state.navigation[i].active = false;
      }
      
      if (state.navigation[i].dropdownMenu && state.navigation[i].isShow !== state.navigation[index].isShow) {
        state.navigation[i].isShow = false;
      }
    }
    
    if(state.navigation[index].dropdownMenu) {
      state.navigation[index].isShow = !state.navigation[index].isShow;
      state.navigation[index].active = !state.navigation[index].active;
    }
  },
  closeAllMenu(state) {
    for (let i = 0; i < state.navigation.length; i++) {
      if(state.navigation[i].dropdownMenu) {
        state.navigation[i].isShow = false;
        state.navigation[i].active = false;
      }
    }
  },
  toggleMobileMenu(state) {
    state.mobileMenu = !state.mobileMenu;
  }
}