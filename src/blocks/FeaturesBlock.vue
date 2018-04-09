<template lang="pug">
  section.feautures
    .features__row
      info-block(v-for="name in ['StarIcon', 'MarkerIcon', 'eye-icon', 'CogIcon']", :selectedComponent="name")
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