<template lang="pug">
  section.support
    .container
      .support__inner
        .support__description
          h2 Set your Support
          p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
          .support__action-section
            switcher(:title="'Extra level'", :description="switcherDescription")
            switcher(:title="'Premium feature'", :description="switcherDescription")
          button.btn.btn--primed.btn--deep-yellow.btn--uppercase.btn--big get help
        .support__media
          iframe(width="560", height="315",
                src="https://www.youtube.com/embed/YYHbDMvqaWM",
                frameborder="0", allow="autoplay; encrypted-media" allowfullscreen)
</template>

<script>
  import Switcher from './../components/landing-components/support-block/Switcher.vue';

  export default {
    name: "SupportBlock",
    components: {
      Switcher
    },
    data() {
      return {
        switcherDescription: 'Curabitur eu nulla eget ligula laoreet auctor'
      };
    }
  }
</script>