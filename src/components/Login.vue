<template>
  <div class="hello">
    <h1>Login page</h1>
    <div>{{ login }}</div>
    <div>
        <div>
            <input type="text" name="login" v-model="login">
        </div>
        <div>
            <input type="password" name="pass" v-model="pass">
        </div>
        <div>
            <button @click="loginAction">Login</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: 'test',
      pass: 'test'
    }
  },
  methods: {
    loginAction: function () {
      console.log('Login: ' + this.login)
      console.log('Pass: ' + this.pass)
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate')
  }
}
</script>
