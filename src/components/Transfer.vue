<template>
  <div class="transfer">
     <header>
      <router-link to="/Setting">
           <span><i></i>返回</span>
      </router-link>
      <span>账户管理</span>
      <span><i></i></span>
    </header>
    <div class="select">
      	<i class="glyphicon glyphicon-search" aria-hidden="true"></i>
      	<input type="text" name="" placeholder="搜索" />
    </div>
    <article>
      	<div class="art_info">
			<div class="art_f_left">
				<img src="../../static/img/transfer/transfer_01.jpg">
			</div>
			<div class="art_f_right">
				<p><span>转给我的朋友</span></p>
			</div>
		</div>
		<div class="art_info">
			<div class="art_f_left">
				<img src="../../static/img/transfer/transfer_02.jpg">
			</div>
			<div class="art_f_right">
				<p><span>转给支付宝账户</span></p>
			</div>
		</div>
		<div class="art_info">
			<div class="art_f_left">
				<img src="../../static/img/transfer/transfer_03.jpg">
			</div>
			<div class="art_f_right">
				<p><span>转到银行卡</span></p>
			</div>
		</div>
		<div class="message">
			<p>最近</p>
		</div>
		<div class="art_info">
			<div class="art_f_left">
				<img src="../../static/img/transfer/transfer_04.jpg">
			</div>
			<div class="art_f_right">
				<p><span>快乐的哒</span></p>
				<p class="some"><span>102***@qq.com</span></p>
			</div>
		</div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'transfer',
  data () {
  	return {

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("../assets/css/friends.css");

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
	height: 1rem;
	background: url(../../static/img/transfer/more_03.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
div.message{
	padding: 1rem;
	background: #f5f5f9;
	color:#999;
	font-size: 1.2rem;
}
p.some{
	color:#b9b9b9;
}
</style>

