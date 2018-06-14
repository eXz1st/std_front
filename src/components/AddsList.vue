<template>
  <div>
    <div class="row m-auto p-3">
      <router-link class="btn btn-success btn-lg float-right text-center ml-auto" v-if="auth" :to="{name: 'AddForm'}">Add New</router-link>
    </div>
    <div class="container goods pt-3">
      <ul class="list-group" v-if="list.length != 0">
          <li v-for="item in paginatedData" :key="item.id" class="list-group-item">
          <div class="row">
            <div class="col-md-4">
              <img class="good_preview_photo" :src="item.image" alt="Image">
            </div>
            <div class="col-md-6">
              <div class="row good-title">{{item.name}}</div>
              <div class="row good-price">Price: {{item.price}}</div>
              <div class="row good-description">{{item.description}}</div>
              <hr>
              <div class="row"><span class="good-category text-muted">{{item.category}}</span></div>
            </div>
            <div class="col-md-2">
              <div class="d-none item_id">{{item.id}}</div>
              <br><br>
              <router-link class="btn btn-success btn-lg float-right text-center" :to="{name: 'ProductPage', params: {id: item.id}}">More</router-link>
              <br><br>
              <router-link class="btn btn-success btn-lg float-right text-center" v-if="user.id === item.user_id" :to="{name: 'AddForm', params: {id: item.id}}">Edit</router-link>
              <br><br>
              <button class="btn btn-success btn-lg float-right text-center" v-on:click="deleteItem" v-if="user.id === item.user_id || user.role === 'admin'">Delete</button>
              <br><br>
            </div>
          </div>
        </li>
      </ul>
      <h2 v-else class="text-muted">Product list is empty</h2>
      <div class="pagination_block">
        <button class="pagination prev" :disabled="this.$store.state.pageNumber === 0"  @click="prevPage">Previous</button>
        <button class="pagination next" :disabled="this.$store.state.pageNumber >= pageCount -1" @click="nextPage">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddsList',
  computed: {
    ...mapState({
      list: 'addsList',
      auth: 'isAuth',
      user: 'user'
    }),
    pageCount: function () {
      let l = this.list.length
      let s = this.$store.state.size
      return Math.floor(l / s)
    },
    paginatedData: function () {
      if (this.$store.state.pageNumber >= 0 && this.$store.state.pageNumber <= this.pageCount) {
        const start = this.$store.state.pageNumber * this.$store.state.size
        const end = start + this.$store.state.size
        let resultArray = Array.from(this.list).slice(start, end)
        return resultArray
      }
    }
  },
  methods: {
    deleteItem: function (e) {
      let id = e.target.parentNode.querySelector('.item_id').innerHTML
      this.$store.dispatch('delete', {id: id})
        .then(() => {
          this.$router.push({name: 'Index'})
        })
    },
    nextPage: function () {
      this.pageNumber++
      let page = this.pageNumber + 1
      history.pushState(null, null, '/page/' + page)
    },
    prevPage: function () {
      this.pageNumber--
      let page = this.pageNumber + 1
      history.pushState(null, null, '/page/' + page)
    }
  }
}
</script>

<style scoped>
.goods {
  margin-bottom: 100px;
}

.goods .list-group-item {
  border: 1px solid #2195d3 !important;
}

.good_preview_photo {
  height: 220px;
  width: 300px;
  margin: 20px;
}

.pagination_block {
  margin: 20px;
}

.pagination {
  height: 40px;
  width: 100px;
  background-color: #2195d3;
  color: white;
  border: none;
  text-align: center;
  display: block;
  float: left;
  margin: 10px;
  cursor: pointer;
  opacity: 0.7;
}

.pagination:hover {
  opacity: 1;
}

.prev {
  float: left;
}

.next {
  float: right;
}

.good-category {
  margin: 0 auto !important;
}
</style>
