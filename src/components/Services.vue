<template>
  <div class="services">
    <header>
      <router-link to="/Home">
           <span><i></i>首页</span>
      </router-link>
      <span>服务提醒</span>
      <span>设置</span>
    </header>
    <section class="one">
    	<p class="title"><i></i><span class="center">我的健康</span><span>08:24</span></p>
    	<div class="sec_info">
    		<p class="first">空气污染送健康果咯</p>
    		<p>长沙市今日AQI超过120</p>
    	</div>
    </section>
    <section class="two">
    	<p class="title"><i></i><span class="center">蚂蚁森林</span><span>08:24</span></p>
    	<div class="sec_info">
    		<p class="first">又有好友收了你的绿色能量</p>
    		<p>饶大大在07:26收取</p>
    	</div>
    </section>
    <div class="old_message">
    	<p>以下旧消息</p>
    </div>
    <section class="three">
    	<p class="title"><i></i><span class="center">我的快递</span><span>04-10 16:03</span></p>
    	<div class="sec_info">
    		<p class="first">已取件</p>
    		<div class="expressage">
    			<div class="ex_left">
    				<p>百合御都 百合御都1栋2单元入口西侧A区</p>
    				<p>圆通速递：889076337075418811</p>
    			</div>
    			<div class="ex_right">
    				<img src="../../static/img/remind/remind_11.jpg">
    			</div>
    		</div>
    	</div>
    </section>
    <section class="four">
    	<p class="title"><i></i><span class="center">蚂蚁庄园</span><span>04-10 15:03</span></p>
    	<div class="sec_info">
    		<p class="first">我出去探险了</p>
    		<p>小鸡在15:03离开</p>
    	</div>
    </section>
    <div class="underline">
    	<span class="line"></span><span>我是有底线的</span><span class="line"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'services',
  data () {
  	return {

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	padding: .8rem;
	display: flex;
	justify-content: space-between;
	background: #fff;
	border-bottom: 1px solid #ddd;
}
header a,header span:nth-child(3){
	color: #108ee9;
}
header span i{
	display: inline-block;
	width: 1rem;
	height: 2rem;
	vertical-align: middle;
}
header span:nth-child(1) i{
	background: url(../../static/img/transfer/contact_06.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
	margin-right: .5rem;
}
section{
	padding: 1rem;
	background: #ffff;
	margin-top: 1rem;
	color: #999;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #ddd;
}
section p.title{
	padding: 1rem 0;
}
section p.title i{
	display: inline-block;
	width: 2rem;
	height: 2rem;
	vertical-align: middle;
}
section.one p.title i{
	background: url(../../static/img/remind/remind_03.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
section.two p.title i{
	background: url(../../static/img/remind/remind_06.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
section.three p.title i{
	background: url(../../static/img/remind/remind_08.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
section.four p.title i{
	background: url(../../static/img/remind/remind_14.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
section p.title span.center{
	display: inline-block;
	margin: 0 1rem;
}
section div.sec_info{
	padding-left:  2rem;
	line-height: 2.2rem;
}
section div.sec_info p.first{
	color: #000;
	font-size: 2.2rem;
	padding: 1rem 0;
}
div.old_message{
	padding: 1rem;
	display: flex;
	align-items: center;
}
div.expressage{
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
div.expressage div.ex_left p{
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
div.expressage div.ex_left{
	width: 80%;
}
div.expressage div.ex_right img{
	width: 4.5rem;
}
div.underline{
    height: 5rem;
    padding: 1rem;
    color: #b4b4b5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
}
div.underline span.line{
    display: inline-block;
    width: 8rem;
    border: 1px solid #d8dcda;
}
</style>