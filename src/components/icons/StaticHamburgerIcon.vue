<template lang="pug">
  button.static-hamburger-icon(@click="showMobileMenu")
    span
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions('ui', ['showMobileMenu'])
    }
  }
</script>

<style scoped lang="scss">
  .static-hamburger-icon {
    display: block;
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 50px;
    height: 80px;
    font-size: 0;
    text-indent: -9999px;
    box-shadow: none;
    border: none;
    cursor: pointer;

    &:focus {
      outline: 0;
    }

    span {
      display: block;
      position: absolute;
      top: 39px;
      left: 13px;
      right: 13px;
      height: 3px;
      background: #000;

      &:before,
      &:after {
        position: absolute;
        display: block;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #000;
        content: "";
      }

      &:before {
        top: -8px;
      }

      &:after {
        bottom: -8px;
      }
    }
  }
</style>