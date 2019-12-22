<template>
    <div class="col-md-6 pb-5">
        <form class="needs-validation wizard" novalidate>
        <div class="wizard-body pt-2">
            <div class="d-sm-flex justify-content-between pb-2"><a class="btn btn-secondary btn-sm btn-block my-2 mr-3" href="#"><i class="socicon-facebook"></i>&nbsp;Login</a><a class="btn btn-secondary btn-sm btn-block my-2 mr-3" href="#"><i class="socicon-twitter"></i>&nbsp;Login</a><a class="btn btn-secondary btn-sm btn-block my-2 mr-3" href="#"><i class="socicon-linkedin"></i>&nbsp;Login</a></div>
            <hr>
            <h3 class="h5 pt-4 pb-2">Or using form below</h3>
            <div class="input-group form-group">
            <div class="input-group-prepend"><span class="input-group-text"><i class="fe-icon-mail"></i></span></div>
            <input class="form-control" type="email" placeholder="Email" required>
            <div class="invalid-feedback">Please enter your email!</div>
            </div>
            <div class="input-group form-group">
            <div class="input-group-prepend"><span class="input-group-text"><i class="fe-icon-lock"></i></span></div>
            <input class="form-control" type="password" placeholder="Password" required>
            <div class="invalid-feedback">Please enter valid password!</div>
            </div>
            <div class="d-flex flex-wrap justify-content-between">
            <div class="custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox" checked id="remember-me">
                <label class="custom-control-label" for="remember-me">Remember me</label>
            </div><a class="navi-link" href="NEW_PASSWORD.html">Forgot password?</a>
            </div>
        </div>
        <div class="wizard-footer text-right">
            <button class="btn btn-primary" type="submit">Login</button>
        </div>
        </form>
    </div>  
</template>

<script>
export default {
    name: "LoginForm"
}
</script>

<style>

</style>