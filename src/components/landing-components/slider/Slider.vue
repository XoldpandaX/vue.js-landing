<template lang="pug">
  .slider
    .slider__inner
      .slider__slide(:style="{'background-color': `${currentSliderContent.color}`}")
        .slider__media(:style="{'background-image': `url(${currentSliderContent.image})`}")
        .slider__info
          h2 {{ currentSliderContent.text.topText }}
          h1 {{ currentSliderContent.text.middleText }}
          h5 {{ currentSliderContent.text.bottomText }}
          button.btn.btn--primed.btn--primary.btn--uppercase.btn--big {{ currentSliderContent.buttonText }}
      indicators(:sliderContent="sliderContent",
                 @slideWasChanged="currentSliderContent = sliderContent[$event]")
</template>

<script>
  import {sliderContent} from './slider-content.js';
  import Indicators from './Indicators';

  export default {
    name: "slider",
    data() {
      return {
        sliderContent: sliderContent,
        currentSliderContent: null
      }
    },
    methods: {
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