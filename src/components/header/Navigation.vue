<template lang="pug">
  div.navigation
    ul(v-click-outside="closeAllMenu")
      navigation-element(v-for="(navigationElement, index) in navigationElements",
                          :key="navigationElement.id",
                          :index="index",
                          :navigationElement="navigationElement",
                          :menu="navigationElement.dropdownMenu")

</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import ClickOutside from 'vue-click-outside';
  import NavigationElement from './NavigationElement.vue';

  export default {
    computed: {
      ...mapGetters('ui', {navigationElements: 'navigation'})
    },
    methods: {
      ...mapActions('ui', ['closeAllMenu'])
    },
    components: {
      NavigationElement
    },
    directives: {
      ClickOutside
    }
  }
</script>