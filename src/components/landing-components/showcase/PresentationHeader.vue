<template lang="pug">
  header.presentation-header
    h2(:style="{color: `${titleColor}`}") {{ title }}
    p(:style="{color: `${subtitleColor}`}")  {{ subtitle }}
</template>

<script>
  export default {
    name: 'presentation-header',
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      titleColor: {
        type: [String, Number],
        default: 'white'
      },
      subtitleColor: {
        type: [String, Number],
        default: 'white'
      }
    }
  }
</script>
