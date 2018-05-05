<template lang="pug">
  section.support
    .container
      .support__inner
        .support__description
          h2 Set your Support
          p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          switcher
        .support__media dfsdf

</template>

<script>
  import Switcher from './../components/landing-components/support-block/Switcher.vue';

  export default {
    name: "SupportBlock",
    components: {
      Switcher
    }
  }
</script>