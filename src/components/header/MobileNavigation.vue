<template lang="pug">
  .mobile-menu(:class="toggleMenu")
    cross-icon
</template>

<script>
  import { mapGetters } from 'vuex';
  import CrossIcon from './../icons/CrossIcon';

  export default {
    computed: {
      ...mapGetters('ui', ['mobileMenu']),

      toggleMenu() {
        return this.mobileMenu ? 'mobile-menu--active' : 'mobile-menu--inactive';
      }
    },
    components: {
      CrossIcon
    }
  }
</script>