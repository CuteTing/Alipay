<template>
  <div class="payfor">
    <div class="pay_content">
        <header>
            <router-link to="/Home">
               <span><i></i>首页</span>
            </router-link>
            <span>向商家付钱</span>
            <span><i></i></span>
        </header>
        <article>
            <div class="art_code">
                <div class="bar">
                    <img src="../../static/img/barcode.jpg">
                    <span>2885******查看数字</span>
                </div>
                <div class="art_code_img payfor_img">
                    <img src="../../static/img/pay_code.jpg">
                </div>
                <p class="balance">
                    <i></i>账户余额<i class="glyphicon glyphicon-chevron-right"></i>
                </p>
            </div>
            <div class="other">
                <p>如付款失败，将尝试其他付款方式</p>
            </div>
            <div class="art_otherway">
                <p>
                    <i></i>
                    <span>付款码</span>
                </p>
                <p>
                    <i></i>
                    <span>扫码付</span>
                </p>
                <p>
                    <i></i>
                    <span>声波付</span>
                </p>
            </div>
        </article>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'payfor',
  data () {
  	return {

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("../assets/css/code.css");
div.pay_content{
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

