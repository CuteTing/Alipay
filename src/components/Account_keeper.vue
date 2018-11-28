<template>
  <div class="account_keeper">
    <header>
      <router-link to="/Setting">
           <span><i></i>返回</span>
      </router-link>
      <span>账户管理</span>
      <span><i></i></span>
    </header>
    <div class="message">
    	<p>支付宝账号</p>
    </div>
    <div class="account">
    	<p><img src="../../static/img/mine/manage_07.jpg">
    	<span>152****9527</span></p>
    	<span class="icon"></span>
    </div>
    <div class="new">
    	<router-link to="/New_login"><p>换个新账户登录</p>
    	<span class="new_go"></span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'account_keeper',
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
header a{
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
header span:nth-child(3) i{
	width: 2rem;
	background: url(../../static/img/mine/manage_03.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
div.message{
	padding: 1rem;
	color: #8d8d8d;
}
div.account,div.new a{
	background: #fff;
	height: 4rem;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #ddd;
	border-bottom: 1px solid #dddddd;
}
div.new{
	margin-top: 2rem;
}
div.account img{
	width: 3rem;
}
span.icon,span.new_go{
	display: inline-block;
	width: 2rem;
	height: 2rem;
}
div.account  span.icon{
	background: url(../../static/img/mine/manage_09.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
div.new span.new_go{
	background: url(../../static/img/setting_03.jpg) no-repeat;
	-webkit-background-size:100%;
	background-size:100%;
}
</style>
