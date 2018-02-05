<template>
  <div id="app">
    <header-block></header-block>
  </div>
</template>

<script>
  import HeaderBlock from './blocks/HeaderBlock.vue';

  export default {
    components: {
      HeaderBlock
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/index.scss";
</style>
