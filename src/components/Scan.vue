<template>
  <div class="scan">
  	<div class="container">
  		<header class="scan_head">
    	<router-link to="/Home"><span><i class="glyphicon glyphicon-chevron-left"></i>首页</span></router-link>
    	<span>相册</span>
    </header>
    <article>
    	<div class="art_scan">
    		<img src="../../static/img/scan_03.jpg">
    	</div>
    	<div class="art_info">
    		<span>未扫描到二维码，点此反馈</span>
    	</div>
    </article>
    <div class="footer">
    	<div class="f_scan" v-for="info in message">
    		<img v-bind:src="info.url">
    		<span>{{info.text}}</span>
    	</div>
    </div>
  </div>
    
  </div>
</template>

<script>
export default {
  name: 'scan',
  data () {
  	return {
  		message:[
  			{
  				url:"../../static/img/scan.jpg",
  				text:"扫码"
  			},{
  				url:"../../static/img/scan_07.jpg",
  				text:"AR"
  			}
  		]

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container{
	background: #000;
	position: absolute;
	top:0;
	width: 100%;
	height: 100%;
}
.scan_head{
	background: #000;
}
div.scan{
	width: 100%;
	height: 100%;
	color: #fff;
}
header{
	padding: .8rem;
	color: #fff;
	display: flex;
	justify-content: space-between;
	height: 8%;
}
header a{
	color: #fff;
}
article{
	padding-top: 15%;
}
article,div.art_info,footer{
	width: 100%;
	background: #000;
}
article div.art_scan{
	width: 75%;
	padding:2%;
	margin: 0 auto;
}
article div.art_scan img{
	width: 100%;
	height: 100%;
}
div.art_info{
	text-align: center;
	margin: 15% 0;
}
div.art_info span{
	border: 1px solid #272727;
	display: inline-block;
	padding: .8rem;
	border-radius: 15px;
}
.footer{
	display: flex;
	justify-content: space-around;
} 
.footer div.f_scan{
	width: 30%;
	height: 15%;
	text-align: center;	
}
.footer div.f_scan span{
	display: inline-block;
	width: 100%;
	text-align: center;
	margin-top: .8rem;
}
</style>
