<template>
  <div class="form">
    <h1>Editing add page: </h1>
    <h3>Add Id: {{ $route.params.id }}</h3>
    <input v-model="item.name"/>
    <br /><br />
    <button @click="save()">Save</button>
     &nbsp;&nbsp;
    <router-link :to="{name: 'AddsList'}">Cancel</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddForm',
  computed: {
    ...mapState({
      item: 'addItem'
    })
  },
  methods: {
    save: function () {
      this.$store.dispatch('save', {item: this.item})
        .then(() => {
          this.$router.push({name: 'AddsList'})
        })
    }
  },
  created () {
    this.$store.dispatch('loadById', {id: this.$route.params.id})
  }
}
</script>
