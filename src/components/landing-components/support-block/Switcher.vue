<template lang="pug">
  .switcher
    .switcher__title
      h5 {{ title }}
    .switcher__main
      .switcher__lever(@click="isActive = !isActive;", :class="{'switcher__lever--active': isActive}")
    .switcher__description
      p {{ description }}
</template>

<script>
  export default {
    name: "Switcher",
    props: ['title', 'description'],
    data() {
      return {
        isActive: false
      };
    }
  }
</script>