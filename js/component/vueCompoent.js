define('jqueryUtil',['jquery'],function ($) {
    $.extend({
        createCss(id,css,to){
            if($(`${id}`).length === 0){
                $(`<style id="${id}"></style>`).html(css).appendTo(to || $("head"))
            }
        }
    })
});
//topswiper
define('topswiper',['vue','swiper','lodash','jquery','jqueryUtil'],function (Vue,Swiper,_,$) {

    //轮播图图片
    Vue.component("dr-topSwiperPic",{
        template:`
            <a :href="href || 'javscript:'" class="swiper-slide  topSwiper-pic db" :style="'background-image: url(' + imgurl +')'"></a>
        `,
        props:['href','imgurl'],
    })

    //轮播图
    Vue.component("dr-topSwiper",{
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
    });
});
//searchBox
define('searchbox',['vue','jquery','lodash','jqueryUtil'],function (Vue,$,_) {
    //搜索栏
    Vue.component(`dr-searchbox`,{
        template:`
            <div class="c-searchbox" :id="'searchbox_' + id">
            
                <div class="searchbox">
                
                    <div class="searchbox-input">
                        <input v-model="keyword" type="text" class="searchbox-input-box" :placeholder="placeholder || '请输入搜索关键词'">
                    </div>
                    
                    <div class="searchbox-btn" :class="{'searchbox-btn_noactive' : !state}" @click="Fnsearch">
                       <i class="fa fa-search fa-1x"></i>
                    </div>
                    
                </div>
                     
            </div>
           `,
        props:['fn','placeholder'],
        data(){
            return{
                id:_.uniqueId(),
                state:false,
                keyword:''
            }
        },
        methods:{
            Fnsearch(){
                let self = this;
                if(_.isFunction(this.fn) && this.state){
                    this.fn.apply(this,[self.keyword]);
                }
            }
        },
        watch:{
            keyword(){
                this.keyword.length > 0?this.state=true:this.state = false;
            }
        }
    })

});
//底部菜单及按钮
define('footermenu',['vue','jquery','lodash','jqueryUtil'],function (Vue,$,_) {
    //footermenuitem {active:active||this.$store.state.menuState === href}
    Vue.component('dr-footermenuitem',{
        template:`
            <a :href="href || 'javascript:'" class="db footerMenu-item" :class="{active:active}">
                <div class="footerMenu-item-icon">
                    <slot name="icon">
                        
                    </slot>
                </div>
                <div class="footerMenu-item-text"> 
                    {{text}}
                    <slot name="text">
                        
                    </slot>
                </div>
            </a>
        `,
        props:['text','href','state','active'],
        data(){
            return{

            }
        },
        methods:{

        }
    });
    //footermenu
    Vue.component("dr-footermenu",{
        template:`
            <div class="c-footerMenu">
                <ul class="footerMenu">
                    <li class="footerMenu-itemArea" v-for="(item,index) in num">
                        <slot :name="index"></slot>
                    </li>
                </ul>
            </div>
        `,
        props:["num"],
        data(){

        },
        methods:{

        },
        watch:{

        }
    })
});
//首页导航菜单
define('topmenu',['vue','jquery','lodash','swiper','jqueryUtil'],function (Vue,$,_,Swiper) {

    Vue.component('dr-topmenu-item',{
        template:`
            <a :href="href || 'javascript:' " class="topmenu-item" @click="fn">
                <div class="topmenu-item-pic" :style="picstyle">
                    
                </div>
                <p class="topmenu-item-text">{{text}}</p>
            </a>
        `,
        props:['text','href','fn','iconimg'],
        data(){
            return{
                picstyle:{"background-image":`url(${this.iconimg})`}
            }
        }
    });

    //footermenuitem
    Vue.component('dr-topmenu',{
        template:`
            <div class="c-topmenu" :id="'c-topmenu_' + id">

                <div class="topmenu swiper-wrapper">
                
                    <div class="swiper-slide" v-for="item in +(num) || 1">
                    
                        <slot :name="item">
                            
                        </slot>

                    </div>

                </div>

            </div>
        `,
        props:["num"],
        data(){
            return{
                id:_.uniqueId()
            }
        },
        methods:{

        },
        mounted(){
            //初始化 swiper
            this.Swiper = new Swiper(`#c-topmenu_${this.id}`,{
                pagination:`#swiper-pagination_${this.id}`,
                autoplay:this.autoplay || false,
                loop:this.loop || false
            });
        }
    });

});
//首页msgrunbox
define('msgrunbox',['vue','jquery','lodash','jqueryUtil'],(Vue,$,_)=>{
    Vue.component('dr-msgrunbox',{
        template:`
           <div class="c-msgrunBox MTR-5">
                <div class="msgrunBox">
                    <div class="msgrunBox-icon">
                        <i class="fa fa-volume-up"></i>
                    </div>
                    <div class="msgrunBox-msgbox">
                        <transition name="msgrunBoxAni">
                            <a :href="msgdata[showdataIndex].href"> {{msgdata[showdataIndex].text}}</a>
                        </transition>
                    </div>
                </div>
            </div>
           `,
        props:['ajax','time'],
        data(){
            return{
                msgdata:[{
                    href:'javascript:',
                    text:'初始数据'
                }],
                showdataIndex:0,
                Timer:{}
            }
        },
        mounted(){
            $.get(this.ajax).done((Rs)=>{
                this.msgdata = Rs;
                //初始计时器
                this.Timer = setInterval(()=>{
                    this.FnchangeData();
                },+(this.time) || 1000);
            });
        },
        methods:{
            FnchangeData(){
                let Max = this.msgdata.length - 1,Index = this.showdataIndex;
                Index++;
                Index <= Max?this.showdataIndex = Index:this.showdataIndex=0;
            }
        },
        destoryed(){
            window.clearInterval(this.Timer);
        }
    });
});