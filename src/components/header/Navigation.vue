<template lang="pug">
  div.navigation
    ul
      navigation-element(v-for="(navigationElement, index) in navigationElements",
                          :key="navigationElement.id",
                          :index="index",
                          :navigationElement="navigationElement",
                          :menu="navigationElement.dropdownMenu")

</template>

<script>
  import { mapGetters } from 'vuex';
  import NavigationElement from './NavigationElement.vue';

  export default {
    computed: {
      ...mapGetters('ui', {navigationElements: 'navigation'})
    },
    components: {
      NavigationElement
    }
  }
</script>