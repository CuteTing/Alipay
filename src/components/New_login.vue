<template>
  <div class="new_login">
    <div class="out_content">
    	<header class="new_head">
	    	<p class="login_back"><router-link to="/Account_keeper"><img src="../../static/img/transfer/contact_06.jpg">返回</router-link></p>
	    </header>
	    <article>
	    	<div class="head_img">
	    		<img src="../../static/img/mine/new_login_03.jpg">
	    	</div>
	    	<form action="">
	    		<div class="art_infos">
	    			<ul>
	    				<li>
	    					<span>账号</span>
	    					<input class="id" type="text" name="" placeholder="手机号、邮箱、淘宝会员名">
	    					<i></i>
	    				</li>
	    				<li>
	    					<span>密码</span>
	    					<input class="password" type="password" name="" placeholder="请输入登录密码">
	    					<i></i>
	    				</li>
	    				<li>
	    					<router-link to="/Home"><input class="login" type="submit" name="" value="登录"></router-link>
	    				</li>
	    				<li>
	    					忘记密码？
	    				</li>
	    			</ul>
	    		</div>
	    	</form>
	    	
	    </article>
	    <footer>
	    	<p>更多</p>
	    </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'new_login',
  data () {
  	return {

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("../assets/css/login.css");

header p.login_back{
	text-align: left;
}
header p.login_back img{
	width: 1.2rem;
	margin-right: .5rem;
}
header a{
	color: #108ee9;
}
header.new_head{
	background: #fff;
}
</style>
