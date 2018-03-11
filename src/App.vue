<template lang="pug">
  #app
    header-block
</template>

<script>
  import HeaderBlock from './blocks/HeaderBlock';
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('ui', ['closeAllMenu'])
    },
    components: {
      HeaderBlock
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/index.scss";
</style>
