<template lang="pug">
  #app
    header-block
    slider-block
    features-block
    about-block
    user-words-block
    support-block
    details-block
</template>

<script>
  import HeaderBlock from './blocks/HeaderBlock';
  import SliderBlock from './blocks/SliderBlock';
  import FeaturesBlock from './blocks/FeaturesBlock';
  import AboutBlock from './blocks/AboutBlock';
  import UserWordsBlock from './blocks/UserWordsBlock';
  import SupportBlock from './blocks/SupportBlock';
  import DetailsBlock from './blocks/DetailsBlock.vue';

  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('ui', ['closeAllMenu'])
    },
    components: {
      HeaderBlock, SliderBlock, FeaturesBlock,
      AboutBlock, UserWordsBlock, SupportBlock,
      DetailsBlock
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/index.scss";
</style>
