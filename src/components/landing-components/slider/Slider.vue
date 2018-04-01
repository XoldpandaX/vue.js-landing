<template lang="pug">
  .slider
    .slider__inner
      .slider__slide(:style="{'background-color': `${sliderContent.color}`}")
        .slider__media(:style="{'background-image': `url(${sliderContent.image})`}")
        .slider__info
          h2 {{ sliderContent.text.topText }}
          h1 {{ sliderContent.text.middleText }}
          h5 {{ sliderContent.text.bottomText }}
          button.btn.btn--primed.btn--primary.btn--uppercase.btn--big {{ sliderContent.buttonText }}
      indicators
</template>

<script>
  import {sliderContent} from './slider-content.js';
  import Indicators from './Indicators';

  export default {
    name: "slider",
    data() {
      return {
        sliderContent: sliderContent[0]
      }
    },
    methods: {

    },
    components: {
      Indicators
    }
  }
</script>