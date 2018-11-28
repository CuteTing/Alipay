<template>
  <footer class="b_footer">
      <ul class="f-list">
          <li class="first"> <router-link to="/Home"><i></i><span>首页</span></router-link></li>
        
          <li class="second"><i></i><span>财富</span></li>
          <li class="third"><i></i><span>口碑</span></li>
          <li class="four"><router-link to="/Friends"><i></i><span>朋友</span></router-link></li>
        
          <li class="five"><router-link to="/Mine"><i></i><span>我的</span></router-link></li>
        
      </ul>
  </footer>
</template>


<script>
export default {
  name: 'app-footer',
 
  data() {
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("../assets/css/base.css");

</style>
