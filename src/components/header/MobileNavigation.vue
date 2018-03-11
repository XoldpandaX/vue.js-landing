<template lang="pug">
  .mobile-menu(:class="toggleMenu")
    cross-icon
</template>

<script>
  import { mapGetters } from 'vuex';
  import CrossIcon from './../icons/CrossIcon';

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
    },
    components: {
      CrossIcon
    }
  }
</script>