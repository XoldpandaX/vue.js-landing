<template>
  <div id="app">
    <header-page></header-page>
  </div>
</template>

<script>
  import HeaderPage from './blocks/HeaderBlock.vue';

  export default {
    components: {
      HeaderPage
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/index.scss";
</style>
