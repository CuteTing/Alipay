<template>
  <div class="personal_details">
    <header>
      <p><router-link to="/Mine"><img src="../../static/img/transfer/contact_06.jpg">我的</router-link></p>
      <p>个人信息</p>
    </header>
    <article>
    	<ul>
    		<li>
    			<span>个人主页</span>
          <p><img src="../../static/img/mine/person_03.jpg"><i></i></p>
    		</li>
        <li>
          <span>身份认证</span>
          <p>
            <span>杨大</span>
            <img src="../../static/img/mine/person_07.jpg"><i></i>
          </p>
        </li>
        <li>
          <p><span>支付宝账号</span></p>
          <p><span>152******27</span><i></i></p>
        </li>
        <li>
          <span>我的二维码</span>
          <p><img src="../../static/img/mine/person_11.jpg"><i></i></p>
        </li>
        <li>
          <span>淘宝会员名</span>
          <p>
            <span>杨大</span>
            <i></i>
          </p>
        </li>
        <li v-for="item in info">
          <span>{{item.text}}</span><img v-bind:src="item.url">
        </li>
    	</ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'personal_details',
  data () {
  	return {
  		info:[
  			{
          text:"收货地址",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"我的发票抬头",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"我的收藏",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"我的客服",
          url:"../../static/img/setting_03.jpg"
        }
  		]
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: .8rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  margin-bottom: 1rem;
}
header p:nth-child(1){
  width: 50%;
}
header p:nth-child(1) a{
  color: #108ee9;
}
header p:nth-child(1) img{
  width: 1rem;
  margin-right: .3rem;
}
header p:nth-child(2){
  width: 50%;
  color: #000;
  font-weight: 500;
}

article ul li{
  padding: 1rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
article ul li i{
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background: url(../../static/img/setting_03.jpg) no-repeat;
  background-size: 100%;
  vertical-align: middle;
  margin-left: .8rem;
}
article ul li:nth-child(2) p:nth-child(2) span{
  color: #999;
}
article ul li:nth-child(5),
article ul li:nth-child(7){
  margin-bottom: 1rem;
}
article ul li:nth-child(12){
  margin-bottom:1rem;
  justify-content: center;
}
article ul li:nth-child(1) img{
  width: 2.5rem;
  height: 2.5rem;
}
article ul li:nth-child(2) img{
  width: 4rem;
}
article ul li img{
  width: 2rem;
  height: 2rem;
}
</style>
