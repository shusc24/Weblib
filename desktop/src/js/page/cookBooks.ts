define('layerpage',(require)=>{
    let Swiper = require("swiper2");
    let $ = require('jquery');
    const _ = require("lodash");
    const layer = require("layer");
    require('swiperScrollbar');
    return{
        template:"#layerTpl",
        props:[],
        data(){
            return{

            }
        },
        methods:{
            Fnleft(){
                this.swiper.swipePrev();
            },
            Fnright(){
                this.swiper.swipeNext();
            }
        },
        mounted(){
            this.swiper = new Swiper("#layerBoxBodySwiper",{
                loop:true,
                pagination:"#layerBoxBodySwiper .swiper-pagination"
            });
            //初始化 swiper
            setTimeout(()=>{
                new Swiper('#layerBoxContent',{
                    scrollContainer:true,
                    mousewheelControl : true,
                    mode:'vertical',
                    //其他设置
                    scrollbar: {
                        container : '.swiper-scrollbar',
                        draggable : true,
                        hide: true,
                        snapOnRelease: true
                    }
                });
            },4000)
        },
        beforeRouteEnter:function(to,from,next){
            next((vm)=>{
                layer.open({
                    type:1,
                    shade: [0.7,"#000"],
                    area:["996px","520px"],
                    anim: 5,
                    scrollbar: false,
                    title: false, //不显示标题
                    content: $('.cookBooks-layerBox'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
                    cancel: function(){
                        window.history.go(-1);
                    }
                });

            });
        },
        beforeRouteLeave:function(to,from,next){
            next((vm)=> {

            });
        }
    }
});
define((require)=>{
    const $ = require('jquery'),_ = require("lodash"),Vue = require('vue'),VueRouter = require('Vrouter'),layer = require("layer");
    //加载组件
    let Banner = require("banner");
    //使用vuerouter

    //页面模块
    const layerPage = require("layerpage");

    Vue.use(VueRouter);

    const routes = [
        {path:'/item/:id',component:layerPage,meta:{keepAlive: false}},
    ];
    const router = new VueRouter({
        routes
    });

    let App = new Vue({
        data:()=>{
            return{

            }
        },
        components:{
            "dr-banner":Banner
        },
        methods:{
            Fnplay:function () {
                //激活事件 播放视频
                $(this.$el).find(".active .btn-play").trigger("click");
            },
            Fntext:function () {
                var self = this;
                //延时获得Id
                _.delay(function () {
                    var id = $(self.$el).find(".active").data()['id'];
                    window.location.href=`#/item/${id}`;

                },800)
            }
        },
        mounted(){

        },
        router
    }).$mount("#cookBooksMain")
});
