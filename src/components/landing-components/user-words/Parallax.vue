<template lang="pug">
  .parallax
    .new-parallax
      .new-parallax__content
        h2 {{ title }}
        p {{ subtitle }}
      .container
        .parallax__row
          recall
          recall
</template>

<script>
  import Recall from './Recall';

  export default {
    name: "Parallax",
    components: {
      Recall
    },
    data() {
      return {
        title: 'Customer\'s Words',
        subtitle: 'What our Customers are telling about us'
      };
    }
  }
</script>