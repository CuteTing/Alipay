<template>
  <div class="collect">
    <div class="collect_content">
      <header>
      <router-link to="/Home">
           <span><i></i>首页</span>
      </router-link>
      <span>个人收钱</span>
      <span><i></i></span>
    </header>
    <article>
      <div class="art_code">
        <p>支付宝扫一扫，向我付钱</p>
        <div class="art_code_img">
          <img src="../../static/img/collect_03.jpg">
        </div>
        <p class="art_active"><span>设置金额</span><span class="art_line"></span><span>保存图片</span></p>
      </div>
      <div class="update">
        <p><span></span>升级你的收钱二维码</p>
        <p>提现免费<span></span><i class="glyphicon glyphicon-chevron-right"></i></p>
      </div>
      <div class="art_end">
        <p>收款记录</p>
      </div>
    </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collect',
  data () {
  	return {

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("../assets/css/code.css");

div.collect_content{
    height: 100%;
    width: 100%;
    background: #0e80d8;
    position: absolute;
    top: 0;
}
a{
    color: #fff;
}

</style>
