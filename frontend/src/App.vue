<template>
<div>
  <router-view name="menuAndBar"></router-view>
  <!-- <NavBar v-bind:isFloating="true" v-bind:isSticky="true"/> -->
  <router-view></router-view>
  <Footer />
</div>
</template>
<script>
// import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {Footer},
  props: {
    source: String
  },

  data: () => ({
    drawer: null,
  }),
  created () {
      this.$vuetify.theme.dark = true
  },
};
</script>
