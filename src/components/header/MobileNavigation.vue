<template lang="pug">
  .mobile-menu(:class="toggleMenu")
    button(@click="closeMobileMenu")
      cross-icon
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import CrossIcon from './../icons/CrossIcon';

  export default {
    computed: {
      ...mapGetters('ui', ['mobileMenu']),

      toggleMenu() {
        return this.mobileMenu ? 'mobile-menu--active' : 'mobile-menu--inactive';
      }
    },
    methods: {
      ...mapActions('ui', ['closeMobileMenu'])
    },
    components: {
      CrossIcon
    }
  }
</script>