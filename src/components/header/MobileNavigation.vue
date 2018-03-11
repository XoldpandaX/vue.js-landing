<template lang="pug">
  .mobile-menu(:class="toggleMenu")

</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        isShow: null
      };
    },
    computed: {
      ...mapGetters('ui', ['mobileMenu']),
      toggleMenu() {
        this.isShow = this.mobileMenu;

        return this.isShow ? 'mobile-menu--active' : 'mobile-menu--inactive';
      }
    }
  }
</script>