// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'



import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import Start from './components/Start'
import More from './components/More'
import Mine from './components/Mine'
import Setting from './components/Setting'
import Scan from './components/Scan'
import Collect from './components/Collect'
import Payfor from './components/Payfor'
import Personal_details from './components/Personal_details'
import Balance from './components/Balance'
import Details from './components/Details'
import Friends from './components/Friends'
import Life_area from './components/Life_area'
import Applet from './components/Applet'
import Out_login from './components/Out_login'
import New_login from './components/New_login'
import Account_keeper from './components/Account_keeper'
import Services from './components/Services'
import Transfer from './components/Transfer'

// import Users from './components/Users'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
    routes: [
        { path: "/", component: Start },
        // {path:"/helloworld",component:HelloWorld},
        { path: "/home", component: Home },
        { path: "/more", component: More },
        { path: "/mine", component: Mine },
        { path: "/setting", component: Setting },
        { path: "/scan", component: Scan },
        { path: "/collect", component: Collect },
        { path: "/payfor", component: Payfor },
        { path: "/personal_details", component: Personal_details },
        { path: "/balance", component: Balance },
        { path: "/details", component: Details },
        { path: "/friends", component: Friends },
        { path: "/life_area", component: Life_area },
        { path: "/applet", component: Applet },
        { path: "/out_login", component: Out_login },
        { path: "/new_login", component: New_login },
        { path: "/account_keeper", component: Account_keeper },
        { path: "/services", component: Services },
        { path: "/transfer", component: Transfer }
    ],
    mode: "history"
});


//全局注册组件
// Vue.component("users",Users);

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>'

})