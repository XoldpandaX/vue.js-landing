<template lang="pug">
  .info-block(:style="{'background-color' : `${background}`}")
    .info-block__icon
      component(:is="selectedComponent")
    .info-block__title
      h5 {{ title }}
    .info-block__text {{ description }}
</template>

<script>
  import StarIcon from './../../icons/StarIcon';
  import MarkerIcon from './../../icons/MarkerIcon';
  import EyeIcon from './../../icons/EyeIcon';
  import CogIcon from './../../icons/CogIcon';
  import RadarIcon from './../../icons/RadarIcon';
  import EarthIcon from './../../icons/EarthIcon';
  import ChatIcon from './../../icons/ChatIcon';

  export default {
    name: "block",
    components: {
      StarIcon, MarkerIcon, EyeIcon, CogIcon, RadarIcon, EarthIcon, ChatIcon
    },
    props: {
      selectedComponent: {
        type: String
      },
      background: {
        type: String
      },
      title: {
        type: String
      },
      description: {
        type: String
      }
    }
  }
</script>