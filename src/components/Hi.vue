<template>
  <div>
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Hi page'
    }
  }
}
</script>

<style scoped>

</style>
