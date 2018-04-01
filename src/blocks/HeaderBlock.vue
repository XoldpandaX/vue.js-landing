<template lang="pug">
  div.page-header
    div.page-header__inner
      static-hamburger-icon
      logo
      navigation
</template>

<script>
  import Logo from './../components/landing-components/header/Logo';
  import StaticHamburgerIcon from './../components/icons/StaticHamburgerIcon';
  import Navigation from './../components/landing-components/header/Navigation';

  export default {
    components: {
      Logo,
      StaticHamburgerIcon,
      Navigation
    }
  }
</script>
