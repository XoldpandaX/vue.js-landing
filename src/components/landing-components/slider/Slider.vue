<template lang="pug">
  .slider
    .slider__inner
      .slider__slide
        .slider__media
        .slider__text-info
          h2 {{ sliderContent[0].text.topText }}
          h1 {{ sliderContent[0].text.middleText }}
          h5 {{ sliderContent[0].text.bottomText }}
</template>

<script>
  import {sliderContent} from "./slider-content.js";

  export default {
    name: "slider",
    data() {
      return {
        sliderContent: sliderContent
      }
    }
  }
</script>