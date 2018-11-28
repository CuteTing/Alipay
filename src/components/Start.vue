<template>
  <div id="start">
    <router-link to="/Home">
      <div class="art_content" >
        <div class="art_container">
          
          <div class="art_con_info" v-for="item in items">
            
              <img v-bind:src="item.url" alt="">
              <p>
                  <span>{{item.text1}}</span><span>{{item.text2}}</span>
              </p> 
          </div> 
          
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>


export default {
  name: 'start',
  data() {
    return{
      // title:"这是我的第一个vue脚手架项目"
      items:[
          {
            url:"../../static/img/ant.jpg",
            text1:"蚂蚁金服",
            text2:"ANT FINANCIAL"
        },{
            url:"../../static/img/pay.jpg",
            text1:"支付宝",
            text2:"ALIPAY"
        }
      ]
    }
  }
}
</script>

<style scoped>
#start{
  height: 100%;
}
 div.art_content{
   color: #000;
   width: 100%; 
   height: 100%;
   background: #fff;
   position: absolute;
   top: 0;
}
div.art_container{
  width: 100%;
  position: absolute;
  bottom: 12%;
  display: flex;
  justify-content: space-around;
}
div.art_con_info{
   display: flex;
   align-items: center;
   justify-content: center;
   line-height: 2.2rem;
}

div.art_con_info img{
  height: 5rem;
  margin-right: .3rem;
}
div.art_con_info p span{
  display: inline-block;
  width: 100%;
}
div.art_con_info p span:nth-of-type(1){
  font-size: 1.8rem;
}
div.art_con_info p span:nth-of-type(2){
  font-size: 1.5rem;
}
</style>
