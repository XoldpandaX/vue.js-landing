<template>
    <li>
      <a :href="navigationElement.link">
        {{ navigationElement.title }}
        <span v-if="menu"><icon></icon></span>
      </a>
    </li>
</template>

<script>
  import Icon from './Icon.vue';

  export default {
    props: {
      navigationElement: {
        type: Object,
        required: true
      },
      menu: {
        type: Array
      }
    },
    components: {
      Icon
    }
  }
</script>
