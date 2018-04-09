<template lang="pug">
  svg(version="1.1"
  id="Capa_1"
  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px",
  :width='width', :height='height'
  viewBox="0 0 78 78",
  :fill= 'fill')
    g
      path(d="M40,0C26.191,0,15,11.194,15,25c0,23.87,25,55,25,55s25-31.13,25-55C65,11.194,53.807,0,40,0z M40,38.8c-7.457,0-13.5-6.044-13.5-13.5S32.543,11.8,40,11.8c7.455,0,13.5,6.044,13.5,13.5S47.455,38.8,40,38.8z")
</template>

<script>
  export default {
    name: "MarkerIcon",
    props: ['fill', 'width', 'height']
  }
</script>

<style scoped>

</style>