requirejs.config({
    baseUrl:"../js",
	paths:{
		//核心库
        jquery:'https://cdn.bootcss.com/jquery/2.2.4/jquery.min',
        jqueryOne:'https://cdn.bootcss.com/jquery/1.12.4/jquery.min',
        jqueryTwo:'https://cdn.bootcss.com/jquery/2.2.4/jquery.min',
        Vue:"https://cdn.bootcss.com/vue/2.3.4/vue.min",
        VueOne:'https://cdn.bootcss.com/vue/1.0.28/vue.min',
        backbone:"https://cdn.bootcss.com/backbone.js/1.3.3/backbone-min",

        //underscore 及 lodash
        underscore:"https://cdn.bootcss.com/underscore.js/1.8.3/underscore-min",
        lodash:"https://cdn.bootcss.com/lodash.js/4.17.4/lodash.min",
        lodashCore:'https://cdn.bootcss.com/underscore.js/1.8.3/underscore-min',

        // Vue插件
        Vuex:"https://cdn.bootcss.com/vuex/2.3.1/vuex.min",
        Vresource:["https://cdn.bootcss.com/vue-resource/1.3.4/vue-resource.min"],
        Vrouter:["https://cdn.bootcss.com/vue-router/2.6.0/vue-router.min"],

        core:"lib/webLib/public/core/core",
        h5core:"lib/webLib/public/core/H5core",
        Class:"lib/webLib/public/core/libs/Base/Base",
		//插件库
        swiper:"https://cdn.bootcss.com/Swiper/3.4.2/js/swiper.min",
        swiper2:"https://cdn.bootcss.com/Swiper/2.7.6/idangerous.swiper.min", //兼容ie6 ie7
        echarts:"https://cdn.bootcss.com/echarts/3.6.1/echarts.min",
        sweetalert:'https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min',
		weixin:'http://res.wx.qq.com/open/js/jweixin-1.1.0',
        popper:'https://cdn.bootcss.com/popper.js/1.9.1/popper.min',
        cropper:"https://cdn.bootcss.com/cropper/3.0.0-alpha.1/cropper.min",//图片裁剪插件
        layer:"https://cdn.bootcss.com/layer/3.0.1/layer.min",
        socketIo:'https://cdn.bootcss.com/socket.io/1.7.3/socket.io.min.',
        dynamics:'https://cdn.bootcss.com/dynamics.js/1.1.5/dynamics.min',//物理库

        //前端路由 文档地址 https://github.com/flatiron/director  手机版有兼容问题
        director:'https://cdn.bootcss.com/Director/1.2.8/director.min',

		zui:"lib/webLib/public/plus/zui/zui",
        pagination:'lib/webLib/public/plus/pagination/lib/jquery.pagination',
        wangEditor:"lib/webLib/public/plus/wangEditor/js/wangEditor.min",
        lazyload:'lib/webLib/public/plus/lazyload/lazyload.min',
		store:'lib/webLib/public/plus/store/store.min',
        owlCarousel:'lib/Welib/public/plus/owlCarousel/owl.carousel',

        //表单验证插件 文档地址：https://github.com/WLDragon/SMValidator
        SMV:'lib/webLib/public/plus/SMValidator/SMValidator.min',
        SMVRules:'lib/webLib/public/plus/SMValidator/SMVRules',

		//require插件库
		text:"https://cdn.bootcss.com/require-text/2.0.12/text.min",
		domReady:"https://cdn.bootcss.com/require-domReady/2.0.1/domReady.min",
		css:'https://cdn.bootcss.com/require-css/0.1.10/css.min',
        backboneLocal:'https://cdn.staticfile.org/backbone-localstorage.js/1.1.16/backbone.localStorage-min',
		//h5 手势库
		AlloyFinger:'lib/webLib/public/plus/AlloyFinger/alloy_finger',

        //layuiFlow 改写成Amd 方式 文档同 layui的文档
        flow:'lib/webLib/public/plus/layuiflow/flow',

        //滚动动画插件 官方文档: https://github.com/jlmakes/scrollreveal
        scrollreveal:'https://cdn.bootcss.com/scrollReveal.js/3.3.2/scrollreveal.min',

        //iscroll 自定义滚动条 https://github.com/cubiq/iscroll
        iscroll:'https://cdn.bootcss.com/iScroll/5.2.0/iscroll.min',

        //正则库 官方文档：https://github.com/slevithan/xregexp
        xregexp: 'https://cdn.bootcss.com/xregexp/3.1.1/xregexp-all.min',

        //anime 动画库 官方文档：http://anime-js.com/ https://github.com/juliangarnier/anime
        anime:'https://cdn.bootcss.com/animejs/2.0.0/anime.min',

        //复制到粘贴板
        clipboard:'https://cdn.bootcss.com/clipboard.js/1.6.1/clipboard.min',

        //单页面切换
        mobilebone:'https://cdn.bootcss.com/mobilebone/2.6.1/mobilebone.min',

        //cookies 工具 github文档:https://github.com/js-cookie/js-cookie
        cookies:'https://cdn.bootcss.com/js-cookie/2.1.3/js.cookie.min',

        //input格式化库 github文档 https://github.com/nosir/cleave.js 官网：http://nosir.github.io/cleave.js/
        cleave:'https://cdn.bootcss.com/cleave.js/0.7.15/cleave.min',

        //动画库兼容IE8  http://velocityjs.org/ velocityUi 预制的动画效果 调用直接调用 Ui
        velocity:'https://cdn.bootcss.com/velocity/1.5.0/velocity.min',

        velocityUi:'https://cdn.bootcss.com/velocity/1.5.0/velocity.ui.min',

        //handlebars 模板引擎
        handlebars:"https://cdn.bootcss.com/handlebars.js/4.0.6/handlebars.min",

        // 元素滚动 固定jquery插件 https://github.com/kujian/scrollfix
        scollfix:'lib/webLib/public/plus/scrollfix/scrollfix.min',

        //lightbox 插件  官方文档：https://github.com/lokesh/lightbox2/
        lightbox:'https://cdn.bootcss.com/lightbox2/2.9.0/js/lightbox.min',

        //监控滚动插件 官方文档：http://scrollmagic.io/examples/basic/simple_pinning.html
        // github :  https://github.com/janpaepke/ScrollMagic

        ScrollMagic:'https://cdn.bootcss.com/ScrollMagic/2.0.5/ScrollMagic.min',
        // ScrollMagic velocity 插件
        ScrollMagicV:'https://cdn.bootcss.com/ScrollMagic/2.0.5/plugins/animation.velocity.min',

        //jquery 跑马灯
        Marquee:'https://cdn.bootcss.com/jQuery.Marquee/1.3.94/jquery.marquee.min',

        //环境判断
        juge:'lib/webLib/user/shusc/juge/juge',

        //日期判断
        moment:'https://cdn.bootcss.com/moment.js/2.18.1/moment.min',

        //zepto
        zepto:'https://cdn.bootcss.com/zepto/1.2.0/zepto.min',

        //vueg
        vueg:"lib/webLib/public/plus/vueg/vueg",
        //home

        //axios
        axios:'https://cdn.bootcss.com/axios/0.16.2/axios.min'

    },
	shim:{
		layer:['jquery','css!https://cdn.bootcss.com/layer/3.0.1/skin/default/layer.min.css'],
		zui:['jquery'],
		AlloyFinger:{
		    dep:[],
			exports:'AlloyFinger'
		},
        sweetalert:['css!https://cdn.bootcss.com/sweetalert/1.1.3/sweetalert.min.css'],
        swiper2:['css!https://cdn.bootcss.com/Swiper/2.7.6/idangerous.swiper.min.css'],
        cropper:['jquery','css!https://cdn.bootcss.com/cropper/3.0.0-alpha.1/cropper.min.css'],
        director:{
            exports:'Router'
        },
        flow:['jquery','css!lib/webLib/public/plus/layuiflow/flow.css'],
        mobilebone:['css!https://cdn.bootcss.com/mobilebone/2.6.1/mobilebone.min.css'],
        cleave:['https://cdn.bootcss.com/cleave.js/0.7.14/addons/cleave-phone.cn.js'],
        scollfix:['jquery'],
        lightbox:['css!https://cdn.bootcss.com/lightbox2/2.9.0/css/lightbox.min.css'],
        velocityUi:['velocity'],
        Marquee:['jquery'],
        swiper:['css!https://cdn.bootcss.com/Swiper/3.4.2/css/swiper.min.css']
	}
});
(function () {
    if(window['adaptive']){
        window['adaptive'].desinWidth = 640;
        window['adaptive'].baseFont = 24;
        window['adaptive'].init();
    }
}());