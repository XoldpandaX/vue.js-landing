<template lang="pug">
  ul.indicators
    li(v-for="(sliderContent, index) in sliderContent.length",
       @click="changeSlide(index)") {{ index }}
</template>

<script>
  export default {
    name: "indicators",
    props: {
      sliderContent: { // number of indicators depends on sliderContent length
        type: Array,
        required: true
      }
    },
    methods: {
      changeSlide(slideNumber) {
        this.$emit('slideWasChanged', slideNumber);
      }
    }
  }
</script>