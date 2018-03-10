<template lang="pug">
    li.navigation__element(@click="toggleMenu(index)")
      a.navigation__link(:href="navigationElement.link") {{ navigationElement.title }}
      icon(v-if="menu")
      ul.dropdown-block(v-if="navigationElement.isShow", v-click-outside="closeAllMenu")
        li.dropdown-block__element(v-for="elem in menu")
          a {{ elem }}
</template>

<script>
  import Icon from './../icons/Icon.vue';
  import { mapActions } from 'vuex';
  import ClickOutside from 'vue-click-outside';

  export default {
    props: {
      navigationElement: {
        type: Object,
        isRequired: true
      },
      menu: {
        type: Array
      },
      index: {
        type: Number,
        isRequired: true
      }
    },
    methods: {
      ...mapActions('ui', ['toggleMenu', 'closeAllMenu'])
    },
    components: {
      Icon
    },
    directives: {
      ClickOutside
    }
  }
</script>

<style lang="scss">

</style>
