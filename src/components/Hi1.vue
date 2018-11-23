<template>
  <div>
    <h1>{{ msg }}-{{$route.params.username}}-{{$route.params.id}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Hi1页面 '
    }
  }
}
</script>

<style scoped>

</style>
