/**
 * Created by Administrator on 2017\6\26 0026.
 */
// define(['vue','Vuex','jquery','Vrouter','vueg','layer','lodash','topswiper','searchbox','footermenu','topmenu','msgrunbox','lazyload'],(Vue,Vuex,$,VueRouter,Vueg,layer,_)=>{

    define((require)=>{
    //加载库
    const Vue = require('vue');
    const Vuex = require('Vuex');
    const $ = require("jquery");
    const VueRouter = require('Vrouter');
    const Vueg = require('vueg');
    const layer = require('layer');
    const _ = require('lodash');
    // 加载全局vue组件
          require('topswiper');
          require('searchbox');
          require('footermenu');
          require('topmenu');
          require('msgrunbox');
          require('lazyload');

    const Vuegconfig = {
        duration: '0.4',              //转场动画时长，默认为0.3，单位秒
        firstEntryDisable: false,     //值为true时禁用首次进入应用时的渐现动画，默认为false
        firstEntryDuration: '.6',     //首次进入应用时的渐现动画时长，默认为.6
        forwardAnim: 'fadeInLeft',   //前进动画，默认为fadeInRight
        backAnim: 'fadeInRight',       //后退动画，默认为fedeInLeft
        sameDepthDisable: false,      //url深度相同时禁用动画，默认为false
        tabs: [{
            name:'home'
        },{
            name:'my'
        }],                       //默认为[]，'name'对应路由的name,以实现类似app中点击tab页面水平转场效果，如tabs[1]到tabs[0]，会使用backAnim动画，tabs[1]到tabs[2]，会使用forwardAnim动画
        tabsDisable: false,           //值为true时，tabs间的转场没有动画，默认为false
        disable: false,
    };
    //Vue 初始化
    Vue.use(VueRouter);
    //vuex 初始化
    Vue.use(Vuex);
    const Store = new Vuex.Store({
        state:{
            menuState:0,
            footmenu:true
        },
        mutations:{
            changeMenuState(state,href){
                state.menuState = href;
            },
            MenuState(state,menu){
                state.footmenu = menu
            }
        }
    });
    //index 页面逻辑
    let indexHome = {
        template:"#homePageTpl",
        data:function(){
            return{

            }
        },
        mounted:function(){
            $("img.lazy").lazyload({
                effect : "fadeIn",
            });
        },
        components:{

        },
        methods:{
            Fnsearch(keyword){
                console.log(keyword)
            },
        },
        beforeRouteEnter:function(to,from,next){
            layer.msg("正在加载中");
            setTimeout(()=>{
                next(function (vm){
                    vm.$store.commit("changeMenuState",0);
                    vm.$store.commit("MenuState",true);
                    layer.closeAll()
                });
            },500)
        },
        beforeRouteLeave:function(to,from,next){
            next(function (vm) {

            });
        }
    };

    //about页面逻辑
    let aboutPage = {
        template:"#aboutPageTpl",
        data:function(){
            return{
                vuegConfig:{
                    forwardAnim:'touchPoint',  //options所有配置可以写在这个对象里，会覆盖全局的配置
                    disable:false              //对于嵌套路由，默认为关闭动画，需要在组件的data.vuegConfig中配置disable为false启用
                }
            }
        },
        store:Store,
        mounted:function(){

        },
        methods:{

        },
        beforeRouteEnter:function(to,from,next){
            next((vm)=>{
                $("body").scrollTop(0);
                vm.$store.commit("changeMenuState",0);
                vm.$store.commit("MenuState",false)
            });
        },
        beforeRouteLeave:function(to,from,next){
            next((vm)=> {

            });
        }
    };

    //路由器初始化
    let routes = [
        {path:'/',component:indexHome,meta:{keepAlive: true}},
        {path:'/about',component:aboutPage,meta:{keepAlive: false}}
    ];

    let Router = new VueRouter({
        routes
    });

    Vue.use(Vueg, Router,Vuegconfig);

    let App = new Vue({
        router:Router,
        store:Store,
        data() {
          return{
              footMenu:true
          }
        },
        methods:{
            FnswitchFooter(index){
                return index === this.$store.state.menuState;
            },
            Fnfootermenu(index){
                layer.load();
                this.$store.commit("changeMenuState",index);
            }
        },
        mounted(){
            $('body').on("focus",'input',()=>{
                this.$store.state.footmenu = false;
            }).on("blur",'input',()=>{
                this.$store.state.footmenu = true;
            });
        }
    }).$mount("#App");
});