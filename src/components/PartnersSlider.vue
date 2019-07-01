<template>
  <div id="partnersCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
        <li data-target="#partnersCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#partnersCarousel" data-slide-to="1"></li>
    </ol>

    <!-- Carousel items -->
    <div class="carousel-inner">

        <div class="carousel-item carousel-item--partners active">
            <div class="row">
                <div class="col-md-3 text-center" v-for="n in 4">
                  <img src="http://placehold.it/250x250" alt="Image" class="img-fluid rounded-circle mx-auto d-block">
                  <p class="font-weight-bold text-size-3 mt-3">Name Surname</p>
                  <p>
                    Aenean est tellus, congue at, placerat mollis, eleifend in, augue. Etiam suscipit hendrerit ante. Aenean vitae sapien. Sed quis risus vel justo lacinia semper. Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla.
                  </p>
                </div>
            </div>
            <!--.row-->
        </div>
        <!--.item-->

        <div class="carousel-item carousel-item--partners">
            <div class="row text-center">
                <div class="col-md-3" v-for="n in 4">
                  <img src="http://placehold.it/250x250" alt="Image" class="img-fluid rounded-circle mx-auto d-block">
                  <p class="font-weight-bold text-size-3 mt-3">Name Surname</p>
                  <p>
                    Aenean est tellus, congue at, placerat mollis, eleifend in, augue. Etiam suscipit hendrerit ante. Aenean vitae sapien. Sed quis risus vel justo lacinia semper. Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla.
                  </p>
                </div>
            </div>
            <!--.row-->
        </div>
        <!--.item-->

    </div>
    <!--.carousel-inner-->
</div>
</template>

<script>
export default {
  mounted () {
    $('#partnersCarousel').carousel({
      interval: 5000
    })
  }
}
</script>

<style>

</style>
