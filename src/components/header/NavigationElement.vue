<template>
    <li @click="toggleMenu">
      <a :href="navigationElement.link">
        {{ navigationElement.title }}
      </a>
      <icon v-if="menu"></icon>
      <ul v-if="menu && isMenuShow" style="text-align: center; background: red">
        <li>1</li>
      </ul>
    </li>
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
