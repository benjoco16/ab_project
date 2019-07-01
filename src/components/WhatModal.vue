<template>
  <!-- The Modal -->
  <div class="modal" id="whatModal">
    <div class="modal-dialog main-modal">
      <div class="modal-content bg-transparent">

        <!-- Modal Header -->
        <div class="modal-header">
          <button type="button" class="close text-color--primary text-color--white" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row pl-4 pr-4 section-primary">
              <div class="col nav-link-extra" v-for="firstLink in firstLinks" :key="firstLink.id">
                <img :src="firstLink.img" alt="angat buhay" class="img-fluid mb-3 d-none d-lg-block">
                <router-link
                  :to="{ name: firstLink.path }"
                  class="text-color--secondary text-size-2 text-color--white text-capitalize" data-dismiss="modal"
                >{{ firstLink.name }}</router-link>
              </div>
            </div>
            <section class="pl-4 pr-4 pt-3 full-width-section section-grey">
              <h4 class="text-size-2 font-weight-bold pl-3 mb-3">Sitemap</h4>
              <div class="row pl-3">
                <div class="col-md-3">
                  <h4 class="text-size-1 font-weight-bold">What We Do</h4>
                  <ul class="list-unstyled d-block">
                    <li v-for="firstLink in firstLinks" :key="firstLink.id">
                      <router-link :to="{ name: firstLink.path }"
                        class="text-color--secondary text-color--black"
                        data-dismiss="modal"
                      >{{ firstLink.name }}</router-link>
                    </li>
                  </ul>
                  <div class="mobile-margin--bottom"></div>
                </div>
                <div class="col-md-3">
                  <h4 class="text-size-1 font-weight-bold">Make An Impact</h4>
                  <ul class="list-unstyled d-block">
                    <li>
                      <router-link
                        :to="{ path: 'make-impact' }"
                        class="text-color--secondary text-color--black"
                        data-dismiss="modal"
                      >Register</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstLinks: [
        {
          id: 1,
          img: require('../assets/img/nav1.jpg'),
          name: 'Angat buhay',
          path: 'home'
        },
        {
          id: 2,
          img: require('../assets/img/nav2.jpg'),
          name: 'About this portal'
        },
        {
          id: 3,
          img: require('../assets/img/nav3.jpg'),
          name: 'Our communities',
          path: 'our-communities'
        },
        {
          id: 4,
          img: require('../assets/img/nav1.jpg'),
          name: 'Our programs',
          path: 'our-programs'
        },
        {
          id: 5,
          img: require('../assets/img/nav2.jpg'),
          name: 'News'
        }
      ]
    }
  }
}
</script>

<style>

</style>
