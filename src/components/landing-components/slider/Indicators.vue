<template lang="pug">
  ul.indicators
    li.indicators__element(v-for="(sliderContent, index) in sliderContent.length",
                           :class="index == currentSlide ? 'indicators__element--active' : ''",
                           @click="changeSlide(index), autoSlideChanger(true)")
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
        currentSlide: '', // current slide number
        autoChangeTime: 5000, // a period of time(value depends on this.truePeriod) when slide will change
      };
    },
    methods: {
      changeSlide(slideNumber, isFirstLoad = false) {
        if (isFirstLoad) {
          this.currentSlide = slideNumber;
        }

        if (this.currentSlide !== +slideNumber) {
          this.$emit('slideWasChanged', slideNumber);
          this.currentSlide = slideNumber;
        }
      },
      autoChangeSlide(currentSlide, sliderLength) {
        if (currentSlide === (sliderLength - 1)) {
          currentSlide = 0;
          this.currentSlide = currentSlide;
          this.$emit('slideWasChanged', currentSlide);
        } else {
          currentSlide++;
          this.currentSlide = currentSlide;
          this.$emit('slideWasChanged', currentSlide);
        }
      },
      autoSlideChanger(refresh = false) {
        if (!refresh) {
          this.intervalID = setInterval(() => {
            this.autoChangeSlide(this.currentSlide, this.sliderContent.length);
          }, this.autoChangeTime);
        } else {
          clearInterval(this.intervalID);

          this.intervalID = setInterval(() => {
            this.autoChangeSlide(this.currentSlide, this.sliderContent.length);
          }, this.autoChangeTime);
        }
      }
    },
    mounted() { this.autoSlideChanger(this.currentSlide, this.currentSlide.length); }
  }
</script>