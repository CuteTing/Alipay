<template>
  <div class="life_area">
     <header>
      <p><router-link to="/Friends"><img src="../../static/img/transfer/contact_06.jpg">朋友</router-link></p>
      <p>生活圈</p>
    </header>
    <div class="select">
    	<i class="glyphicon glyphicon-search" aria-hidden="true"></i>
    	<input type="text" name="" placeholder="搜索你感兴趣的生活圈" />
    </div>
    <article>
    	<div class="art_info">
			<div class="art_f_left">
				<img src="../../static/img/remind/life_area_03.jpg">
			</div>
			<div class="art_f_right">
				<p><span>朋友动态</span><span>18/4/6</span></p>
				<p>李发表了新动态</p>
			</div>
		</div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'life_area',
  data () {
  	return {

  	}
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("../assets/css/friends.css");

</style>

