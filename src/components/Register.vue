<template>
  <div class="hello">
    <div class="row pt-5">
      <div class="col-md-4 mx-auto">
        <div class="card rounded-0">
            <div class="card-header">
                <h3 class="mb-0">Register</h3>
            </div>
            <div class="card-body">
                <div class="form" role="form">
                    <div style="color: red">
                      Something went wrong
                    </div>
                    <div class="form-group">
                        <label for="login">Username</label>
                        <input type="text" class="form-control form-control-lg rounded-0" placeholder="Login" name="login" required="">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control form-control-lg rounded-0" placeholder="Password" name="pass" required="" >
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control form-control-lg rounded-0" placeholder="Password Confirmation" name="confPass" required="">
                    </div>
                    <button class="btn btn-success btn-lg float-right">Register</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
    }
  }
}
</script>
