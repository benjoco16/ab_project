<template>
  <div class="community">
    <community-slider />
    <div class="container-fluid">
      <nav aria-label="breadcrumb" class="ml-n3 mr-n3">
        <ol class="breadcrumb pl-5 pr-5">
          <li class="breadcrumb-item" aria-current="page">Home</li>
          <li class="breadcrumb-item active" aria-current="page">Our Communities</li>
        </ol>
      </nav>
      <!-- Begin first section -->
      <section class="section pl-4 pr-4 pt-4 mb-5">
        <h2 class="text-color--black">Subhead</h2>
        <div class="row pt-3">
          <div class="col-md-6">
            <img src="../../assets/img/c2.jpg" alt="" class="img-fluid">
          </div>
          <div class="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer at erat non ante ultrices facilisis. Maecenas blandit pulvinar purus. Aenean ac leo. Aenean accumsan tempor nisi. Fusce ac lorem. Mauris tortor sem, tincidunt ut, pharetra non, porta vitae, augue. Nunc ut lectus ac justo pretium iaculis. In id lectus eu diam aliquam rutrum. Ut sit amet arcu non urna venenatis consectetuer. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p>
              Aenean est tellus, congue at, placerat mollis, eleifend in, augue. Etiam suscipit hendrerit ante. Aenean vitae sapien. Sed quis risus vel justo lacinia semper. Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla.
            </p>
            <p>
              Nulla facilisi. Nunc in mauris. Etiam lacinia. Nunc mollis. Aliquam massa ipsum, placerat non, luctus quis, bibendum quis, felis. Sed eu turpis. Suspendisse consequat laoreet diam.
            </p>
            <p>
              Nunc purus lectus, ornare id, porttitor non, imperdiet quis, augue. In hac habitasse platea dictumst. Integer laoreet arcu ut pede. Vestibulum sed quam.
            </p>
          </div>
        </div>
      </section>
      <!-- End first section -->
      <!-- Begin second section -->
      <section class="section full-width-section section-satin text-center pt-5 pb-5 mb-5">
        <h2>Meet Our Communities</h2>
        <div class="container">
          <p class="text-size-3">
            Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla.
          </p>
          <form action="submit.prevent" class="form-inline pt-2 justify-content-center">
            <label for="sort" class="text-size-2 font-weight-bold pr-3">Sort List By</label>
            <select name="sort" class="form-control col-md-3 mr-3">
              <option value="">Latest</option>
              <option value="">Old</option>
            </select>
            <button class="btn btn-primary">SEARCH</button>
          </form>
        </div>
      </section>
      <!-- End second section -->
      <!-- Begin third section -->
      <section class="section pl-4 pr-4 pt-4 mb-5">
        <div class="row">
          <div class="col-md-4" v-for="n in 6">
            <p class="font-weight-bold">CATEGORY</p>
            <div class="img-process">
              <img src="@/assets/img/c3.jpg" alt="lgu name" class="rounded-circle img-fluid mx-auto d-block">
            </div>
            <h3 class="font-weight-bold mt-4">LGU Name Line 1</h3>
            <h3 class="font-weight-bold">Line 2</h3>
            <p class="font-weight-bold">
              Joined February 7, 2019
            </p>
            <p>
              Aenean est tellus, congue at, placerat mollis, eleifend in, augue. Etiam suscipit hendrerit ante. Aenean vitae sapien. Sed quis risus vel justo lacinia semper. Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla.
            </p>
            <router-link
              :to="{ name: 'community-item' }"
              class="text-color--secondary text-uppercase font-weight-bold">&#x3e;&#x3e; Read more
            </router-link>
            <div class="mobile-margin--bottom"></div>
          </div>
        </div>
      </section>
      <!-- End third section -->
      <!-- Begin fourth section -->
      <section class="section full-width-section section-ice text-center pt-5 pb-5 mb-5">
        <h2>Make an Impact</h2>
        <div class="container">
          <p class="text-size-3">
            Aenean mollis sapien sed velit consequat consectetuer. Cras faucibus dui vel neque. Pellentesque mattis pulvinar quam. Curabitur vel metus. Etiam at orci a enim cursus commodo. Nulla eget nulla.
          </p>
            <button class="btn btn-primary">JOIN THE PLATFORM</button>
        </div>
      </section>
      <!-- End fourth section -->
    </div>
  </div>
</template>

<script>
import CommunitySlider from '@/components/CommunitySlider.vue'

export default {
  components: { CommunitySlider },
  mounted () {
    console.log(this.$route.name)
    var footer = document.getElementById('footer-bottom')
    footer.classList.add('mb-override-footer--inner')
  }
}
</script>

<style>

</style>
