<template lang="pug">
  .details-info-block
    .details-info-block__icon
      //earth-icon
      component(:is="selectedComponent")
    .details-info-block__text
      h5 {{ title }}
      p {{ descr }}
      button {{ buttonText }}
</template>

<script>
  import EarthIcon from './../../icons/EarthIcon';
  import RadarIcon from './../../icons/RadarIcon';
  import ChatIcon from './../../icons/ChatIcon';
  import ClockIcon from './../../icons/ClockIcon';
  import LockIcon from './../../icons/LockIcon';
  import ExchangeIcon from './../../icons/ExchangeIcon';
  import NextArrowIcon from './../../icons/NextArrowIcon';

  export default {
    name: "DetailsInfoBlock",
    components: {
      EarthIcon, RadarIcon, ChatIcon, ClockIcon,
      LockIcon, ExchangeIcon, NextArrowIcon
    },
    props: ['selectedComponent'],
    data() {
      return {
        title: 'Hi-end Design',
        descr: 'Curabitur eu nulla eget ligula laoreet auctor. Integer eu ultricies justo. Integer tortor nunc, tempor rutrum elementum vel, porttitor ac leo.',
        buttonText: 'Learn more'
      };
    }
  }
</script>

<style scoped>

</style>