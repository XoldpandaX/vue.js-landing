<template lang="pug">
  .switcher
    .switcher__title title
    .switcher__main
      .switcher__lever(@click="hel", :class="{'switcher__lever--active': isActive}")
</template>

<script>
  export default {
    name: "Switcher",
    data() {
      return {
        isActive: false
      };
    },
    methods: {
      hel() {
        this.isActive = !this.isActive;
      }
    }
  }
</script>