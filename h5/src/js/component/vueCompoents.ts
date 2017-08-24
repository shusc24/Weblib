define('jqueryUtil',['jquery'],function ($) {
    $.extend({
        createCss(id,css,to){
            if($(`${id}`).length === 0){
                $(`<style id="${id}"></style>`).html(css).appendTo(to || $("head"))
            }
        },
        animateCss: function (animationName,fn) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
                if(fn instanceof Function){fn.apply(this,null)}
            });
            return this;
        }
    })
});
//topswiper
define('topswiper',['vue','swiper','lodash','jquery','jqueryUtil'],function (Vue,Swiper,_,$) {
    let topSwiperPic,topSwiper;
    //轮播图图片
    topSwiperPic = {
        name:"dr-topSwiperPic",
        template:`
            <a :href="href || 'javscript:'" class="swiper-slide  topSwiper-pic db" :style="'background-image: url(' + imgurl +')'"></a>
        `,
        props:['href','imgurl'],
    };
    topSwiper = {
        name:"dr-topSwiper",
        template:`
            <div class="c-topSwiper" :style="style" :id="id">
                <div class="swiper-wrapper">
                    <slot>
                    
                    </slot>
                </div>
                <div v-show="pagination" class="swiper-pagination" :id="'swiper-pagination_' + id" ></div>
            </div>
        `,
        props:['height','pagination','bullet','bulletactive','bulletbottom','autoplay','loop'],
        data(){
            return{
                id:_.uniqueId(),
                style:{
                    height:this.height,
                }
            }
        },
        mounted(){
            let El = this.$el;
            //改变 pagination 颜色
            $.createCss(`swiper-pagination_${this.id}_Style`,`
                #swiper-pagination_${this.id}{
                    bottom:${this.bulletbottom || `5px`}
                }
                #swiper-pagination_${this.id} .swiper-pagination-bullet{
                    background:${this.bullet || 'rgba(255,255,255,1)'};
                    opacity:1
                }
                #swiper-pagination_${this.id} .swiper-pagination-bullet-active{
                    background:${this.bulletactive || 'blue'};
                    opacity:1
                }
            `,$(El));
            //初始化 swiper

            this.Swiper = new Swiper(`#${this.id}`,{
                pagination:`#swiper-pagination_${this.id}`,
                autoplay:this.autoplay || false,
                loop:this.loop || false
            });
        },
        created(){

        },
        destoryed(){

        }
    };

    return{
        topSwiperPic,
        topSwiper
    }
});

define('topMenu',function (require) {
     const VueSwiper = require("VueSwiper");
     return {
         template:`
            <header class="c-top-menu">

                <div class="menu">

                    <div class="menu-title">

                        <div class="menu-title-wrapper">
                        
                            <slot name="logo">
                            
                            </slot>

                            <i class="iconfont icon-caidan" @click="switchShade"></i>

                        </div>

                    </div>

                    <i-swiper ref="swiper" :not-next-tick="true" :options="{autoplay: 3000,loop: true,}" class="menu-Swiper" v-cloak="">
                        <slot name="swiper">
                            
                        </slot>
                    </i-swiper>

                    <div class="menu-bottom">

                    </div>
                    
                    <transition name="fade">
                    
                        <div class="menu-list" v-show="shade">
                        
                            <i class="iconfont icon-guanbi" @click="switchShade"></i>
                            
                            <ul class="menu-list-main">
                                <slot name="list">
                                        
                                </slot>
                            </ul>
                            
                        </div>
                    
                    </transition>

                </div>

            </header>
         `,
         props:{

         },
         data(){
             return{
                shade:false
             }
         },
         methods:{
            switchShade(){
                this.shade = !this.shade
            }
         },
         mounted(){

         },
         updated(){

         },
         components:{
             "i-swiper":VueSwiper.swiper,
             "i-swiper-slide":VueSwiper.swiperSlide
         },
         watch:{
             shade(val){

             }
         }
     }
});

define(['topMenu','topswiper'],(topMenu,topswiper)=>{
    return {
        topMenu,
        topswiper
    }
});