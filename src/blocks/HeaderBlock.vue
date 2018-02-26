<template lang="pug">
  div.page-header
    div.page-header__inner
      logo
      navigation
</template>

<script>
  import Logo from './../components/header/Logo.vue';
  import Navigation from './../components/header/Navigation.vue';

  export default {
    components: {
      Logo,
      Navigation
    }
  }
</script>
