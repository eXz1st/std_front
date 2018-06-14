<template>
    <div>
    <div class="container p-5 inf-about-good">
      <div class="row">
        <div class="col-md-12">
         <div class="card rounded-0">
            <div class="card-header">
                <h3 class="mb-0">Information</h3>
            </div>
            <div class="card-body">
                <div class="form" role="form">
                    <img class="good_photo" :src="item.image" alt="Image">
                     <div class="form-group">
                        <label>Title</label>
                        <div>{{item.name}}</div>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <div>{{item.description}}</div>
                    </div>
                    <div class="form-group">
                        <label for="">Price</label>
                        <div>{{item.price}}</div>
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
  name: 'ProductPage',
  computed: {
    ...mapState({
      item: 'addItem',
      user: 'user'
    })
  },
  created () {
    this.$store.dispatch('loadById', {id: this.$route.params.id})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.good_photo {
  height: 220px;
  width: 300px;
}
</style>
