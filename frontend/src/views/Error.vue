<template>
  <!-- Page Content-->
  <div class="container py-5 mb-4 text-center">
    <h1 class="display-404">404</h1>
    <h2 class="h3">Page Not Found</h2>
    <p class="text-muted">
      It seems we can’t find the page you are looking for.
      <router-link
        :to="{path: '/'}"
        class="font-weight-medium"
      >Go Back To Homepage</router-link>
      <br />Or try using search at the top right corner of the page.
    </p>
  </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style>
</style>