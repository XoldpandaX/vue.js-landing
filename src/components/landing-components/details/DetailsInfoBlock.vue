<template lang="pug">
  .details-info-block
    .details-info-block__icon
      component(:is="content.icon")
    .details-info-block__text
      h5 {{ content.text.title }}
      p {{ content.text.description }}
      .details-info-block__button-line
        span
          next-arrow-icon
        a {{ content.text.btnText }}
</template>

<script>
  import NextArrowIcon from './../../icons/NextArrowIcon';

  import EarthIcon from './../../icons/EarthIcon';
  import RadarIcon from './../../icons/RadarIcon';
  import ChatIcon from './../../icons/ChatIcon';
  import ClockIcon from './../../icons/ClockIcon';
  import LockIcon from './../../icons/LockIcon';
  import ExchangeIcon from './../../icons/ExchangeIcon';

  export default {
    name: "DetailsInfoBlock",
    components: {
      EarthIcon, RadarIcon, ChatIcon, ClockIcon,
      LockIcon, ExchangeIcon, NextArrowIcon
    },
    props: {
      content: {
        type: Object
      }
    }
  }
</script>