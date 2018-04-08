<template lang="pug">
  .info-block
    .info-block__icon
      star-icon(fill="#876543", width="24px", height="24px")
    .info-block__title
      h5 Material Design
    .info-block__text
      |is a design language that combines the classic principles of successful design along with innovation and technology.
</template>

<script>
  import StarIcon from './../../icons/StarIcon';

  export default {
    name: "block",
    components: {
      StarIcon
    }
  }
</script>

<style scoped>

</style>