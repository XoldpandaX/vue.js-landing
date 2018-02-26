<template lang="pug">
    li(@click="toggleMenu")
      a(:href="navigationElement.link") {{ navigationElement.title }}
      icon(v-if="menu")
      ul(v-if="menu && isMenuShow", style="text-align: center; background: red")
        li 1
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
