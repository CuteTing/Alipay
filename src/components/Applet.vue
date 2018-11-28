<template>
  <div class="applet">
     <header>
        <p><router-link to="/Friends"><img src="../../static/img/transfer/contact_06.jpg">朋友</router-link></p>
        <p>小程序</p>
    </header>
    <div class="select">
      	<i class="glyphicon glyphicon-search" aria-hidden="true"></i>
      	<input type="text" name="" placeholder="搜索" />
    </div>
    <article>
      <div class="art_info">
    			<div class="art_f_left">
    				<img src="../../static/img/remind/applet_03.jpg">
    			</div>
    			<div class="art_f_right">
    				<p><span>ofo小黄车</span></p>
    			</div>
  		</div>
      <div class="more">
        <span class="line"></span><span>搜索更多服务</span><span class="line"></span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'applet',
  data () {
  	return {

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("../assets/css/friends.css");

div.more{
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #e2e2e2;
  background: #f5f5f9;
  font-size: 1.4rem;
}

div.more span.line{
  display: inline-block;
  width: 8rem;
  height: 2px;
  border: 1px solid #e2e2e2;
}
</style>

