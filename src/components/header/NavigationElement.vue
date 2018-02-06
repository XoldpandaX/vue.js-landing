<template>
    <li>
      <a :href="navigationElement.link">
        {{ navigationElement.title }}
      </a>
      <icon v-if="menu"></icon>
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
