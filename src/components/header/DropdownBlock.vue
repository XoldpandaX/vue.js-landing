<template lang="pug">
  ul.dropdown-block(v-if="menu && isMenuShow")
    li.dropdown-block__element(v-for="elem in menu")
      a {{ elem }}
</template>

<script>
  export default {
    props: {
      menu: {
        type: Array
      },
      isMenuShow: {
        type: Boolean
      }
    }
  }
</script>

<style lang="scss">

</style>