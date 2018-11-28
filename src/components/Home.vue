<template>
  <div id="home">
   <app-header v-bind:msg="msg"></app-header>
    <nav>
        <ul>
            <li v-for="items in message">
                <router-link v-bind:to="items.src">
                    <img v-bind:src="items.url" alt=""><span>{{items.text}}</span>
                </router-link>
            </li>
        </ul>
    </nav>
    <div class="remind">
        <div class="circle">
            <span></span>
        </div>
        <ul>
            <a>
                <li><i></i><span>支付助手：￥80.00收到一笔转账</span><label for="">30分钟前</label></li>
            </a>
            <a>
                <li><i></i><span>你有1个新快递信息</span> <label for="">30分钟前</label></li>
            </a>
        </ul>
        <div class="_link">
            <a class="glyphicon glyphicon-menu-right"  aria-hidden="true"></a>
        </div>
    </div>
    <div class="layui-carousel  small_carousel" id="test1" autoplay="autoplay" >
        <div carousel-item class="carousel">
            <div class="carousel_info">
                <p><span>玩乐最强</span><span>用券攻略</span></p>
                <p>每周最高领50元券</p>
            </div>
            <div class="carousel_info">
                <p><span>玩乐最强</span><span>用券攻略</span></p>
                <p>每周最高领50元券</p>
            </div>
        </div>
    </div>
    <article>
        <div class="service" v-for="info in content">
            <div class="ser_title">
                <span></span>{{info.text1}}
            </div>
            <div class="ser_info one">
                <div class="ser_info_left">
                    <p>{{info.text2}}</p>
                    <p>{{info.text3}}</p>
                </div>
                <div class="ser_info_right"><span></span></div>
            </div>
            <div class="ser_info">
                <div class="ser_info_left">
                    <p>{{info.text4}}</p>
                    <p>{{info.text5}}</p>
                </div>
                <div class="ser_info_right"><span></span></div>
            </div>
        </div>
        <div class="buying">
            <div class="buying_title">
                <span>淘抢购</span>整点抢购
            </div>
            <div class="buying_info">
                <div class="b_info_left">
                    <p>领取60元无门槛券</p>
                    <p>专属优惠  整点抢半价</p>
                    <p><span>立即领取</span></p>
                </div>
                <div class="b_info_img">
                    <img src="../../static/img/voucher_center/voucher_center_63.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="underline">
            <span></span>我是有底线的<span></span>
        </div>
    </article>
    <app-footer></app-footer>
  </div>
</template>


<!-- <link rel="stylesheet" type="text/css" href="../assets/css/base.css">
<link rel="stylesheet" type="text/css" href="../css/index.css"> -->
<script>

import header from './header'
import footer from './footer'


// import '../../static/plugins/layui-v2.4.3/layui/layui.js'

export default {
  name: 'home',
  data() {
    return{
      message:[
        {
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_39.jpg",
            text:"转账"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_36.jpg",
            text:"信用卡还款"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_30.jpg",
            text:"充值中心"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_33.jpg",
            text:"余额宝"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_47.jpg",
            text:"淘票票"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_48.jpg",
            text:"滴滴出行"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_45.jpg",
            text:"生活缴费"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_46.jpg",
            text:"芝麻信用"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_56.jpg",
            text:"火车票机票"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_58.jpg",
            text:"记账本"
        },{
            src:"/Transfer",
            url:"../../static/img/voucher_center/voucher_center_57.jpg",
            text:"蚂蚁花呗"
        },{
            src:"/More",
            url:"../../static/img/voucher_center/voucher_center_54.jpg",
            text:"更多"
        }
    ],
    content:[
        {
            text1:"惠支付",
            text2:"51元兑换券",
            text3:"汉堡王",
            text4:"我的奖励金",
            text5:"立即查看"
        },{
            text1:"生活服务",
            text2:"手机拍证件照",
            text3:"原来可以so easy!",
            text4:"开学领“红包”",
            text5:"人人有份你有了吗"
        }
    ],
     msg:[
      {
        link:"/Scan",
        url:"../../static/img/voucher_center/voucher_center_15.jpg",
        text:"扫一扫"
      },{
        link:"/Payfor",
        url:"../../static/img/voucher_center/voucher_center_17.jpg",
        text:"付钱"
      },{
        link:"/Collect",
        url:"../../static/img/voucher_center/voucher_center_20.jpg",
        text:"收钱"
      },{
        link:"/Scan",
        url:"../../static/img/voucher_center/voucher_center_23.jpg",
        text:"卡包"
      }
    ]
      
    }

  },
  components:{
    "app-header":header,
    "app-footer":footer
  },
  mounted() {
    //轮播
    layui.use('carousel', function(){
        var carousel = layui.carousel;
        //建造实例
        carousel.render({
            elem: '#test1'
            ,width: '100%' 
            ,height:'7rem'//设置容器宽度
            ,arrow: 'none' //始终显示箭头
            // ,anim: 'default' //切换动画方式
        });
    });
  }
};


</script>

<style >

@import url("../assets/css/base.css");
@import url("../assets/css/index.css");


a{
  text-decoration: none;
}
ul li.fisrt a{
    color: #29a1f7;
}
</style>
