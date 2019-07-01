<template>
  <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item"
        v-for="banner in banners" :key="banner.id"      >
        <img class="d-block w-100" :src="banner.src" :alt="banner.name">
        <div class="carousel-caption text-left d-none d-md-block">
          <h1 class="carousel-caption--title">{{ banner.title }}</h1>
          <p class="carousel-caption--desc">
            {{ banner.desc }}
          </p>
          <a href="javascript:;" class="carousel-caption--link text-uppercase font-weight-bold">&#x3e;&#x3e; Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banners: [
        {
          id: 0,
          name: 'banner1',
          src: require('../assets/img/p1.jpg'),
          title: 'Our Programs',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores optio quam officiis ipsum quibusdam adipisci, debitis delectus quasi vel quia!'
        }
      ]
    }
  },
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
