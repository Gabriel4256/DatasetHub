<template>
    <!-- Contact Form-->
    <section class="bg-secondary pt-5 pb-3">
      <div class="container py-2">
        <h2 class="h3 block-title text-center">Contact us<small>We'll be glad to answer all your questions. We normally respond within 2 - 3 business days.</small></h2>
        <form class="needs-validation pt-4 pb-5" novalidate>
          <div class="row">
            <div class="col-md-4 col-sm-6 form-group">
              <label for="cont-name">Your Name <span class='text-danger font-weight-medium'>*</span></label>
              <input class="form-control" type="text" id="cont-name" placeholder="John Doe" required>
              <div class="invalid-feedback">Please fill in your name!</div>
            </div>
            <div class="col-md-4 col-sm-6 form-group">
              <label for="cont-email">Email Address <span class='text-danger font-weight-medium'>*</span></label>
              <input class="form-control" type="email" id="cont-email" placeholder="johndoe@example.com" required>
              <div class="invalid-feedback">Please provide valid email address!</div>
            </div>
            <div class="col-md-4 form-group">
              <label for="cont-subject">Subject</label>
              <input class="form-control" type="email" id="cont-subject" placeholder="Title of your message">
            </div>
          </div>
          <div class="form-group">
            <label for="cont-message">Message <span class='text-danger font-weight-medium'>*</span></label>
            <textarea class="form-control" id="cont-message" rows="8" placeholder="Type your message..." required></textarea>
            <div class="invalid-feedback">Please type your message!</div>
          </div>
          <div class="text-center">
            <button class="btn btn-style-4 btn-icon-left btn-primary" type="submit"><i class="fe-icon-mail text-md bg-white text-primary"></i>Send Message</button>
          </div>
        </form>
      </div>
    </section>  
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style>

</style>