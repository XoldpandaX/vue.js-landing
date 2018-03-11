<template lang="pug">
  .mobile-menu(:class="toggleMenu")
    button.mobile-menu__close-btn(@click="closeMobileMenu")
      cross-icon
    navigation(v-if="mobileMenu")
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Navigation from './Navigation'
  import CrossIcon from './../icons/CrossIcon';

  export default {
    computed: {
      ...mapGetters('ui', ['mobileMenu']),

      toggleMenu() {
        return this.mobileMenu ? 'mobile-menu--active' : 'mobile-menu--inactive';
      }
    },
    methods: {
      ...mapActions('ui', ['closeMobileMenu'])
    },
    components: {
      CrossIcon,
      Navigation
    }
  }
</script>