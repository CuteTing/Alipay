<template>
  <div class="details">
     <header>
        <router-link to="/Balance">
           <span><i class="glyphicon glyphicon-chevron-left"></i>返回</span>
        </router-link>
        <span class="center">收支明细<i></i></span>
        <span class="right"><i></i></span>
    </header>
    <article>
    	<ul>
    		<li v-for="item in message">
    			<p>
    				<span>{{item.text1}}</span>
    				<span>{{item.text2}}</span>
    			</p>
    			<p>
    				<span>余额：{{item.text3}}</span>
    				<span>{{item.text4}}</span>
    			</p>
    		</li>
    		
    	</ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
  	return {
  		message:[
  			{
  				text1:"交易退款",
  				text2:"2018-03-30",
  				text3:"2207.55",
  				text4:"+314.01",
  			},{
  				text1:"提现",
  				text2:"2018-03-27",
  				text3:"1894.54",
  				text4:"-1.00",
  			},{
  				text1:"充值到余额",
  				text2:"2018-03-26",
  				text3:"1894.54",
  				text4:"+1.00",
  			},{
  				text1:"充值到余额",
  				text2:"2018-03-25",
  				text3:"1893.54",
  				text4:"+1.00",
  			},{
  				text1:"转账",
  				text2:"2018-03-24",
  				text3:"1894.54",
  				text4:"-100.00",
  			},{
  				text1:"在线支付",
  				text2:"2018-03-23",
  				text3:"1994.54",
  				text4:"-1.00",
  			},{
  				text1:"提现",
  				text2:"2018-03-27",
  				text3:"1894.54",
  				text4:"-1.00",
  			},{
  				text1:"充值到余额",
  				text2:"2018-03-26",
  				text3:"1894.54",
  				text4:"+1.00",
  			},{
  				text1:"充值到余额",
  				text2:"2018-03-25",
  				text3:"1893.54",
  				text4:"+1.00",
  			},{
  				text1:"转账",
  				text2:"2018-03-24",
  				text3:"1894.54",
  				text4:"-100.00",
  			}
  		]
  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
	padding: .8rem;
	color:#000;
	background: #fff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #e1e1e1;
}
header a{
	color: #108ee9;
}
header i{
	display: inline-block;
}
header span.center i{
	width: 1rem;
	height: 1rem;
	background: url(../../static/img/mine/detail_06.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
header span.right i{
	width: 2rem;
	height: 2rem;
	background: url(../../static/img/mine/detail_03.jpg) no-repeat;
	-webkit-background-size: 100%;
	background-size: 100%;
}
article ul li{
	padding: 1rem .8rem;
	border-bottom: 1px solid #e1e1e1;
	color: #5e5e5e;
	background: #fff;
	line-height: 2rem;
}
article ul li p{
	display: flex;
	justify-content: space-between;
}
article ul li p:nth-child(1) span:nth-child(2){
	color: #999;
}
article ul li p:nth-child(2) span:nth-child(2){
	color: #000;
}
</style>
