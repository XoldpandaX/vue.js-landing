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
    data() {
      return {
        currentSlide: '' // current slide number
      };
    },
    methods: {
      changeSlide(slideNumber) {
        if (this.currentSlide !== slideNumber) {
          this.$emit('slideWasChanged', slideNumber);
          this.currentSlide = slideNumber;
        }
      }
    }
  }
</script>