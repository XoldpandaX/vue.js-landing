<template lang="pug">
  section.showcase
    .container
      header
        h2 {{ title }}
        p {{ description }}
      .showcase-block__card-wrapper
        showcase-card
</template>

<script>
  import ShowcaseCard from '../components/landing-components/showcase/ShowcaseCard.vue';

  export default {
    name: 'showcase-block',

    components: {
      ShowcaseCard
    },

    data() {
      return {
        title: 'Work in Progress',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
      };
    }
  }
</script>
