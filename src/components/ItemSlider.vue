<template>
  <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item">
        <img class="d-block w-100 carousel-half" src="../assets/img/sp-1.jpg" alt="program-item" v-if="['program-item'].includes($route.name)">
        <img class="d-block w-100 carousel-half" src="../assets/img/cp1.jpg" v-else alt="communities-item">
      </div>
    </div>
  </div>
</template>

<script>
export default {

  mounted () {
    $('#myCarousel').carousel({
      interval: 5000
    })
    $('#myCarousel .carousel-item:first').addClass('active')
  }
}
</script>

<style>

</style>
