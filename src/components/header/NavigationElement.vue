<template lang="pug">
    li.navigation__element
      a.navigation__link(:href="navigationElement.link") {{ navigationElement.title }}
      icon(v-if="menu")
      <!--dropdown-block(:menu="menu")-->
      ul.dropdown-block
        li.dropdown-block__element(v-for="elem in menu")
          a {{ elem }}
</template>

<script>
  import Icon from './../icons/Icon.vue';
  import DropdownBlock from './DropdownBlock.vue';

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
      Icon, DropdownBlock
    }
  }
</script>

<style lang="scss">

</style>
