<template>
  <div class="home">
    <!-- <NavBar :showSideMenu="showSideMenu"/> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld
      buttonName= "go to labeling page" 
      v-bind:response="response"
    />-->
    <section
      class="bg-center bg-no-repeat py-5 mt-lg-5"
      style="background-image: url(img/homepages/digital-agency/hero-bg.png);"
    >
      <div class="row no-gutters pt-lg-5 mt-lg-5">
        <div class="col-xl-7 col-lg-8">
          <img class="d-block" src="img/homepages/digital-agency/hero-img.jpg" alt="Hero Image" />
        </div>
        <div class="col-lg-4 pt-xl-5">
          <div class="px-3 px-lg-0 text-center text-lg-left">
            <h1 class="pt-md-5 pb-md-4 pt-3 pb-3 pt-md-0 pb-md-5">We do all the hard work for you</h1>
            <a
              class="scroll-to btn btn-style-4 btn-gradient btn-icon-right btn-lg"
              href="#"
              v-scroll-to="'#projects'"
            >
              Learn How
              <i class="fe-icon-arrow-down"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- <OffCanvasMenu :inView="IsSideMenuInView" :hide="hideSideMenu"/> -->
    <Statistics />
    <DatasetsOverview v-bind:mode="true" />
    <TeamIntro />
    <HowToDo />
    <Contact />
    <!-- <Footer /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import NavBar from '@/components/NavBar.vue'
import Statistics from "@/components/Statistics.vue";
// import OffCanvasMenu from '@/components/OffCanvasMenu'
import DatasetsOverview from "@/components/DatasetsOverview";
import TeamIntro from "@/components/TeamIntro";
import HowToDo from "@/components/HowToDo";
import Contact from "@/components/Contact";
// import Footer from '@/components/Footer'
// import axios from 'axios'

export default {
  name: "home",
  components: {
    Statistics,
    DatasetsOverview,
    TeamIntro,
    HowToDo,
    Contact
  },
  data: function() {
    return {
      IsSideMenuInView: false
    };
  },
  methods: {
    showSideMenu: function() {
      this.IsSideMenuInView = true;
    },
    hideSideMenu: function() {
      this.IsSideMenuInView = false;
    },
  }
  // data : function(){
  //   return {
  //     response: ""
  //   }
  // },
  // methods: {
  //   sendAjaxRequest: function() {
  //     axios.get('/api/img').then((res) => {
  //       this.response = res.data.options
  //     })
  //   },
  //   openPopup: function(){
  //     // window.open('/#/popup/labeling')
  //   }
  // }
};
</script>
