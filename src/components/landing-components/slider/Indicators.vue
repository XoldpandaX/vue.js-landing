<template lang="pug">
  ul.indicators
    li(v-for="(sliderContent, index) in sliderContent.length",
       @click="") {{ index }}
</template>

<script>
  export default {
    name: "indicators",
    props: {
      sliderContent: { // number of indicators depends on sliderContent length
        type: Array,
        required: true
      }
    },
    methods: {

    }
  }
</script>