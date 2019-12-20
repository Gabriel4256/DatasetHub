<template>
  <div class="navBar">
    <!-- Navbar: Floating-->
    <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page.-->
    <header class="navbar-wrapper navbar-floating navbar-floating navbar-sticky">
      <div class="container">
        <div class="d-table-cell align-middle pr-md-3">
            <a class="navbar-brand mr-1" href="HOME.html">
                <img src="img/logo/logo-dark.png" alt="CreateX"/>
            </a>
        </div>
        <div class="d-table-cell align-middle w-100 pl-md-3">
          <div class="navbar justify-content-end justify-content-lg-between">
            <!-- Search-->
            <form v-if="searchBoxIsOpen" class="search-box is-open" method="get">
                <input type="text" id="site-search" placeholder="Type A or C to see suggestions">
                    <span class="search-close" v-on:click="toggleSearchBox">
                        <i class="fe-icon-x"></i>
                    </span>
            </form>
            <!-- Main Menu-->
            <ul class="navbar-nav d-none d-lg-block">
              <!-- Home-->
              <li class="nav-item active"><a class="nav-link" href="HOME.html">Home</a>
              </li>
              <!-- Download-->
              <li class="nav-item"><a class="nav-link" href="DOWNLOAD.html">Download</a></li>
              <!-- How to-->
              <li class="nav-item"><a class="nav-link" href="HOWTO.html">How to</a></li>
            </ul>
            <div>
              <ul class="navbar-buttons d-inline-block align-middle">
                <li class="d-block d-lg-none"><a v-on:click="showSideMenu"><i class="fe-icon-menu"></i></a></li>
                <li><a v-if="!searchBoxIsOpen" data-toggle="search" v-on:click="toggleSearchBox">
                    <i class="fe-icon-search"></i>
                    </a>
                </li>
              </ul><a class="btn btn-gradient ml-3 d-none d-xl-inline-block" href="ACCOUNT.html">Account</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    buttonName: String,
    showSideMenu: Function,
    response: String
  },
  data : function(){
    return {
      searchBoxIsOpen : false
    }
  },
  methods : {
    toggleSearchBox: function(){
        this.searchBoxIsOpen = !this.searchBoxIsOpen;
        this.$refs.bb.onClickMethod = this.aa;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
    cursor: pointer;
}

</style>
