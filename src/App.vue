<template lang="pug">
  #app
    .main-wrapper(@click="")
      header-block
</template>

<script>
  import HeaderBlock from './blocks/HeaderBlock.vue';

  export default {
    methods: {

    },
    components: {
      HeaderBlock
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/index.scss";
</style>
