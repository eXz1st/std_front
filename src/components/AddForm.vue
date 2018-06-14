<template>
    <div>
    <div class="container p-5 inf-about-good">
      <div class="row">
        <div class="col-md-12">
         <div class="card rounded-0">
            <div class="card-header">
                <h3 v-if="item.id === 0 || item.id === undefined" class="mb-0">Add product page</h3>
                <h3 v-else class="mb-0">Editing product page</h3>
            </div>
            <div class="card-body">
                <div class="form" role="form" id="singleAdd">
                    <img v-if="item.image" class="good_photo" id="img" :src="item.image" alt="Image">
                    <div class="form-group">
                        <label for="">Category</label>
                        <v-select id="category" :options="categories" v-model="item.category" aria-required=""></v-select>
                    </div>
                    <div class="form-group">
                        <label for="">Title</label>
                        <input type="text" class="form-control form-control-lg rounded-0" placeholder="Title" name="price" v-model="item.name" required="">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea name="description" class="form-control form-control-lg rounded-0" placeholder="Description" cols="30" rows="10" v-model="item.description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="">Price</label>
                        <input type="text" class="form-control form-control-lg rounded-0" placeholder="Price" name="price" v-model="item.price" required="">
                    </div>
                    <div class="form-group">
                        <label for="">Published</label>
                        <input type="checkbox" id="checkbox" name="published" v-model="item.published">
                    </div>
                    <div class="form-group">
                      <label for="">Image</label>
                      <br>
                      <input type="file" name="image" accept="image/jpeg,image/png,image/gif" @change="sync">
                    </div>
                    <div class="form-group">
                      <button class="btn btn-success btn-lg" v-if="isAuth" @click="save()">Save</button>
                      <router-link class="btn btn-danger btn-lg" :to="{name: 'Index'}">Cancel</router-link>
                    </div>
                </div>
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
  name: 'AddForm',
  data () {
    return {
      image: '',
      errors: []
    }
  },
  computed: {
    ...mapState({
      item: 'addItem',
      isAuth: 'isAuth',
      user: 'user',
      categories: 'arrayCategories'
    })
  },
  methods: {
    save: function () {
      if (this.image !== '') {
        this.item.image = this.image
      }
      this.checkForm(this.item)
      if (this.errors.length === 0) {
        this.item.user_id = this.user.id
        this.$store.dispatch('save', {item: this.item})
          .then(() => {
            this.$router.push({name: 'Index'})
          })
      } else {
        var msg = ''
        this.errors.forEach(element => {
          msg += element + '\n'
        })
        alert(msg)
      }
    },
    sync: function (e) {
      e.preventDefault()
      if (this.$el.querySelector('#img')) {
        this.$el.querySelector('#img').remove()
      }
      this.image = e.target.files[0]
    },
    checkForm: function (item) {
      this.errors = []
      if (!item.image) this.errors.push('Please select the image.')
      if (!item.category) this.errors.push('Please enter the category.')
      if (!item.name) this.errors.push('Please enter the title.')
      if (!item.description) this.errors.push('Please enter the description.')
      if (!item.price) {
        this.errors.push('Please enter the price.')
      } else {
        if (isNaN(parseInt(item.price))) this.errors.push('Incorrect price.')
      }
    }
  },
  created () {
    if (this.$route.params.id) {
      this.$store.dispatch('loadById', {id: this.$route.params.id})
    } else {
      this.$store.state.addItem = {}
    }
  }
}
</script>

<style scoped>
.good_photo {
  height: 220px;
  width: 300px;
}
</style>
