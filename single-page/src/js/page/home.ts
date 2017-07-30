declare let define:any;
define((require)=> {
    //加载模板
    const Html = require("text!homeTpl");
    //加载库
    const $ = require("jquery");
    const _ = require('lodash');
    const anime = require("anime");
    const layer = require("layer");
    // 加载全局vue组件
    const home = require("hometest");
    return{
        template:Html,
        data:function(){
            return{
                vuegConfig:{
                    forwardAnim:'touchPoint',  //options所有配置可以写在这个对象里，会覆盖全局的配置
                    disable:false,           //对于嵌套路由，默认为关闭动画，需要在组件的data.vuegConfig中配置disable为false启用
                    duration:"0.3",
                },
            }
        },
        mounted:function(){

        },
        updated(){

        },
        components:{
            "i-home":home
        },
        methods:{

        },
        beforeRouteEnter:function(to,from,next){
            document.title = "测试页";
            _.delay(()=>{
                next(function (vm){
                    vm.$store.commit("changeLoading",false);
                    $("body").scrollTop(0);
                });
            },500)
        },
        beforeRouteLeave:function(to,from,next){
            next(function (vm) {

            });
        }
    }
});