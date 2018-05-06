<template lang="pug">
  section.details
    .container
      header
        h2 {{ title }}
        p {{ description }}
      .details__block-line
        details-info-block(:selectedComponent="'EarthIcon'")
        details-info-block(:selectedComponent="'EarthIcon'")
        details-info-block(:selectedComponent="'EarthIcon'")

        details-info-block(:selectedComponent="'EarthIcon'")
        details-info-block(:selectedComponent="'EarthIcon'")
        details-info-block(:selectedComponent="'EarthIcon'")
</template>

<script>
  import DetailsInfoBlock from './../components/landing-components/details/DetailsInfoBlock.vue';

  export default {
    name: "Details",
    components: {
      DetailsInfoBlock
    },
    data() {
      return {
        title: 'Our Services',
        description: 'What we offer to our Customers. Brief list.'
      };
    }
  }
</script>
