<template lang="pug">
    li.navigation__element(@click="toggleMenu")
      a.navigation__link(:href="navigationElement.link") {{ navigationElement.title }}
      icon(v-if="menu")
      ul.d(v-if="menu && isMenuShow")
        li.c(v-for="elem in menu")
          a {{ elem }}
</template>

<script>
  import Icon from './../icons/Icon.vue';

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
      Icon
    }
  }
</script>

<style lang="scss">
  .d {
    text-align: left;
    background: red;
    position: absolute;
    top: 56px;
    min-width: 150%;
    .c {
      display: list-item;
      padding-left: .3em;
    }
  }
</style>
