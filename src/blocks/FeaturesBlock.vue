<template lang="pug">
  section.feautures
    .features__row
      info-block(v-for="content in blockContent", :key="content.id",
                :selectedComponent="content.icon", :background="content.backgroundColor",
                :title="content.text.title", :description="content.text.description")
</template>

<script>
  import { featuresContent } from "../components/landing-components/features/features-content.js";
  import InfoBlock from '../components/landing-components/features/InfoBlock';

  export default {
    name: "features-block",
    components: {
      InfoBlock
    },
    data() {
      return {
        blockContent: featuresContent
      };
    }
  }
</script>