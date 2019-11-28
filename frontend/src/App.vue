<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link to='/'>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- <v-btn color="success" href="/">Home</v-btn> -->
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to='/about'>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to='/labeling'>
          <v-list-item-action>
            <v-icon>mdi-view-module</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- <v-btn color="success" href="/">Home</v-btn> -->
            <v-list-item-title>Labeling</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Test Project</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
        
        <router-view></router-view>
        </v-row>
      
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
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
