<template>
  <div class="setting">
    <header>
      <p><router-link to="/Mine"><img src="../../static/img/transfer/contact_06.jpg">我的</router-link></p>
      <p>设置</p>
    </header>
    <article>
    	<ul>
    		<li>
          <router-link to="/Account_keeper">
      			<span>账号管理</span><i></i>
          </router-link>
    		</li>
        <li>
          <p><span>手机号</span></p><p><span>152******27</span><i></i></p>
        </li>
        <li v-for="item in info">
          <span>{{item.text}}</span><img v-bind:src="item.url">
        </li>
        <li><router-link to="/Out_login">退出登录</router-link></li>
    	</ul>
    </article>
  </div>
</template>

<script>
export default { 
  name: 'setting',
  data () {
  	return {
  		info:[
  			{
  				text:"安全中心",
          url:"../../static/img/setting_03.jpg"
  			},{
          text:"人脸识别",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"声音锁",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"支付设置",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"密码设置",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"隐私",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"通用",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"求助反馈",
          url:"../../static/img/setting_03.jpg"
        },{
          text:"关于",
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
article ul li a{
  display: flex;
  width: 100%;
  justify-content: space-between;
}
article ul li{
  padding: .8rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
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
article ul li:nth-child(2),
article ul li:nth-child(5),
article ul li:nth-child(9),
article ul li:nth-child(11){
  margin-bottom: 1rem;
}
article ul li:nth-child(12){
  margin-bottom:1rem;
  justify-content: center;
}
article ul li img{
  width: 2rem;
  height: 2rem;
}
</style>
