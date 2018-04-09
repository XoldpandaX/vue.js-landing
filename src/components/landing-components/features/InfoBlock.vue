<template lang="pug">
  .info-block(:style="{'background-color' : `${background}`}")
    .info-block__icon
      component(:is="selectedComponent")
    .info-block__title
      h5 Material Design
    .info-block__text
      |is a design language that combines the classic principles of successful design
      |along with innovation and technology.
</template>

<script>
  import StarIcon from './../../icons/StarIcon';
  import MarkerIcon from './../../icons/MarkerIcon';
  import EyeIcon from './../../icons/EyeIcon';
  import CogIcon from './../../icons/CogIcon';

  export default {
    name: "block",
    components: {
      StarIcon, MarkerIcon, EyeIcon, CogIcon
    },
    props: {
      selectedComponent: {
        type: String
      },
      background: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>