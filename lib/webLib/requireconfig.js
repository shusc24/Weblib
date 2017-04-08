requirejs.config({
	// baseUrl:"",
	paths:{
		//核心库
        jquery:'https://cdn.bootcss.com/jquery/3.2.1/jquery.min',
        Vue:"https://cdn.bootcss.com/vue/2.2.6/vue.min",
        backbone:"https://cdn.staticfile.org/backbone.js/1.3.3/backbone-min",

        //underscore 及 lodash
        underscore:"https://cdn.staticfile.org/lodash.js/4.17.4/lodash.min",
        lodash:"https://cdn.staticfile.org/lodash.js/4.17.4/lodash.min",
        lodashCore:'https://cdn.bootcss.com/underscore.js/1.8.3/underscore-min',

        // Vue插件
        Vuex:"https://cdn.staticfile.org/vuex/2.2.1/vuex.min",
        Vresource:["https://cdn.bootcss.com/vue-resource/1.2.1/vue-resource.min"],
        Vrouter:["https://cdn.bootcss.com/vue-router/2.3.1/vue-router.min"],

        core:"lib/webLib/public/core/core",
        h5core:"lib/webLib/public/core/H5core",
        Class:"lib/webLib/public/core/libs/Base/Base",
		//插件库
        swiper:"https://cdn.staticfile.org/Swiper/3.4.2/js/swiper.min",
        swiper2:"https://cdn.staticfile.org/Swiper/2.7.6/idangerous.swiper", //兼容ie6 ie7
        echarts:"https://cdn.staticfile.org/echarts/3.3.2/echarts.min",
        sweetalert:'https://cdn.staticfile.org/sweetalert/1.1.3/sweetalert.min',
		weixin:'http://res.wx.qq.com/open/js/jweixin-1.1.0',
        popper:'https://cdn.staticfile.org/popper.js/0.6.4/popper.min',
        cropper:"https://cdn.bootcss.com/cropper/3.0.0-alpha.1/cropper.min",//图片裁剪插件
        layer:"https://cdn.bootcss.com/layer/3.0.1/layer.min",
        socketIo:'https://cdn.staticfile.org/socket.io/1.7.2/socket.io.min',
        dynamics:'https://cdn.staticfile.org/dynamics.js/1.1.5/dynamics.min',//物理库

        //前端路由 文档地址 https://github.com/flatiron/director
        director:'https://cdn.staticfile.org/Director/1.2.8/director.min',

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
		text:"https://cdn.staticfile.org/require-text/2.0.12/text.min",
		domReady:"https://cdn.staticfile.org/require-domReady/2.0.1/domReady.min",
		css:'https://cdn.staticfile.org/require-css/0.1.8/css.min',
        backboneLocal:'https://cdn.staticfile.org/backbone-localstorage.js/1.1.16/backbone.localStorage-min',
		//h5 手势库
		AlloyFinger:'lib/webLib/public/plus/AlloyFinger/alloy_finger',

        //layuiFlow 改写成Amd 方式 文档同 layui的文档
        flow:'lib/webLib/public/plus/layuiflow/flow',

        //滚动动画插件 官方文档: https://github.com/jlmakes/scrollreveal
        scrollreveal:'//cdn.bootcss.com/scrollReveal.js/3.3.2/scrollreveal',

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

	},
	shim:{
		layer:['jquery','css!//cdn.bootcss.com/layer/3.0.1/skin/default/layer.min.css'],
		zui:['jquery'],
		AlloyFinger:{
			exports:'AlloyFinger'
		},
        sweetalert:['css!https://cdn.staticfile.org/sweetalert/1.1.3/sweetalert.min.css'],
        swiper2:['css!https://cdn.staticfile.org/Swiper/2.7.6/idangerous.swiper.min.css'],
        cropper:['jquery','css!https://cdn.bootcss.com/cropper/3.0.0-alpha.1/cropper.min.css'],
        director:{
            exports:'Router'
        },
        flow:['jquery','css!lib/webLib/public/plus/layuiflow/flow.css'],
        mobilebone:['css!lib/webLib/public/plus/mobilebone/mobilebone.css'],
        cleave:['https://cdn.bootcss.com/cleave.js/0.7.14/addons/cleave-phone.cn.js']
	}
});