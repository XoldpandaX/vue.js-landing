<template lang="pug">
  section.about
    .container
      .about__row
        info-block(v-for="content in blockContent", :key="content.id",
                  :selectedComponent="content.icon", :title="content.text.title",
                  :description="content.text.description")
      .about__row.about__row--centered
        button.btn.btn--primed.btn--important.btn--big {{ buttonText }}
</template>

<script>
  import InfoBlock from '../components/landing-components/features/InfoBlock';
  import { aboutContent } from "../components/landing-components/about/about-content.js";

  export default {
    name: "AboutBlock",
    components: {
      InfoBlock
    },
    data() {
      return {
        blockContent: aboutContent,
        buttonText: 'Buy The Materializer Template'
      };
    }
  }
</script>