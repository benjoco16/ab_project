<template>
  <div class="program-item">
    <item-slider />
    <div class="container-fluid">
      <nav aria-label="breadcrumb" class="ml-n3 mr-n3">
        <ol class="breadcrumb pl-5 pr-5">
          <li class="breadcrumb-item" aria-current="page">Home</li>
          <li class="breadcrumb-item" aria-current="page">Our Programs</li>
          <li class="breadcrumb-item active" aria-current="page">Sample Program</li>
        </ol>
      </nav>
      <!-- Begin first section -->
      <section class="section pl-4 pr-4 pt-4 pb-4">
        <p class="font-weight-bold text-uppercase">Project Status <span class="muted">Category</span></p>
        <h2>Program Campaign Title
          <span class="text-size-1 pl-4 text-capitalize text-color--black">By community name</span>
          <span class="text-size-1 pl-2 text-capitalize muted">February 7, 2019</span>
        </h2>
        <p class="mt-1"><icon icon="map-marker-alt" /> <small class="ml-2 muted">City Name, Province Name</small></p>
        <div class="row">
          <div class="col-md-3">
            <div class="bg-secondary--light p-4 h-50 overflow-auto">
              <h2 class="text-color--blue">Where are we now</h2>
              <p class="font-weight-bold">Last Updated: April 20, 2019</p>
              <p class="font-weight-bold text-size-3">75% Complete</p>

              <h2 class="text-color--blue">Project Components</h2>
              <p class="font-weight-bold pt-3 mb-0 text-size-2">Name of Component:</p>
              <p class="font-weight-bold text-size-3">75% Complete</p>
              <p class="font-weight-bold pt-3 mb-0 text-size-2">Name of Component:</p>
              <p class="font-weight-bold text-size-3">75% Complete</p>
            </div>
            <div class="bg-secondary-default p-4 text-white">
              <p class="text-size-3 font-weight-bold mb-0">Start Date:</p>
              <p class="text-size-3 font-weight-bold">April 2, 2019</p>
              <p class="text-size-3 font-weight-bold mb-0">End Date:</p>
              <p class="text-size-3 font-weight-bold">October 30, 2019</p>
            </div>
          </div>
          <div class="col-md-9">
            <img src="../../assets/img/sp-2.jpg" alt="sample" class="img-fluid">
            <div class="d-flex mt-4">
              <button class="btn btn-primary mr-3">Let's Collaborate</button>
              <button class="btn btn-secondary">Follow Our Journey</button>
              <div class="ml-auto">
                <a href="#" class="mr-3">
                  <img src="../../assets/img/sp-icon1.png" alt="facebook">
                </a>
                <a href="#" class="mr-3">
                  <img src="../../assets/img/sp-icon2.png" alt="twitter">
                </a>
                <a href="#">
                  <img src="../../assets/img/sp-icon3.png" alt="linkedin">
                </a>
              </div>
            </div>
            <p class="mt-4">
              LGU description. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue. Nunc ut lectus ac justo pretium iaculis. In id lectus eu diam aliquam rutrum. Ut sit amet arcu non urna venenatis consectetuer. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>
              Aenean est tellus, congue at, placerat mollis, eleifend in, augue. Etiam suscipit hendrerit ante. Aenean vitae sapien. Sed quis risus vel justo lacinia semper. Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla. Nulla facilisi. Nunc in mauris. Etiam lacinia. Nunc mollis. Aliquam massa ipsum, placerat non, luctus quis, bibendum quis, felis.
            </p>
          </div>
        </div>
      </section>
      <!-- End first section -->
      <!-- Begin second section -->
      <section class="pl-5 pr-5 pt-4 pb-4 full-width-section section-satin">
        <div class="d-flex mb-4">
          <h2>Our Partners</h2>
          <p class="ml-auto text-uppercase my-auto">Displaying 4 of 8</p>
        </div>
        <partners-slider />
      </section>
      <!-- End second section -->
      <!-- Begin third section -->
      <section class="section pt-4 pb-5 pl-4 pr-4">
        <div class="row">
          <div class="col-md-3">
            <h2>About The Program</h2>
            <ul class="list-unstyled pt-3">
              <li class="mb-3">
                <a href="javascript:;" class="font-weight-bold text-size-3 text-color--primary text-color--black"
                  @click="about = 'challenge'"
                  :class="[ about === 'challenge' ? 'active-about' : '' ]"
                >The Challenge</a>
              </li>
              <li class="mb-3">
                <a href="javascript:;" class="font-weight-bold text-size-3 text-color--primary text-color--black"
                  @click="about = 'vision'"
                  :class="[ about === 'vision' ? 'active-about' : '' ]"
                >Our Vision</a>
              </li>
              <li class="mb-3">
                <a href="javascript:;" class="font-weight-bold text-size-3 text-color--primary text-color--black"
                  @click="about = 'goals'"
                  :class="[ about === 'goals' ? 'active-about' : '' ]"
                >Breakthrough Goals</a>
              </li>
              <li class="mb-3">
                <a href="javascript:;" class="font-weight-bold text-size-3 text-color--primary text-color--black"
                  @click="about = 'action'"
                  :class="[ about === 'action' ? 'active-about' : '' ]"
                >Our Plan of Action</a>
              </li>
              <li class="mb-3">
                <a href="javascript:;" class="font-weight-bold text-size-3 text-color--primary text-color--black"
                  @click="about = 'tracker'"
                  :class="[ about === 'tracker' ? 'active-about' : '' ]"
                >Progress Tracker</a>
              </li>
              <li class="mb-3">
                <a href="javascript:;" class="font-weight-bold text-size-3 text-color--primary text-color--black"
                  @click="about = 'monitoring'"
                  :class="[ about === 'monitoring' ? 'active-about' : '' ]"
                >Monitoring</a>
              </li>
              <li>
                <a href="javascript:;" class="font-weight-bold text-size-3 text-color--primary text-color--black"
                  @click="about = 'faq'"
                  :class="[ about === 'faq' ? 'active-about' : '' ]"
                >FAQs</a>
              </li>
            </ul>
          </div>
          <div class="col-md-9 section-grey p-4">
            <div v-if="about === 'challenge'"><h2>The Challenge</h2></div>
            <div v-if="about === 'vision'"><h2>Our Vision</h2></div>
            <div v-if="about === 'goals'"><h2>Breakthrough Goals</h2></div>
            <div v-if="about === 'action'"><h2>Our Plan of Action</h2></div>
            <div v-if="about === 'tracker'"><h2>Progress Tracker</h2></div>
            <div v-if="about === 'monitoring'"><h2>Monitoring</h2></div>
            <div v-if="about === 'faq'">
              <h2>FAQs</h2>
              <ul class="list-unstyled pt-3">
                <li v-for="n in 4">
                  <p class="text-size-2 font-weight-bold">1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat?</p>
                  <p class="text-size-2">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <!-- End third section -->
      <!-- Begin fourth section -->
      <section class="section full-width-section section-ice text-center pt-5 pb-5 mb-5">
        <h2>Let's Collaborate</h2>
        <div class="container">
          <p class="text-size-3">
            Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla.
          </p>
            <button class="btn btn-primary">Support Our Program</button>
        </div>
      </section>
      <!-- End fourth section -->
    </div>
  </div>
</template>

<script>
import ItemSlider from '@/components/ItemSlider'
import PartnersSlider from '@/components/PartnersSlider'

export default {
  components: { ItemSlider, PartnersSlider },
  data () {
    return {
      about: 'faq'
    }
  },
  mounted () {
    var footer = document.getElementById('footer-bottom')
    footer.classList.add('mb-override-footer--inner')
  }
}
</script>

<style>

</style>
