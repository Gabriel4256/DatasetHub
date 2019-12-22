<template>
  <!-- Navbar: Floating-->
  <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
  <header v-bind:class="navBarClass">
    <div class="container">
      <div class="d-table-cell align-middle pr-md-3">
        <router-link :to="{path: '/'}" tag='a' class="navbar-brand mr-1">
          <img src="img/logo/logo-dark.png" alt="CreateX" />
        </router-link>
      </div>
      <div class="d-table-cell align-middle w-100 pl-md-3">
        <div class="navbar justify-content-end justify-content-lg-between">
          <!-- Search-->
          <form v-bind:class="{'search-box': true, 'is-open': searchBarOpen}" method="get">
            <input type="text" id="site-search" placeholder="Type A or C to see suggestions" />
            <span class="search-close" v-on:click="()=>this.searchBarOpen = false">
              <i class="fe-icon-x"></i>
            </span>
          </form>
          <!-- Main Menu-->
          <ul class="navbar-nav d-none d-lg-block">
            <!-- Home-->
            <li class="nav-item active">
              <a class="nav-link" href="HOME.html">Home</a>
            </li>
            <!-- Download-->
            <li class="nav-item">
              <a class="nav-link" href="DOWNLOAD.html">Download</a>
            </li>
            <!-- How to-->
            <li class="nav-item">
              <a class="nav-link" href="HOWTO.html">How to</a>
            </li>
          </ul>
          <div>
            <ul class="navbar-buttons d-inline-block align-middle">
              <li class="d-block d-lg-none">
                <a href="#mobile-menu" v-on:click="showMenu">
                  <i class="fe-icon-menu"></i>
                </a>
              </li>
              <li>
                <a data-toggle="search" v-on:click="()=>this.searchBarOpen = true">
                  <i class="fe-icon-search"></i>
                </a>
              </li>
            </ul>
            <router-link :to="{path: '/account'}" class="btn btn-gradient ml-3 d-none d-xl-inline-block">Account</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    showMenu: Function
  },
  data: function() {
    return {
      navBarClass: {
        "navbar-wrapper": true,
        "navbar-sticky": true,
        "navbar-floating": (this.$route.name === "home"),
      },
      searchBarOpen: false
    }
  },
  watch: {
    // watch and update the value of navbar-floating value 
    "$route.name": function(val){
      this.navBarClass['navbar-floating'] = (val === "home");
    }
  },
  mounted: function(){
    // console.log("dssd")
    this.navBarClass['navbar-floating'] = (this.$route.name === "home");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
