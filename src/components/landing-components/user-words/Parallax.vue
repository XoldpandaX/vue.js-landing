<template>
  <section style="height: 500px">
    <div class="paralax-1">
      <div class="new-paralax">
        <h1>Simple Paralax</h1>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Parallax"
  }
</script>

<style lang="scss" scoped>
  @mixin backgrounds(){
    background-attachment:fixed;
    background-size:cover!important;
    background-position:center;
    background-blend-mode:screen;
  }
  html, body{ margin:0; height:100%; }
  section{
    position:relative;
    height:100%;
    @include backgrounds();

    h1{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      font-size:50px;
      color:#fff;
      width:100%;
      text-align:center;
    }
    &:nth-of-type(1){
      .paralax-1{
        height:100%;
        width:100%;
        position:relative;
        overflow:hidden;
        .new-paralax{
          z-index:-100000;
          transform:translateZ(-8000px) scale(.4);
          @include backgrounds();
          height:100%;
          width:100%;
          position:relative;
          transform:scale(1.3);
          background-color: #f55;
          background-image:url('https://visualhunt.com/photos/xl/2/aerial-view-of-coffee-cup-on-wooden-table.jpg');
        } /* .new-paralax */
      } /* .paralax-1 */
    } /* &:nth-of-type(1) */

    &:nth-of-type(2){
      background-image:url('https://visualhunt.com/photos/xl/2/gps-in-car-interior.jpg');
    }
    &:nth-of-type(3){
      background-image:url('https://visualhunt.com/photos/xl/2/soup-vegetables-pot-cooking-food-healthy-carrot.jpg');
      background-color:red;

    }
    &:nth-of-type(4){
      background-image:url('https://visualhunt.com/photos/xl/2/sport-gymnastics-frog-funny-fitness-fit-sporty-1.jpg');
    }
  }

  .d {
    height: 500px;
  }
</style>