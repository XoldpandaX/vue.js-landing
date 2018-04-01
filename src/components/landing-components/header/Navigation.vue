<template lang="pug">
  div.navigation(v-click-outside="closeAllMenu", :class="toggleMobileMenu")
    button.navigation__close-btn(@click="closeMobileMenu(delay), crossAnimation=true")
      cross-icon(:class="classCrossAnimation")
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
  import CrossIcon from './../../icons/CrossIcon';

  export default {
    data() {
      return {
        delay: 300, // time after menu dissapired
        crossAnimation: false // when component created animation disabled
      };
    },
    computed: {
      ...mapGetters('ui', {navigationElements: 'navigation', mobileMenu: 'mobileMenu'}),

      toggleMobileMenu() {
        return this.mobileMenu ? 'navigation--mobile-active' : 'navigation--mobile-inactive';
      },
      classCrossAnimation() {
        return this.crossAnimation ? 'transition rotate' : '';
      }
    },
    watch: {
      crossAnimation() { this.stopAnimation(); } // if crossAnimation change, activate stopAnimation1
    },
    methods: {
      ...mapActions('ui', ['closeAllMenu', 'closeMobileMenu']),

      stopAnimation() { setTimeout(() => this.crossAnimation = false, 200); }
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

<style lang="scss" scoped>
  .transition { transition: transform .2s linear; }

  .rotate { transform: rotate(360deg); }
</style>