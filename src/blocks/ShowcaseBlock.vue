<template lang="pug">
  section.showcase(:style="{background: `url(${background})`}")
    .container
      .showcase__inner
        presentation-header(:title="title", :subtitle="subtitle")
</template>

<script>
  import { mapGetters } from 'vuex';
  import PresentationHeader from './../components/landing-components/showcase/PresentationHeader.vue';

  export default {
    name: 'showcase-block',

    components: {
      PresentationHeader
    },

    computed: {
      ...mapGetters('showcase', ['background', 'title', 'subtitle'])
    }
  }
</script>
