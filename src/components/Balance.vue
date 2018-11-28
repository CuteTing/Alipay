<template>
  <div class="balance">
    <header>
    	<router-link to="/Mine"><span><i class="glyphicon glyphicon-chevron-left"></i>余额</span></router-link>
    	<router-link to="/Details"><span>明细</span></router-link>
    </header>
    <section>
    	<p>余额账户(元)</p>
    	<p>3,943.58</p>
    </section>
    <article>
    	<ul>
    		<li>
    			<p><i></i>充值</p>
    			<span></span>
    		</li>
    		<li>
    			<p><i></i>提现</p>
    			<span></span>
    		</li>
    		<li>
    			<p><i></i>集分宝</p>
    			<span></span>
    		</li>
    	</ul>
    </article>
    <div class="footer">
    	<span>信用借款</span><span></span><span>常见问题</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'balance',
  data () {
  	return {

  	}

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	color: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4rem;
	padding: 0 1rem;
}
header a{
	color: #fff;
}
section,header{
	background: #1b82d2;	
}
section{
	color: #9ac7eb;
	padding: 2rem 1rem;
}
section p:nth-child(2){
	color: #fff;;
	font-size: 5rem;
	margin-top: 1rem;
}
article ul li,article ul li>p{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #fff;
	color: #000;
}
article ul li{
	padding: .8rem;
}
article ul li:nth-child(1),
article ul li:nth-child(2),{
	border-bottom: 2px solid #efefef;
}
article ul li:nth-child(3){
	border-top: 2px solid #efefef;
	border-bottom: 2px solid #efefef;
	margin-top: 1rem;
}
article ul li p>i{
	display: inline-block;
	width: 2rem;
	height: 1.8rem;
	margin-right: .8rem;
}
article ul li>span{
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
}
article ul li:nth-child(1) i{
	background: url(../../static/img/mine/balance_03.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
article ul li:nth-child(2) i{
	background: url(../../static/img/mine/balance_06.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
 article ul li:nth-child(3) i{
 	height: 1.4rem;
	background: url(../../static/img/mine/balance_08.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
article ul li>span{
	background: url(../../static/img/setting_03.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
div.footer{
	width: 100%;
	position: absolute;
	bottom: 5%;
	display: flex;
	justify-content: center;
	color:#596e96;
}
div.footer span:nth-child(2){
	display: inline-block;
	border: 1px solid #596e96;
	margin: 0 1rem;
}
</style>
