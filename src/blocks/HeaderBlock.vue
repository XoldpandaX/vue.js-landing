<template>
  <div class="page-header">
    <div class="page-header__inner">
      <logo></logo>
      <navigation></navigation>
    </div>
  </div>
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
