<template lang="pug">
  div.navigation
    ul
      navigation-element(v-for="navigationElement in navigation", :key="navigationElement.id",
                          :navigationElement="navigationElement",
                          :menu="navigationElement.dropdownMenu",
                          :isMenuShow="isMenuShow")

</template>

<script>
  import NavigationElement from './NavigationElement.vue';

  export default {
    data() {
      return {
        navigation: [
          { id: '1', title: 'Home', link: '#', menu: null },
          { id: '2', title: 'Layouts', link: '#',
            dropdownMenu: [ 'Feelings This', 'Highway to Hell', 'Black is Black', 'Fly on the Wall', ]
          },
          { id: '3', title: 'Features', link: '#', menu: null },
          { id: '4', title: 'About', link: '#', menu: null },
          { id: '5', title: 'Sections', link: '#',
            dropdownMenu: [ '72 Hookers', 'Don\'t Call Me White', 'Kill Rock Stars', 'Linoleum', 'Punk Guy',
                            'She\'s Nubs' ]
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