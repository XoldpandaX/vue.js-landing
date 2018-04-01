<template lang="pug">
  .slider
    .slider__inner
      .slider__slide(:style="{'background-color': `${sliderContent[0].color}`}")
        .slider__media(:style="{'background-image': `url(${sliderContent[0].image})`}")
        .slider__text-info
          h2 {{ sliderContent[0].text.topText }}
          h1 {{ sliderContent[0].text.middleText }}
          h5 {{ sliderContent[0].text.bottomText }}
          button.btn {{ sliderContent[0].buttonText }}
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