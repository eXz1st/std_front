<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="nav-link" href="">Market</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Register</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
    <footer class="footer">
      <div class="container">
        <span>Here you can buy everything!</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar.navbar-expand-lg.navbar-light.bg-light {
  background-color: #2195d3 !important;
  color: white;
}
.navbar-brand, .nav-link {
  color: white !important;
}
.card {
  border: 1px solid #2195d3 !important;
}
.card-header {
  background-color: #2195d3 !important;
  color: white;
  border-radius: 0;
}
.form-control {
  border: 1px solid #2195d3 !important;
}
textarea {
  border: 1px solid #2195d3 !important;
  width: 100%;
}
label {
  font-weight: bold;
  font-size: 18px;
}
.btn.btn-success.btn-lg.float-right.text-center {
  background-color: #2195d3 !important;
  color: white;
  font-size: 16px;
}
footer {
  background-color: #2195d3 !important;
  height: 40px;
  width: 100%;
  margin-top: 60px;
  position: fixed;
  bottom: 0;
}
footer span {
  color: white !important;
  font-weight: bold;
  font-size: 16px;
  line-height: 40px;
}
.good-title {
  font-size: 20px;
  margin-top: 20px;
}
.good-description {
  text-align: left;
  opacity: 0.7;
  height: 100px;
  overflow: hidden;
}
.good-price {
  font-weight: bold;
}

#logout {
  cursor: pointer;
}

#categories_menu {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #2195d3;
  opacity: 0.9;
}

#categories_menu ul {
  padding: 40px 80px;
}

</style>
