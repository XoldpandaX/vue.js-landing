<template lang="pug">
    li.navigation__element(@click="toggleMenu")
      a.navigation__link(:href="navigationElement.link") {{ navigationElement.title }}
      icon(v-if="menu")
      dropdown-block(:menu="menu", :isMenuShow="isMenuShow")
</template>

<script>
  import Icon from './../icons/Icon.vue';
  import DropdownBlock from './DropdownBlock.vue';

  export default {
    props: {
      navigationElement: {
        type: Object,
        required: true
      },
      menu: {
        type: Array
      },
      isMenuShow: {
        type: Boolean
      }
    },
    methods: {
      toggleMenu() {
        return this.isMenuShow = !this.isMenuShow;
      }
    },
    components: {
      Icon, DropdownBlock
    }
  }
</script>

<style lang="scss">

</style>
