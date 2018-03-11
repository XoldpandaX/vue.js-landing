<template lang="pug">
    li.navigation__element(@click="toggleMenu(index)",
                           :class="{ 'navigation__element--active' : navigationElement.active}")
      a.navigation__link(:href="navigationElement.link") {{ navigationElement.title }}
      arrow-icon(v-if="menu")
      transition(name="fade")
        ul.dropdown-block(v-if="navigationElement.isShow")
          li.dropdown-block__element(v-for="elem in menu")
            a {{ elem }}
</template>

<script>
  import ArrowIcon from '../icons/ArrowIcon';
  import { mapActions } from 'vuex';

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
      ArrowIcon
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0;
  }
</style>
