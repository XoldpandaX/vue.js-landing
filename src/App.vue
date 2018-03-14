<template lang="pug">
  #app
    header-block
    slider-block
</template>

<script>
  import HeaderBlock from './blocks/HeaderBlock';
  import SliderBlock from './blocks/SliderBlock';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('ui', ['closeAllMenu'])
    },
    components: {
      HeaderBlock,
      SliderBlock
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/index.scss";
</style>
