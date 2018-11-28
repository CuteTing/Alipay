<template>
  <div class="friends">
    <header>
    	<div class="head">
  			<p>朋友</p>   
  			<p><span></span><span></span></p>
  		</div>
    </header>
    <section>
  			<ul>
  				<li>
  					<p class="sec_img"><span></span></p>
  					<p>生活号</p>
  					<p>出行途中的美齿小</p>
  				</li>
  				<li>
  					<router-link to="/Applet">
	  					<p class="sec_img"><span></span></p>
	  					<p>小程序</p>
	  					<p>发现更多服务</p>
	  				</router-link>
  				</li>
  				<li>
  					<router-link to="/Life_area">
	  					<p class="sec_img"><span></span></p>
	  					<p>生活圈</p>
	  					<p>和朋友分享生活</p>
	  				</router-link>
  				</li>
  			</ul>
  		</section>
  		<article>
  			<div class="art_info">
				<div class="art_f_left">
					<img src="../../static/img/remind/friends_21.jpg">
				</div>
				<div class="art_f_right">
					<router-link to="/Services"><p><span>服务提醒（含支付助手）</span><span>11:07</span></p>
					<p>又有好友收了你的绿色能量</p></router-link>
				</div>
  			</div>
  			<div class="art_info">
				<div class="art_f_left">
					<img src="../../static/img/remind/friends_25.jpg">
				</div>
				<div class="art_f_right">
					<p><span>快乐的哒</span><span>11:07</span></p>
					<p>又有好友收了你的绿色能量</p>
				</div>
  			</div>
  			<div class="art_info">
				<div class="art_f_left">
					<img src="../../static/img/remind/friends_28.jpg">
				</div>
				<div class="art_f_right">
					<p><span>服务提醒（含支付助手）</span><span>11:07</span></p>
					<p>又有好友收了你的绿色能量</p>
				</div>
  			</div>
  		</article>
  		<app-footer></app-footer>
  </div>
</template>

<script>

import footer from './footer'

export default {
  name: 'friends',
  data () {
  	return {

  	}
    
  },
  components:{
    "app-footer":footer
  },
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
  align-items: center;
  font-size: 2rem;
}
header .head p{
  width: 50%;
  text-align: right;
}
header .head p span{
	display: inline-block;
	width: 2rem;
	height: 2rem;
}
header .head p>span:nth-child(1){
	width: 3rem;
	background: url(../../static/img/remind/friends_03.jpg) no-repeat;
	-webkit-background-size: contain;
	background-size: contain;
	margin-right: 1.5rem;
}
header .head p>span:nth-child(2){
	background: url(../../static/img/remind/friends_05.jpg) no-repeat;
	-webkit-background-size: contain;
	background-size: contain;
}
section ul{
	display: flex;
	padding:  .8rem;
	align-items: center;
	background: #fff;
	font-size: 1.5rem;
	border-bottom: 1px solid #ececec;
	margin-bottom: 1rem;
}

section ul li{
	width: 33%;
	border-right: 1px solid #ececec;
	padding: 0 .5rem;
	line-height: 1.6rem;
}
section ul li:last-child{
	border: none;
}
section ul li p{
	text-align: center;
}
section ul li p span{
	display: inline-block;
	width: 5rem;
	height: 5rem;
}
section ul li:nth-child(1) p.sec_img>span{
	background: url(../../static/img/remind/friends_10.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
section ul li:nth-child(2) p.sec_img>span{
	background: url(../../static/img/remind/friends_13.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}

section ul li:nth-child(3) p.sec_img>span{
	background: url(../../static/img/remind/friends_15.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
section ul li p:nth-child(3){
	text-align: center;
	width: 100%;
	color: #a5a5a5;
	font-size: 1.3rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
article{
	background: #fff;
}
article div.art_info{
	display: flex;
	padding: 1rem;
	border: 1px solid #ececec;
}
article div.art_info a{
	display: block;
}
article div.art_info .art_f_left img{
	width: 5rem;
}
article div.art_info .art_f_right{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	line-height: 2rem;
	margin-left: .5rem;
}
div.art_info .art_f_right p:nth-child(1) span:nth-child(2),
div.art_info .art_f_right p:nth-child(2){
	color: #a1a1a1;
}
div.art_info .art_f_right p:nth-child(1){
	width: 100%;
	display: flex;
	justify-content: space-between;
}
</style>
