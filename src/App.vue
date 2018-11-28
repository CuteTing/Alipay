<template>
  <div id="app">
   <!--  <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <h1>{{title}}</h1>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer> -->
     
     <router-view><router-link to="/Home"></router-link></router-view>
      
  </div>
</template>

<script>

// import Users from './components/Users'
// import header from './components/header'
// import footer from './components/footer'

export default {
  name: 'App',
  data() {
    return{
      // title:"这是我的第一个vue脚手架项目"
     }
   }
}
</script>

<style scoped>
a{text-decoration: none;color: #000;}

</style>
