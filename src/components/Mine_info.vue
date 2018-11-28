<template>
  <div class="mine_info">
    <article>
    	<ul>
    		<li v-for="item in items">
    			<router-link v-bind:to="item.src">
             <p class="art_list_left">
                <img v-bind:src="item.url"><span>{{item.text}}</span>
              </p>
              <p class="art_list_right"><span>{{item.msg}}</span><i>></i></p>   
          </router-link>
    		</li>
    	</ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'mine-info',
  data () {
  	return {
  		items:[
  			{
          src:" ",
  				url:"../../static/img/mine/mine_06.jpg",
  				text:"蚂蚁会员",
  				msg:"3,765积分"
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_09.jpg",
  				text:"账单",
  				msg:"  "
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_11.jpg",
  				text:"总资产",
  				msg:"账户安全险保障中"
  			},{
          src:"/Balance",
  				url:"../../static/img/mine/mine_13.jpg",
  				text:"余额",
  				msg:"3,943.58元"
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_02.jpg",
  				text:"余额宝",
  				msg:"  "
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_07.jpg",
  				text:"银行卡",
  				msg:"  "
  			},{
          src:" ",
  				url:"../../static/img/voucher_center/voucher_center_46.jpg",
  				text:"芝麻信用",
  				msg:"  "
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_15.jpg",
  				text:"保险服务",
  				msg:"  "
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_17.jpg",
  				text:"花呗",
  				msg:"3,943.58元"
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_19.jpg",
  				text:"蚂蚁借呗",
  				msg:"查看信用借款额度"
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_21.jpg",
  				text:"网商银行",
  				msg:"  "
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_19.jpg",
  				text:"公益",
  				msg:"  "
  			},{
          src:" ",
  				url:"../../static/img/mine/mine_08.jpg",
  				text:"娱乐宝",
  				msg:"  "
  			}
  		]

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("../assets/css/mine.css");

</style>
