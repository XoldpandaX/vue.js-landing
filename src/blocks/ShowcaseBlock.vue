<template lang="pug">
  section.showcase(:style="{background: `url(${background})`}")
    .container
      .showcase__inner
        h1 {{ title }}
        p {{ subtitle }}
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'showcase-block',

    computed: {
      ...mapGetters('showcase', ['background', 'title', 'subtitle'])
    }
  }
</script>
