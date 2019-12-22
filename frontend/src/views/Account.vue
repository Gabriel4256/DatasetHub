<template>
  <div>
    <!-- Page Title-->
    <div
      class="page-title d-flex"
      aria-label="Page title"
      style="background-image: url(img/page-title/shop-pattern.jpg);"
    >
      <div class="container text-left align-self-center">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="account-orders.html">Account</a>
            </li>
          </ol>
        </nav>
        <h1 class="page-title-heading">Login / Register Account</h1>
      </div>
    </div>

    <!-- Page Content-->
    <div class="container mb-3">
      <div class="row">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  name: "Account",
  components: { LoginForm, RegisterForm}
};
</script>

<style>
</style>