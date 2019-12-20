<template>
  <div class="home">
    <NavBar :showSideMenu="showSideMenu"/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld
      buttonName= "go to labeling page" 
      v-bind:response="response"
    /> -->
    <Intro/>
    <OffCanvasMenu :inView="IsSideMenuInView" :hide="hideSideMenu"/>
    <Statistics/>
    <DatasetsOverview/>
    <TeamIntro/>
    <HowToDo/>
    <Contact />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import Statistics from '@/components/Statistics.vue'
import Intro from '@/components/Intro.vue'
import OffCanvasMenu from '@/components/OffCanvasMenu'
import DatasetsOverview from '@/components/DatasetsOverview'
import TeamIntro from '@/components/TeamIntro'
import HowToDo from '@/components/HowToDo'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
// import axios from 'axios'

export default {
  name: 'home',
  components: {
    NavBar, Statistics, Intro, OffCanvasMenu, DatasetsOverview, TeamIntro, HowToDo, Contact, Footer
  },
  data : function(){
    return {
      IsSideMenuInView: false
    }
  },
  methods: {
    showSideMenu: function(){
        this.IsSideMenuInView = true;
    },
    hideSideMenu: function(){
        this.IsSideMenuInView = false
    }    
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
}
</script>
