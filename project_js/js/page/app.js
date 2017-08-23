/**
 * Created by Administrator on 2017\6\26 0026.
 */
// define(['vue','Vuex','jquery','Vrouter','vueg','layer','lodash','topswiper','searchbox','footermenu','topmenu','msgrunbox','lazyload'],(Vue,Vuex,$,VueRouter,Vueg,layer,_)=>{

    define((require)=>{
    //加载库
    const Vue = require('Vue');
    const Vuex = require('Vuex');
    const $ = require("jquery");
    const VueRouter = require('Vrouter');
    const Vueg = require('vueg');
    const _ = require('lodash');
    // 加载全局vue组件
    const iView = require('iView');
    Vue.use(iView);
    //加载页面 组件
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
            footmenu:true,
            loading:true,
            first:false,
            selectType:0,
            selectName:"",
            refereesForm:{},
            berefereesForm:{},
        },
        mutations:{
            changeMenuState(state,href){
                state.menuState = href;
            },
            MenuState(state,menu){
                state.footmenu = menu
            },
            changeLoading(state,val){
                state.loading = val
            },
            SelectType(state,opt){
                state.selectType = opt.index;
                state.selectName = opt.name;
            },
            submitReferees(state,opt){
                state.refereesForm = opt;
            },
            submitBereferees(state,opt){
                state.berefereesForm = opt;
            },
            changeFirst(state,value){
                state.first = value;
            }
        }
    });
    //index 页面逻辑
    let indexHome = resolve=>require(['home'],resolve);

    //路由器初始化
    let routes = [
        {path:'/',component:indexHome,meta:{keepAlive: false}},
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

          }
        },
        methods:{

        },
        mounted(){

        }
    }).$mount("#App");
});