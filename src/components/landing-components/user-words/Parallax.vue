<template lang="pug">
  .parallax
    .new-parallax
      h2 {{ title }}
      p {{ subtitle }}
      .parallax__row
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