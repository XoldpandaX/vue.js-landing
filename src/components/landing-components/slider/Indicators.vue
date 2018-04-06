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
        period: 0, // a period of time(value depends on this.truePeriod) when slide will change
        truePeriod: 0, // immutable period of time
        idInterval: null
      };
    },
    watch: {
      period() {
        setTimeout(() => { this.period = this.truePeriod; }, 1000); //  this timeout needs when user click to change slides buttons
      }
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
      autoSlideChanger(refresh = false) {
        if (!refresh) {
          this.intervalID = setInterval(() => {
            if (this.currentSlide === (this.sliderContent.length - 1)) {
              this.currentSlide = 0;
              this.$emit('slideWasChanged', this.currentSlide);
            } else {
              this.currentSlide++;
              this.$emit('slideWasChanged', this.currentSlide);
            }
          }, this.period);
        } else {
          clearInterval(this.intervalID);
        }
      }
    },
    created() {
      this.truePeriod = 6000;
      this.period = this.truePeriod;
    },
    mounted() {
      this.autoSlideChanger();
    }
  }
</script>