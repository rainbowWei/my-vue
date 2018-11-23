<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to='/'>首页</router-link>|
      <router-link to='/Hi'>Hi页面</router-link>|
      <router-link :to="{name:'hi1',params:{username:'rainbow',id:'888'}}">Hi页面1</router-link>|
      <router-link to='/Hi/hi2'>Hi页面2</router-link>|
      <router-link to='/params/520/rainbow_weiC'>params</router-link>|
      <router-link to='/gohome'>gohome</router-link>|
      <router-link to='/goparams/888/I love you'>goparams</router-link>|
      <router-link to='/rainbow'>rainbow</router-link>|
    </div>
    <p>{{$route.name}}</p>
    <router-view></router-view>
    <router-view name='left' style="float:left;width:50%;height:300px;background-color:#ccc"></router-view>
    <router-view name='right' style="float:left;width:50%;height:300px;background-color:pink"></router-view>
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
  margin-top: 60px;
}
</style>
