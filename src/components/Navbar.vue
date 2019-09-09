<template>
  <!-- Nav modal open -->
  <div>
    <!-- <nav class="visible-lg nav-modal-open navbar navbar-expand-lg navbar-transparent navbar-ab">
      <div class="container">
        <router-link to="/" class="navbar-brand mr-5">
          <img src="@/assets/img/logo.png" alt="logo" class="img-fluid" />
        </router-link>
        <div class="navbar-collapse">
          <div class="navbar-additional">
            <img src="/img/office.4dd5a181.png" alt="Office of the vice president" />
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                href="javascript:;"
                class="nav-link pl-0 pr-0 mr-4"
                role="button"
                data-toggle="modal"
                data-target="#whatModal"
                data-backdrop="static"
                data-keyboard="false"
                :class="{ active : active === 'whatmodal' }"
                @click="active = 'whatmodal'"
              >What we do</a>
            </li>
            <li class="nav-item">
              <a
                href="javascript:;"
                class="nav-link pl-0 pr-0 mr-4"
                data-toggle="modal"
                data-target="#impactModal"
                data-backdrop="static"
                data-keyboard="false"
                :class="{ active : active === 'impactmodal' }"
                @click="active = 'impactmodal'"
              >Make an Impact</a>
            </li>
            <li class="nav-item">
              <a href="jascript:;" class="nav-link" data-toggle="modal" data-target="#searchModal">
                <icon icon="search" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>-->
    <nav
      class="navbar navbar-expand-lg navbar-transparent navbar-ab"
      :class="{ 'navbarOpen' : show }"
    >
      <div class="container">
        <router-link to="/" class="navbar-brand mr-5">
          <img src="@/assets/img/logo.png" alt="logo" class="img-fluid" />
        </router-link>

        <button
          class="navbar-toggler btn-primary"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <icon icon="bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" :class="{ 'show': show }">
          <div class="navbar-additional">
            <img
              src="@/assets/img/office.png"
              v-if="['home', 'our-communities', 'our-programs'].includes($route.name)"
              alt="Office of the vice president"
            />
            <img
              src="@/assets/img/office-inverse.png"
              v-if="['make-impact'].includes($route.name)"
              alt="Office of the vice president"
            />
          </div>
          <ul class="navbar-nav ab-left-nav">
            <li class="nav-item">
              <a
                id="whatToggle"
                href="javascript:;"
                class="nav-link pl-0 pr-0 mr-4"
                role="button"
                data-toggle="modal"
                data-backdrop="static"
                data-keyboard="false"
                @click="toggleWhatModal"
                :class="{ active : active === 'whatmodal' }"
              >What we do</a>
            </li>
            <li class="nav-item">
              <a
                id="impactToggle"
                href="javascript:;"
                class="nav-link pl-0 pr-0 mr-4"
                data-toggle="modal"
                data-backdrop="static"
                data-keyboard="false"
                @click="toggleImpactModal"
                :class="{ active : active === 'impactmodal' }"
              >Make an Impact</a>
            </li>
            <li class="nav-item">
              <a href="jascript:;" class="nav-link" data-toggle="modal" data-target="#searchModal">
                <icon icon="search" />
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto align-items-center ab-right-nav">
            <li class="nav-item avatar-container" v-show="loggedIn">
              <div class="row">
                <div class="col-4">
                  <img
                    src="https://i.pravatar.cc/300?img=9"
                    alt="profile"
                    class="rounded-circle avatar-profile"
                  />
                </div>
                <div class="col">
                  <p class="text-uppercase mb-2">Partner</p>
                  <p class="text-uppercase text-size-2 mb-0">Darlyn Agbon</p>
                  <a href="javascript:;" class="text-size-2">Go to my dashboard</a>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-m-block btn-secondary my-2 my-sm-0 nav-link mr-3"
                type="button"
              >Sign up</button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-m-block btn-primary my-2 my-sm-0 nav-link"
                type="button"
                @click="toggleUser"
              >Log in</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <!-- End modal open -->
</template>

<script>
export default {
  data() {
    return {
      show: false,
      loggedIn: false,
      active: null
    };
  },
  mounted() {
    $(document).click(function(event) {
      $(".navbar-collapse").collapse("hide");
    });
  },
  created() {
    this.$root.$on("close-what-modal", () => {
      this.active = null;
    });

    this.$root.$on("close-impact-modal", () => {
      this.active = null;
    });
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    },
    toggleUser() {
      this.loggedIn = !this.loggedIn;
    },
    toggleWhatModal() {
      this.active = "whatmodal";
      $("#whatModal")
        .modal("show")
        .css("padding-right", 0);
      $("body").addClass("modal-open");
      $("#impactModal").modal("hide");
    },
    toggleImpactModal() {
      this.active = "impactmodal";
      $("#whatModal").modal("hide");
      $("body").addClass("modal-open");
      $("#impactModal")
        .modal("show")
        .css("padding-right", 0);
    }
  }
};
</script>

<style>
</style>
