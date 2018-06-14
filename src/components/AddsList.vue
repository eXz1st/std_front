<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="item in list" :key="item.id">
        <router-link :to="{name: 'AddForm', params: {id: item.id}}">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AddsList',
  data () {
    return {
      msg: 'Welcome to AddsList'
    }
  },
  computed: {
    ...mapState({
      list: 'addsList'
    })
  }
}
</script>
