<template>
  <div class="out_login">
    <div class="out_content">
    	<header>
	    	<p>语言</p>
	    </header>
	    <article>
	    	<div class="head_img">
	    		<img src="../../static/img/mine/out_03.jpg">
	    	</div>
	    	<form action="">
	    		<div class="art_infos">
	    			<ul>
	    				<li>
	    					<span>账号</span>
	    					<input class="id" type="text" name="" placeholder="152****527">
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
  name: 'out_login',
  data () {
  	return {

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


@import url("../assets/css/login.css");


</style>
