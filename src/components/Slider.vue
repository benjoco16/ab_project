<template>
  <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        data-target="#myCarousel"
        class="indicator-item"
        v-for="banner in banners"
        :key="banner.id"
        :data-slide-to="banner.id"
      ></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item" v-for="banner in banners" :key="banner.id">
        <img class="d-block w-100" :src="banner.src" :alt="banner.name" />
        <div class="carousel-caption text-left d-none d-md-block">
          <p class="carousel-caption--tag">{{ banner.tag }}</p>
          <h1 class="carousel-caption--title">{{ banner.title }}</h1>
          <p class="carousel-caption--desc">{{ banner.desc }}</p>
          <a
            href="javascript:;"
            class="carousel-caption--link text-uppercase font-weight-bold"
          >&#x3e;&#x3e; Read More</a>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev display-4" href="#myCarousel" role="button" data-slide="prev">
      <!-- <icon icon="chevron-left" aria-hidden="true" /> -->
      <img src="@/assets/img/left-arrow.svg" class="ab-slider-control-left" alt />
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next display-4" href="#myCarousel" role="button" data-slide="next">
      <!-- <icon icon="chevron-right" aria-hidden="true" /> -->
      <img src="@/assets/img/right-arrow.svg" class="ab-slider-control-right" alt />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        {
          id: 0,
          name: "banner1",
          src: require("../assets/img/1.jpg"),
          tag: "Women empowerment",
          title: "Nulla facilisi. Nunc in mauris.",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores optio quam officiis ipsum quibusdam adipisci, debitis delectus quasi vel quia!"
        },
        {
          id: 1,
          name: "banner2",
          src: require("../assets/img/4.jpg"),
          tag: "Rural development",
          title: "Nulla facilisi. Nunc in mauris.",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magnam non ipsum atque qui suscipit aliquam enim esse, eum maxime."
        }
      ]
    };
  },
  mounted() {
    $("#myCarousel").carousel({
      interval: 5000
    });
    $("#myCarousel .carousel-item:first").addClass("active");
  }
};
</script>
