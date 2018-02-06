<template>
  <div class="navigation">
    <ul>
      <navigation-element v-for="navigationElement in navigation"
                          :key="navigationElement.id"
                          :navigationElement="navigationElement"
                          :menu="navigationElement.menu"></navigation-element>
    </ul>
  </div>
</template>

<script>
  import NavigationElement from './NavigationElement.vue';

  export default {
    data() {
      return {
        navigation: [
          { id: '1',
            title: 'Home',
            link: '#'
          },
          { id: '2',
            title: 'Layouts',
            link: '#',
            menu: [
              1
            ]
          },
          { id: '3',
            title: 'Features',
            link: '#'
          },
          { id: '4',
            title: 'About',
            link: '#'
          },
          { id: '5',
            title: 'Sections',
            link: '#',
            menu: [
              1
            ]
          }
        ]
      };
    },
    components: {
      NavigationElement
    }
  }
</script>