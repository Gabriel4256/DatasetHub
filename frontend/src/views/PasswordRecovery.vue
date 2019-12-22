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
              <router-link to="{path: '/'}">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="{path:'/account'}" >Account</router-link>
            </li>
          </ol>
        </nav>
        <h1 class="page-title-heading">Password Recovery</h1>
      </div>
    </div>
    
    <!-- Page Content-->
    <div class="container pb-5 mb-4">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <h2 class="h4">Forgot your password?</h2>
          <p>Change your password in three easy steps. This helps to keep your new password secure.</p>
          <ol class="list-unstyled">
            <li>
              <span class="font-weight-medium text-accent">1.</span> Fill in your email address below.
            </li>
            <li>
              <span class="font-weight-medium text-accent">2.</span> We'll email you a temporary code.
            </li>
            <li>
              <span class="font-weight-medium text-accent">3.</span> Use the code to change your password on our secure website.
            </li>
          </ol>
          <form class="wizard needs-validation" novalidate>
            <div class="wizard-body pt-4">
              <label for="email-for-pass">Enter your email address</label>
              <input class="form-control" type="email" required id="email-for-pass" />
              <div class="invalid-feedback">Please enter valid email address!</div>
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="wizard-footer py-3">
              <button class="btn btn-primary" type="submit">Get New Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordRecovery"
};
</script>

<style>
</style>