<template lang="pug">
  .slider
    .slider__inner(:style="{'opacity': sliderOpacity}")
      .slider__slide(:style="{'background-color': `${currentSliderContent.color}`}")
        .slider__media(:style="{'background-image': `url(${currentSliderContent.image})`}")
          transition(name="bounce")
            .slider__info(v-if="!animate")
              h2 {{ currentSliderContent.text.topText }}
              h1 {{ currentSliderContent.text.middleText }}
              h5 {{ currentSliderContent.text.bottomText }}
              button.btn.btn--primed.btn--primary.btn--uppercase.btn--big {{ currentSliderContent.buttonText }}
      indicators(ref="indicatorBtn",
                 :sliderContent="sliderContent",
                 @slideWasChanged="sliderWasChanged($event), animate = true, opacityAnimate = true")
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
        animate: false,
        opacityAnimate: false,
        opacity: 1 // start opacity
      }
    },
    computed: {
      sliderOpacity() {
        return this.opacity = this.opacityAnimate ? 0.8 : 1;
      }
    },
    watch: {
      animate() {
        setTimeout(() => this.animate = false, 500);
      },
      opacityAnimate() {
        setTimeout(() => this.opacityAnimate = false, 250);
      }
    },
    methods: {
      sliderWasChanged(event) {
        this.currentSliderContent = sliderContent[event];
      }
    },
    created() {
      this.currentSliderContent = sliderContent[0];
    },
    components: {
      Indicators
    }
  }
</script>

<style>
  .bounce-enter {
    opacity: 0;
  }

  .bounce-enter-active {
    animation: bounce-in .5s;
    transition: opacity .5s;
  }

  .bounce-leave-active {
    animation: bounce-out .6s reverse ease-in;
    transition: opacity .5s;
  }

  .bounce-leave-to {
    opacity: 0;
  }

  @keyframes bounce-out {
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

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

</style>