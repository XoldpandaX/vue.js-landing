<template lang="pug">
  .recall
    .recall__media
      .recall__avatar(:style="{'background-image': `url(${content.image})`}")
      p {{ content.text.userName }}
    .recall__text
      h3  {{ content.text.topText }}
      p {{ content.text.bottomText }}

</template>

<script>
  export default {
    name: "recall",
    props: ['content']
  }
</script>