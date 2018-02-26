<template lang="pug">
  div.navigation
    ul
      navigation-element(v-for="navigationElement in navigation", :key="navigationElement.id",
                          :navigationElement="navigationElement",
                          :menu="navigationElement.menu",
                          :isMenuShow="isMenuShow")

</template>

<script>
  import NavigationElement from './NavigationElement.vue';

  export default {
    data() {
      return {
        navigation: [
          { id: '1', title: 'Home', link: '#' },
          { id: '2', title: 'Layouts', link: '#',
            menu: [ 'link 1', 'link 2', 'link 3', 'link 4', ]
          },
          { id: '3', title: 'Features', link: '#' },
          { id: '4', title: 'About', link: '#' },
          { id: '5', title: 'Sections', link: '#',
            menu: [ 'menu link 1', 'menu link 2', 'menu link 3', 'menu link 4', 'menu link 5', 'menu link 6' ]
          }
        ],
        isMenuShow: false
      };
    },
    components: {
      NavigationElement
    }
  }
</script>