<template lang="pug">
    li.navigation__element
      a.navigation__link(:href="navigationElement.link") {{ navigationElement.title }}
      icon(v-if="menu")
      ul.dropdown-block(v-if="navigationElement.isShow")
        li.dropdown-block__element(v-for="elem in menu")
          a {{ elem }}
</template>

<script>
  import Icon from './../icons/Icon.vue';

  export default {
    props: {
      navigationElement: {
        type: Object,
      },
      menu: {
        type: Array
      }
    },
    methods: {

    },
    components: {
      Icon
    }
  }
</script>

<style lang="scss">

</style>
