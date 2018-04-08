<template lang="pug">
  section.feautures
    .features__row
      info-block(v-for="i in 4")
</template>

<script>
  import InfoBlock from '../components/landing-components/features/InfoBlock';

  export default {
    name: "features-block",
    components: {
      InfoBlock
    }
  }
</script>