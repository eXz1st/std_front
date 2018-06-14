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
                    <div style="color: red" v-if="this.hasError">
                      Something went wrong
                    </div>
                    <div class="form-group">
                        <label for="login">Username</label>
                        <input type="text" class="form-control form-control-lg rounded-0" placeholder="Login" name="login" v-model="login" required="">
                        <div class="invalid-feedback">Oops, you missed this one.</div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control form-control-lg rounded-0" placeholder="Password" name="pass" v-model="password" required="" >
                        <div class="invalid-feedback">Enter your password too!</div>
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <input type="password" class="form-control form-control-lg rounded-0" placeholder="Password Confirmation" name="confPass" v-model="confPassword" required="">
                        <div class="invalid-feedback">Passwords do not match</div>
                    </div>
                    <button class="btn btn-success btn-lg float-right" @click="registerAction">Register</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: '',
      password: '',
      confPassword: '',
      hasError: false,
      errorMessage: 'Something went wrong',
      role: 'user'
    }
  },
  methods: {
    registerAction: function () {
      if (!this.isAuth) {
        if (this.password === this.confPassword) {
          this.$store.dispatch('register', {login: this.login, password: this.password, role: this.role})
            .then(() => {
              this.hasError = false
              this.passwordError = false
              this.$router.push({name: 'Index'})
            }).catch(err => {
              this.errorMessage = 'Something went wrong'
              this.hasError = true
              console.log(err)
            })
        } else {
          this.errorMessage = 'Passwords do not match'
          this.hasError = true
        }
      }
    }
  },
  created () {
    if (this.isAuth) {
      this.$router.push({name: 'Page404'})
    }
  }
}
</script>
