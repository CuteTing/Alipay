<template> 
  <header>
      <div class="select">
          <div class="select_left">
              <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
              <input type="text" placeholder="热门电影：蓝精灵：寻找神秘树">  
              <img src="../../static/img/voucher_center/voucher_center_05.jpg" alt="">
          </div>
          <div class="select_right">
              <img src="../../static/img/voucher_center/voucher_center_07.jpg" alt="">
              <img src="../../static/img/voucher_center/voucher_center_09.jpg" alt="">
          </div>
      </div>
      <div class="h_nav">
          <ul>
            <li v-for="item in msg">
               <router-link v-bind:to="item.link" >
                  <img v-bind:src="item.url" alt="">
                  <span>{{item.text}}</span>
                </router-link>
            </li>
            <!-- <li v-for="item in msg">
              <router-link to="/Scan">
                <img src="../../static/img/voucher_center/voucher_center_15.jpg" alt="">
                <span>扫一扫</span>
              </router-link>
            </li>
            <li>
               <router-link to="/Collect">
                <img src="../../static/img/voucher_center/voucher_center_17.jpg" alt="">
                <span>收钱</span>
              </router-link>
            </li>
            <li>
                <img src="../../static/img/voucher_center/voucher_center_20.jpg" alt="">
                <span>付钱</span>
            </li>
            <li>
                <img src="../../static/img/voucher_center/voucher_center_23.jpg" alt="">
                <span>卡包</span>
            </li> -->

          </ul>
      </div>
  </header>
    
</template>

<!-- <link rel="stylesheet" type="text/css" href="../css/base.css">
<link rel="stylesheet" type="text/css" href="../css/index.css"> -->
<script>
// import { realconsole } from '../../static/plugins/bootstrap-3.3.7/dist/js/bootstrap.min.js'

export default {
  name: 'app-header',

  data() {
    return{
     
  }
    // },
    // created: function () {
    //   var id = this.$router.query.id;
    //   this.getDate(id);
    // }
  },
   props:{
    msg:{
      type: Array,
      required:true
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@import url("../assets/css/index.css");

header a{
  color: #fff;
}
header a:hover{
  color: #fff;
}
</style>
