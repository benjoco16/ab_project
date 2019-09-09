<template>
  <div id="app">
    <navbar-impact v-if="['make-impact'].includes($route.name)" />
    <navbar v-else />
    <router-view />
    <search-modal />
    <what-modal />
    <impact-modal />
    <!-- Begin footer bottom -->
    <div
      id="footer-bottom"
      class="footer-bottom d-flex"
      :class="{ 'mb-override--impact' : $route.name === 'make-impact', 'mb-override-footer--home' : $route.name === 'home' }"
    >
      <div class="container">
        <ul class="list-inline mx-auto flex-links">
          <li
            v-for="footerLink in footerLinks"
            :key="footerLink.name"
            class="list-inline-item text-capitalize mr-4 align-middle"
          >
            <router-link
              :to="{ name: footerLink.path }"
              class="text-color--primary text-color--white text-size-2"
            >{{ footerLink.name }}</router-link>
          </li>
          <li class="list-inline-item mr-4">
            <a href="#">
              <img src="./assets/img/fb-small.png" alt="fb" class="img-fluid" />
            </a>
          </li>
          <li class="list-inline-item mr-4">
            <a href="#">
              <img src="./assets/img/insta-small.png" alt="fb" class="img-fluid" />
            </a>
          </li>
          <li class="list-inline-item mr-4">
            <a href="#">
              <img src="./assets/img/in-small.png" alt="fb" class="img-fluid" />
            </a>
          </li>
          <li class="list-inline-item ml-auto">
            <img src="./assets/img/seaoil.png" alt="fb" class="img-fluid" />
          </li>
        </ul>
      </div>
    </div>
    <!-- End footer bottom -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import NavbarImpact from "./components/NavbarImpact";
import searchModal from "@/components/SearchModal";
import WhatModal from "@/components/WhatModal";
import ImpactModal from "@/components/ImpactModal";

export default {
  components: { Navbar, searchModal, NavbarImpact, WhatModal, ImpactModal },
  data() {
    return {
      footerLinks: [
        {
          name: "About",
          path: "home"
        },
        {
          name: "User Support",
          path: "home"
        },
        {
          name: "Our Communities",
          path: "our-communities"
        },
        {
          name: "Connect With Us",
          path: "home"
        },
        {
          name: "User Policies",
          path: "home"
        },
        {
          name: "Copyright Notice",
          path: "home"
        }
      ]
    };
  }
};
</script>
