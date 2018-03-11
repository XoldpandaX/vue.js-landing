<template lang="pug">
  div.page-header
    div.page-header__inner
      static-hamburger-icon
      logo
      navigation(v-if="!mobileMenu")
      mobile-navigation
</template>

<script>
  import { mapGetters } from 'vuex';
  import Logo from './../components/header/Logo';
  import StaticHamburgerIcon from './../components/icons/StaticHamburgerIcon';
  import Navigation from './../components/header/Navigation';
  import MobileNavigation from './../components/header/MobileNavigation';

  export default {
    computed: {
      ...mapGetters('ui', ['mobileMenu'])
    },
    components: {
      Logo,
      StaticHamburgerIcon,
      Navigation,
      MobileNavigation
    }
  }
</script>
