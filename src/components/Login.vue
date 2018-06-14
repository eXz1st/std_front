<template>
  <div class="hello">
    <div class="row pt-5">
      <div class="col-md-4 mx-auto">
        <div class="card rounded-0">
            <div class="card-header">
                <h3 class="mb-0">Login</h3>
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
                        <input type="password" class="form-control form-control-lg rounded-0" placeholder="Password" name="password" v-model="password" required="">
                        <div class="invalid-feedback">Enter your password too!</div>
                    </div>
                    <button class="btn btn-success btn-lg float-right" @click="loginAction">Login</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      login: '',
      password: '',
      hasError: false,
      limit: 10,
      page: 1
    }
  },
  computed: {
    ...mapState(['isAuth'])
  },
  methods: {
    loginAction: function () {
      if (!this.isAuth && this.login !== '' && this.password !== '') {
        this.$store.dispatch('login', {login: this.login, password: this.password})
          .then(() => {
            this.hasError = false
            this.$router.push({name: 'Index'})
          }).catch(err => {
            this.hasError = true
            console.log(err)
          })
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
