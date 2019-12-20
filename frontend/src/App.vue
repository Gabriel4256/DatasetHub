<template>
  <router-view></router-view>
</template>
<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  props: {
    source: String
  },
  // components: {
  //   HelloWorld,
  // },

  data: () => ({
    drawer: null,
  }),
  created () {
      this.$vuetify.theme.dark = true
  },
};
</script>
