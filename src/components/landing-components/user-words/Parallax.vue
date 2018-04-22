<template lang="pug">
  .parallax
    .new-parallax
      .new-parallax__content
        h2 {{ title }}
        p {{ subtitle }}
      .container
        .parallax__row
          recall(v-for="content in userWordsContent", :content="content")
      .btn.btn--primed.btn--important.btn--big.btn--round.btn--round-big.btn--shadow-hover
</template>

<script>
  import Recall from './Recall';
  import {userWordsContent} from './user-words-content.js';

  export default {
    name: "Parallax",
    components: {
      Recall
    },
    data() {
      return {
        userWordsContent: userWordsContent,
        title: 'Customer\'s Words',
        subtitle: 'What our Customers are telling about us'
      };
    }
  }
</script>