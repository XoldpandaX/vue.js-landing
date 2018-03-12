<template lang="pug">
  div.navigation(v-click-outside="closeAllMenu", :class="toggleMobileMenu")
    button.navigation__close-btn(@click="closeMobileMenu(delay)")
      cross-icon
    ul
      navigation-element(v-for="(navigationElement, index) in navigationElements",
                          :key="navigationElement.id",
                          :index="index",
                          :navigationElement="navigationElement",
                          :menu="navigationElement.dropdownMenu")
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import ClickOutside from 'vue-click-outside';
  import NavigationElement from './NavigationElement.vue';
  import CrossIcon from './../icons/CrossIcon';

  export default {
    data() {
      return {
        delay: 150 // time after menu dissapire
      };
    },
    computed: {
      ...mapGetters('ui', {navigationElements: 'navigation', mobileMenu: 'mobileMenu'}),

      toggleMobileMenu() {
        return this.mobileMenu ? 'navigation--mobile-active' : 'navigation--mobile-inactive';
      }
    },
    methods: {
      ...mapActions('ui', ['closeAllMenu', 'closeMobileMenu']),
    },
    components: {
      NavigationElement,
      CrossIcon
    },
    directives: {
      ClickOutside
    }
  }
</script>