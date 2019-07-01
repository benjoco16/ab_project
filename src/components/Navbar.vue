<template>
  <nav class="navbar navbar-expand-lg navbar-transparent navbar-ab"
    :class="{ 'navbarOpen' : show }"
  >
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand mr-5">
        <img src="@/assets/img/logo.png" alt="logo" class="img-fluid">
      </router-link>

      <button class="navbar-toggler btn-primary" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <icon icon="bars" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav"
        :class="{ 'show': show }"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="javascript:;" class="nav-link pl-0 pr-0 mr-4" role="button" data-toggle="modal" data-target="#whatModal"
            >What we do</a>
          </li>
          <li class="nav-item">
            <a href="javascript:;" class="nav-link pl-0 pr-0 mr-4" data-toggle="modal" data-target="#impactModal">
              Make an Impact
            </a>
          </li>
          <li class="nav-item">
            <a href="jascript:;" class="nav-link" data-toggle="modal" data-target="#searchModal">
              <icon icon="search" />
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto align-items-center">
          <li class="nav-item avatar-container" v-show="loggedIn">
            <div class="row">
              <div class="col-md-4">
                <img src="https://i.pravatar.cc/300?img=9" alt="profile" class="rounded-circle avatar-profile">
              </div>
              <div class="col-md-8">
                <p class="text-uppercase mb-2">Partner</p>
                <p class="text-uppercase text-size-2 mb-0">Darlyn Agbon</p>
                <a href="javascript:;" class="text-size-2">Go to my dashboard</a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <button class="btn btn-m-block btn-primary my-2 my-sm-0 nav-link mr-3" type="button">Sign up</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-m-block btn-secondary my-2 my-sm-0 nav-link" type="button" @click="toggleUser">Log in</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  data () {
    return {
      show: false,
      loggedIn: false
    }
  },
  mounted () {
    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide')
    })
  },
  methods: {
    toggleNavbar () {
      this.show = !this.show
    },
    toggleUser () {
      this.loggedIn = !this.loggedIn
    }
  }
}
</script>

<style>

</style>
