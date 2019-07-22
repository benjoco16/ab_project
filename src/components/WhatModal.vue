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
          <div class="container-fluid section-primary pb-0">
            <div class="container">
              <div class="row pb-4">
                <div class="col nav-link-extra" v-for="firstLink in firstLinks" :key="firstLink.id">
                  <img :src="firstLink.img" alt="angat buhay" class="img-fluid mb-3 d-none d-lg-block">
                  <router-link
                    :to="{ name: firstLink.path }"
                    class="text-color--secondary text-size-2 text-color--white text-capitalize" data-dismiss="modal"
                  >{{ firstLink.name }}</router-link>
                </div>
              </div>
            </div>

            <section class="pt-3 full-width-section section-grey">
              <div class="container">
                <h4 class="text-size-2 font-weight-bold mb-3">Sitemap</h4>
                <div class="row">
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
          img: require('../assets/img/modal1/angat-buhay.jpg'),
          name: 'Angat buhay',
          path: 'home'
        },
        {
          id: 2,
          img: require('../assets/img/modal1/about-portal.jpg'),
          name: 'About this portal'
        },
        {
          id: 3,
          img: require('../assets/img/modal1/our-communities.jpg'),
          name: 'Our communities',
          path: 'our-communities'
        },
        {
          id: 4,
          img: require('../assets/img/modal1/our-programs.jpg'),
          name: 'Our programs',
          path: 'our-programs'
        },
        {
          id: 5,
          img: require('../assets/img/modal1/news.jpg'),
          name: 'News'
        }
      ]
    }
  }
}
</script>

<style>

</style>
