<template>
  <div class="programs">
    <program-slider />
    <div class="container-fluid">
      <nav aria-label="breadcrumb" class="ml-n3 mr-n3">
        <ol class="breadcrumb pl-5 pr-5">
          <li class="breadcrumb-item" aria-current="page">Home</li>
          <li class="breadcrumb-item active" aria-current="page">Our Programs</li>
        </ol>
      </nav>
      <section class="full-width-section section-satin pl-5 pr-5 mt-n3 pt-4 pb-4">
        <div class="row">
          <div class="col-md-3"><h2 class="text-color--black">Ongoing Programs</h2></div>
          <div class="col-lg-7">
            <form action="" class="form-inline">
              <label for="exampleFormControlSelect1" class="mr-4 font-weight-bold">Browse By</label>
              <select class="form-control d-inline-block mr-3" id="exampleFormControlSelect1">
                <option disabled selected>Category</option>
                <option>Project Status</option>
                <option>Advocacy</option>
                <option>Location</option>
              </select>

              <select class="form-control d-inline-block mr-3" id="exampleFormControlSelect1">
                <option disabled selected>Select Subcateogry</option>
                <option>1</option>
              </select>

              <button type="submit" class="btn btn-primary">Sort</button>
            </form>
          </div>
          <div class="col-md-2">
            <a href="javascript:;" class="float-right text-color--secondary text-uppercase">&#x3e;&#x3e; See all</a>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-md-4"
            v-for="program in programs"
            :key="program.id"
          >
            <p class="font-weight-bold text-uppercase">Project Status <span class="font-weight-normal muted">{{ program.tag }}</span></p>
            <img :src="program.thumb" alt="thumb" class="img-fluid">
            <h3 class="mt-3 font-weight-bold">{{ program.title }}</h3>
            <small class="text-capitalize font-weight-bold">By organization name <span class="font-weight-normal muted">{{ program.timestamp }}</span></small>
            <p class="mt-1"><icon icon="map-marker-alt" /> <small class="ml-2 muted">City Name, Province Name</small></p>
            <p>{{ program.desc }}</p>
            <h3>50% of Goals Met</h3>
            <router-link class="text-color--secondary text-uppercase font-weight-bold"
              :to="{ name: 'program-item' }"
            >
              &#x3e;&#x3e; Read more
            </router-link>
            <div class="mobile-margin--bottom"></div>
          </div>
          <p class="text-uppercase text-size-2 pl-3">Displaying <span class="font-weight-bold">3</span> of <span class="font-weight-bold">9</span></p>
        </div>
      </section>

      <section class="section pl-4 pr-4 pt-5 pb-4">
        <div class="row">
          <div class="col-md-3"><h2 class="text-color--black">Completed Programs</h2></div>
          <div class="col-lg-7">
            <form action="" class="form-inline">
              <label for="exampleFormControlSelect1" class="mr-4 font-weight-bold">Browse By</label>
              <select class="form-control d-inline-block mr-3" id="exampleFormControlSelect1">
                <option disabled selected>Category</option>
                <option>Project Status</option>
                <option>Advocacy</option>
                <option>Location</option>
              </select>

              <select class="form-control d-inline-block mr-3" id="exampleFormControlSelect1">
                <option disabled selected>Select Subcateogry</option>
                <option>1</option>
              </select>

              <button type="submit" class="btn btn-primary">Sort</button>
            </form>
          </div>
          <div class="col-md-2">
            <a href="javascript:;" class="float-right text-color--secondary text-uppercase">&#x3e;&#x3e; See all</a>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-md-4"
            v-for="program in programs"
            :key="program.id"
          >
            <p class="font-weight-bold text-uppercase">Project Status <span class="font-weight-normal muted">{{ program.tag }}</span></p>
            <img :src="program.thumb" alt="thumb" class="img-fluid">
            <h3 class="mt-3 font-weight-bold">{{ program.title }}</h3>
            <small class="text-capitalize font-weight-bold">By organization name <span class="font-weight-normal muted">{{ program.timestamp }}</span></small>
            <p class="mt-1"><icon icon="map-marker-alt" /> <small class="ml-2 muted">City Name, Province Name</small></p>
            <p>{{ program.desc }}</p>
            <h3>50% of Goals Met</h3>
            <router-link class="text-color--secondary text-uppercase font-weight-bold"
              :to="{ name: 'program-item' }"
            >
              &#x3e;&#x3e; Read more
            </router-link>
            <div class="mobile-margin--bottom"></div>
          </div>
          <p class="text-uppercase text-size-2 pl-3">Displaying <span class="font-weight-bold">3</span> of <span class="font-weight-bold">9</span></p>
        </div>
      </section>
      <section class="section full-width-section section-ice text-center pt-5 pb-5 mb-5">
        <h2>Make an Impact</h2>
        <div class="container">
          <p class="text-size-3">
            Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla.
          </p>
            <button class="btn btn-primary">JOIN THE PLATFORM</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ProgramSlider from '@/components/ProgramSlider.vue'

export default {
  components: { ProgramSlider },
  data () {
    return {
      programs: [
        {
          id: 1,
          tag: 'Women Empowerment',
          thumb: require('@/assets/img/3.jpg'),
          title: 'Maecenas blandit pulvinar purus.',
          timestamp: 'February 10, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        },
        {
          id: 2,
          tag: 'Rural Development',
          thumb: require('@/assets/img/3.jpg'),
          title: 'Aenean vitae sapien. Sed quis risus vel justo lacinia semper.',
          timestamp: 'February 9, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        },
        {
          id: 3,
          tag: 'UNIVERSAL HEALTHCARE',
          thumb: require('@/assets/img/3.jpg'),
          title: 'Nunc purus lectus, ornare id, porttitor non, imperdiet quis.',
          timestamp: 'February 12, 2019',
          desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue.'
        }
      ]
    }
  },
  mounted () {
    console.log(this.$route.name)
    var footer = document.getElementById('footer-bottom')
    footer.classList.add('mb-override-footer--inner')
  }
}
</script>

<style>

</style>
