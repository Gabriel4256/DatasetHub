<template>
  <div class="col-md-6 pb-5">
    <h3 class="h4 pb-1">No Account? Register</h3>
    <p>Registration takes less than a minute but gives you full control over your orders.</p>
    <form class="needs-validation" novalidate>
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group">
            <label for="reg-fn">First Name</label>
            <input class="form-control" type="text" required id="reg-fn" />
            <div class="invalid-feedback">Please enter your first name!</div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="reg-ln">Last Name</label>
            <input class="form-control" type="text" required id="reg-ln" />
            <div class="invalid-feedback">Please enter your last name!</div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="reg-email">E-mail Address</label>
            <input class="form-control" type="email" required id="reg-email" />
            <div class="invalid-feedback">Please enter valid email address!</div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="reg-phone">Phone Number</label>
            <input class="form-control" type="text" required id="reg-phone" />
            <div class="invalid-feedback">Please enter your phone number!</div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="reg-password">Password</label>
            <input class="form-control" type="password" required id="reg-password" />
            <div class="invalid-feedback">Please enter password!</div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <label for="reg-password-confirm">Confirm Password</label>
            <input class="form-control" type="password" required id="reg-password-confirm" />
            <div class="invalid-feedback">Passwords do not match!</div>
          </div>
        </div>
      </div>
      <div class="text-right">
        <button class="btn btn-primary" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm"
};
</script>

<style>
</style>