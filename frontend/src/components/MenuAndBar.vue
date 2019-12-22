<template>
  <div>
    <OffCanvasMenu v-bind:inView="offCanvasMenuVisible" v-bind:hide="toggleOffCanvasMenu" />
    <NavBar v-bind:showMenu="toggleOffCanvasMenu" />
  </div>
</template>

<script>
import OffCanvasMenu from "./OffCanvasMenu.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "MenuAndBar",
  components: { OffCanvasMenu, NavBar },
  data: function() {
    return {
      offCanvasMenuVisible: false
    };
  },
  methods: {
    toggleOffCanvasMenu: function() {
      this.offCanvasMenuVisible = !this.offCanvasMenuVisible;
    }
  },
  updated: function(){
  }
};
</script>

<style>
</style>