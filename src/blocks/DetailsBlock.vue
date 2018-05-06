<template lang="pug">
  section.details
    .container
      header
        h2 {{ title }}
        p {{ description }}
      .details__block-line
        details-info-block(v-for="content in blockContent",
                          :key="content.id"
                          :content="content")
</template>

<script>
  import { detailsContent } from "../components/landing-components/details/details-content.js";
  import DetailsInfoBlock from './../components/landing-components/details/DetailsInfoBlock.vue';

  export default {
    name: "Details",
    components: {
      DetailsInfoBlock
    },
    data() {
      return {
        title: 'Our Services',
        description: 'What we offer to our Customers. Brief list.',
        blockContent: {}
      };
    },
    created() {
      this.blockContent = detailsContent;
    }
  }
</script>
