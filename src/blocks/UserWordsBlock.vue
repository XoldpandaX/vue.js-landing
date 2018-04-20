<template lang="pug">
  .section
    parallax
    .d
</template>

<script>
  import Parallax from './../components/landing-components/user-words/Parallax';

  export default {
    name: "UserWordsBlock",
    components: {
      Parallax
    }
  }
</script>

<style scoped>
  .d {
    height: 1000px;
  }
</style>