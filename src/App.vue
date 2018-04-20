<template lang="pug">
  #app
    header-block
    slider-block
    features-block
    about-block
    user-words-block
</template>

<script>
  import HeaderBlock from './blocks/HeaderBlock';
  import SliderBlock from './blocks/SliderBlock';
  import FeaturesBlock from './blocks/FeaturesBlock';
  import AboutBlock from './blocks/AboutBlock';
  import UserWordsBlock from './blocks/UserWordsBlock';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('ui', ['closeAllMenu'])
    },
    components: {
      HeaderBlock, SliderBlock, FeaturesBlock,
      AboutBlock, UserWordsBlock
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/index.scss";
</style>
