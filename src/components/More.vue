<template>
  <div class="more">
    <header>
        <div class="select">
            <div class="back">
                <router-link to="/Home">
                    <i class="glyphicon glyphicon-menu-left"></i><span>首页</span>
                </router-link>
            </div>
            <div class="input-group select_info">
                <span class="input-group-addon " id="basic-addon1"><i class="glyphicon glyphicon-search"></i></span>
                <input type="text" class="form-control" placeholder="全部应用" aria-describedby="basic-addon1">
            </div>
        </div>
        <div class="myapp">
            <div class="my">
                <span>我的应用</span>
            </div> 
            <div class="myapp_icon">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div class="edit">
                <a>编辑</a>
            </div>
        </div>
    </header>
    <section>
        <div class="sec-title">
            <span></span>最近使用
        </div>
        <div class="sec_info">
             <ul>
                 <li v-for="item in items">
                    <img v-bind:src="item.url" alt="">
                    <span>{{item.text}}</span>
                 </li>
             </ul>
        </div>
    </section>
    <section>
        <div class="sec-title">
            <span></span>为你推荐
        </div>
        <div class="sec_content">
            <div>
                <p>飞猪旅行</p>
                <p>多快好省住酒店</p>
            </div>
            <div> 
                <p>运动</p>
                <p>全民健康捐步</p>
            </div>
        </div>
    </section>
    <article>
        <div class="layui-tab layui-tab-brief" >
            <ul class="layui-tab-title">
                <li class="layui-this">便民生活</li>
                <li>财富管理</li>
                <li>资金往来</li>
                <li>购物娱乐</li>
                <li>教育培训</li>
            </ul>
            <div class="layui-tab-content">
                <div class="layui-tab-item layui-show">
                    <ul>
                        <li v-for="info in infos">
                            <img v-bind:src="info.url" alt="">
                            <span>{{info.text}}</span>
                        </li>
                    </ul>
                </div>
                <div class="layui-tab-item">2</div>
                <div class="layui-tab-item">3</div>
                <div class="layui-tab-item">4</div>
                <div class="layui-tab-item">5</div>
                <div class="layui-tab-item">6</div>
            </div>
        </div>
    </article>
  </div>
</template>

<script>
	
// import '../../static/plugins/layui-v2.4.3/layui/layui.js'

export default {
  name: 'more',
  data() {
    return{
      items:[
        {
            url:"../../static/img/more/more_10.jpg",
            text:"蚂蚁森林"
        },{
            url:"../../static/img/more/more_12.jpg",
            text:"生活号"
        },{
            url:"../../static/img/more/more_15.jpg",
            text:"我的快递"
        },{
            url:"../../static/img/more/more_07.jpg",
            text:"ofo小黄车"
        },{
            url:"../../static/img/more/more_20.jpg",
            text:"我的客服"
        },{
            url:"../../static/img/more/more_22.jpg",
            text:"发票管家"
        },{
            url:"../../static/img/more/more_24.jpg",
            text:"爱心捐赠"
        },{
            url:"../../static/img/more/more_26.jpg",
            text:"更多"
        }
    ],
    infos:[
        {
            url:"../../static/img/more/more_32.jpg",
            text:"充值中心"
        },{
            url:"../../static/img/voucher_center/voucher_center_36.jpg",
            text:"信用卡还款"
        },{
            url:"../../static/img/voucher_center/voucher_center_45.jpg",
            text:"生活缴费"
        },{
            url:"../../static/img/more/more_33.jpg",
            text:"城市服务"
        },{
            url:"../../static/img/more/more_37.jpg",
            text:"生活号"
        },{
            url:"../../static/img/more/more_20.jpg",
            text:"我的客服"
        },{
            url:"../../static/img/more/more_15.jpg",
            text:"我的快递"
        },{
            url:"../../static/img/more/more_38.jpg",
            text:"医疗健康"
        },{
            url:"../../static/img/voucher_center/voucher_center_58.jpg",
            text:"记账本"
        },{
            url:"../../static/img/more/more_22.jpg",
            text:"发票管理"
        },{
            url:"../../static/img/voucher_center/voucher_center_56.jpg",
            text:"火车票机票"
        },{
            url:"../../static/img/voucher_center/voucher_center_48.jpg",
            text:"滴滴出行"
        }
    ]
      
    }

  },
   mounted() {
        // 选项卡

        //注意：选项卡 依赖 element 模块，否则无法进行功能性操作
        layui.use('element', function(){
            var element = layui.element;
            
            //一些事件监听
            element.on('tab(demo)', function(data){
                console.log(data);
            });
        });

        // element.on('tab(filter)', function(data){
        //     console.log(this); //当前Tab标题所在的原始DOM元素
        //     console.log(data.index); //得到当前Tab的所在下标
        //     console.log(data.elem); //得到当前的Tab大容器
        // });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url("../assets/css/base.css");
@import url("../assets/css/more.css");


</style>
