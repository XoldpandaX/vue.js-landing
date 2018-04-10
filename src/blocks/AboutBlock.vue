<template lang="pug">
  section.about
    .container
      .about__row
        info-block( v-for="i in 3",:key="123",
        :selectedComponent="'StarIcon'", :background="'white'",
        :title="'Design'", :description="'Curabitur eu nulla eget ligula laoreet auctor. Integer eu ultricies justo. Integer tortor nunc, tempor rutrum elementum vel, porttitor ac leo.'")
</template>

<script>
  import InfoBlock from '../components/landing-components/features/InfoBlock';

  export default {
    name: "AboutBlock",
    components: {
      InfoBlock
    }
  }
</script>