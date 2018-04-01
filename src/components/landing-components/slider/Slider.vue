<template lang="pug">
  .slider
    .slider__inner
      .slider__slide(:style="{'background-color': `${currentSliderContent.color}`}")
        .slider__media(:style="{'background-image': `url(${currentSliderContent.image})`}")
          transition(name="fade")
            .slider__info(v-if="!animate")
              h2 {{ currentSliderContent.text.topText }}
              h1 {{ currentSliderContent.text.middleText }}
              h5 {{ currentSliderContent.text.bottomText }}
              button.btn.btn--primed.btn--primary.btn--uppercase.btn--big {{ currentSliderContent.buttonText }}
      indicators(:sliderContent="sliderContent",
                 @slideWasChanged="currentSliderContent = sliderContent[$event], animate = true")
</template>

<script>
  import {sliderContent} from './slider-content.js';
  import Indicators from './Indicators';

  export default {
    name: "slider",
    data() {
      return {
        sliderContent: sliderContent,
        currentSliderContent: null,
        animate: false
      }
    },
    watch: {
      animate() {
        setTimeout(() => this.animate = false, 200);
      }
    },
    created() {
        const random = Math.floor(Math.random() * this.sliderContent.length);
        this.currentSliderContent = sliderContent[random];
    },
    components: {
      Indicators
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1.8s;
  }
</style>