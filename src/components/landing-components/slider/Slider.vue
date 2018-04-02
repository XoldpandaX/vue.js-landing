<template lang="pug">
  .slider
    .slider__inner(class="blinkAnimation")
      .slider__slide(:style="{'background-color': `${currentSliderContent.color}`}")
        .slider__media(:style="{'background-image': `url(${currentSliderContent.image})`}")
          transition(name="bounce")
            .slider__info(v-if="!animate")
              h2 {{ currentSliderContent.text.topText }}
              h1 {{ currentSliderContent.text.middleText }}
              h5 {{ currentSliderContent.text.bottomText }}
              button.btn.btn--primed.btn--primary.btn--uppercase.btn--big {{ currentSliderContent.buttonText }}
      indicators(:sliderContent="sliderContent",
                 @slideWasChanged="sliderWasChanged($event), animate = true")
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
        setTimeout(() => this.animate = false, 400);
      }
    },
    methods: {
      sliderWasChanged(event) {
        this.currentSliderContent = sliderContent[event];
      }
    },
    created() {
      this.animate = true;
      const random = Math.floor(Math.random() * this.sliderContent.length);
      this.currentSliderContent = sliderContent[random];
    },
    components: {
      Indicators
    }
  }
</script>

<style>
  /*.fade-enter {*/
    /*opacity: 0;*/
  /*}*/

  /*.fade-enter-active {*/
    /*transition: opacity .8s;*/
  /*}*/

  /*.fade-leave-active {*/
    /*transition: opacity .8s;*/
  /*}*/

  /*.fade-leave-to {*/
    /*opacity: 0;*/
  /*}*/

  .bounce-enter {
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .3s ease-out;
    transition: opacity .4s;
  }

  .bounce-leave-active {
    animation: bounce-in .3s reverse ease-in;
    transition: opacity .4s;
  }

  .bounce-leave-to {
    opacity: 0;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }

</style>