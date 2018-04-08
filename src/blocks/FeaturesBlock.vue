<template lang="pug">
  section.feautures
    .features__row
      block-component
</template>

<script>
  import BlockComponent from './../components/landing-components/features/Block';

  export default {
    name: "features-block",
    components: {
      BlockComponent
    }
  }
</script>