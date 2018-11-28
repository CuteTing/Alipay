<template>
  <div class="mine">
  	<header>
  		<div class="head">
  			<p>我的</p>
      
  			<p><router-link to="/Setting">设置</router-link></p>
      
  		</div>
  		<div class="person">
  			<div class="per_img">
  				<img src="../../static/img/mine/mine_03.jpg">
  			</div>
  			<div class="per_info">
  				<p>杨大力</p>
  				<p>152****9257</p>
  			</div>
  			<div class="per_more">
  				<router-link to="/Personal_details">></router-link>
  			</div>
  		</div>
  	</header>
    <mine-info></mine-info>
    <app-footer></app-footer>
  </div>
</template>

<script>

import mine_info from './Mine_info'
import footer from './footer'

export default {
  name: 'mine',
  data () {
  	return {

  	}
    
  },
  components:{
    "mine-info":mine_info,
    "app-footer":footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  background: #1e82d2;
  color: #fff;
  padding: 0 .8rem;
}
header .head{
  display: flex;
  padding: .8rem 0;
  font-size: 1.5rem;
}
header .head p{
  width: 50%;
  text-align: right;
}
header div.person{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .8rem 0;
}
header div.person div{
  width: 33%;
  text-align: center;
}
header div.person .per_img img{
  width: 80%;
}
header div.person .per_info{
  text-align: left;
  line-height: 2.5rem;
}
header div.person .per_info p{
  padding: .2rem .5rem;
  color: #98c7eb;
}
header div.person .per_info p:first-child{
  font-size: 2rem;
  color: #fff;
}
header div.person .per_more{
  text-align: right;
  font-size: 1.6rem;
}
header a{
  color: #fff;
}

footer ul.f-list li.first i{
	background: url(../../static/img/mine/mine_01.jpg) no-repeat;
    background-size: 100%;
}
footer ul.f-lis li.five i{
	background: url(../../static/img/mine/mine_26.jpg) no-repeat;
    background-size: 100%;
}
</style>