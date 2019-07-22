<template>
  <!-- The Modal -->
  <div class="modal impact-modal" id="impactModal">
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
                <div class="col-3 nav-link-extra" v-for="secondLink in secondLinks" :key="secondLink.id">
                  <img :src="secondLink.img" alt="angat buhay" class="img-fluid mb-3 d-none d-lg-block">
                  <router-link
                    :to="{ name: 'make-impact' }"
                    class="text-color--secondary text-size-2 text-color--white text-capitalize"
                    data-dismiss="modal">{{ secondLink.name }}</router-link>
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
                      <li v-for="linkExtra in linkExtras" :key="linkExtra.name">
                        <router-link :to="{ name: linkExtra.path }"
                          class="text-color--secondary text-color--black"
                          data-dismiss="modal"
                        >{{ linkExtra.name }}</router-link>
                      </li>
                    </ul>
                    <div class="mobile-margin--bottom"></div>
                  </div>
                  <div class="col-md-3">
                    <h4 class="text-size-1 font-weight-bold">Make An Impact</h4>
                    <ul class="list-unstyled d-block">
                      <li>
                        <router-link
                          :to="{ name: 'make-impact' }"
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
      secondLinks: [
        {
          id: 1,
          img: require('../assets/img/modal2/register.jpg'),
          name: 'Register'
        }
      ],
      linkExtras: [
        {
          name: 'Angat Buhay',
          path: 'home'
        },
        {
          name: 'About This Portal',
          path: 'home'
        },
        {
          name: 'Our Communities',
          path: 'our-communities'
        },
        {
          name: 'Our Programs',
          path: 'our-programs'
        },
        {
          name: 'News',
          path: 'home'
        }
      ]
    }
  }
}
</script>

<style>

</style>
