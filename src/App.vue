<template lang="pug">
  #app
    header-block
    slider-block
    features-block
    about-block
</template>

<script>
  import HeaderBlock from './blocks/HeaderBlock';
  import SliderBlock from './blocks/SliderBlock';
  import FeaturesBlock from './blocks/FeaturesBlock';
  import AboutBlock from './blocks/AboutBlock';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('ui', ['closeAllMenu'])
    },
    components: {
      HeaderBlock,
      SliderBlock,
      FeaturesBlock,
      AboutBlock
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/index.scss";
</style>
