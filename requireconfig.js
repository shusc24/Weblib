requirejs.config({
	// baseUrl:"",
	paths:{
		//核心库
        jquery:'https://cdn.staticfile.org/jquery/3.1.1/jquery.min',
        underscore:"https://cdn.staticfile.org/lodash.js/4.17.2/lodash.min",
        Vue:"//cdn.bootcss.com/vue/2.1.10/vue.min",
        backbone:"https://cdn.staticfile.org/backbone.js/1.3.3/backbone-min",
        lodash:"https://cdn.staticfile.org/lodash.js/4.17.2/lodash.min",

        // Vue插件
        Vuex:"https://cdn.staticfile.org/vuex/2.1.1/vuex.min",
        Vresource:["//cdn.bootcss.com/vue-resource/1.1.0/vue-resource.min"],
        Vrouter:["//cdn.bootcss.com/vue-router/2.2.0/vue-router.min"],

        core:"lib/Weblib/public/core/core",
        h5core:"lib/Weblib/public/core/H5core",
        Class:"lib/Weblib/public/core/libs/Base/Base",
		//插件库
        swiper:"https://cdn.staticfile.org/Swiper/3.4.1/js/swiper.min",
        swiper2:"https://cdn.staticfile.org/Swiper/2.7.6/idangerous.swiper", //兼容ie6 ie7
        echarts:"https://cdn.staticfile.org/echarts/3.3.2/echarts.min",
        sweetalert:'https://cdn.staticfile.org/sweetalert/1.1.3/sweetalert.min',
		weixin:'http://res.wx.qq.com/open/js/jweixin-1.1.0',
        popper:'https://cdn.staticfile.org/popper.js/0.6.4/popper.min',
        cropper:"//cdn.bootcss.com/cropper/3.0.0-alpha.1/cropper.min",//图片裁剪插件
        layer:"//cdn.bootcss.com/layer/3.0.1/layer.min",
        socketIo:'https://cdn.staticfile.org/socket.io/1.7.2/socket.io.min',
        dynamics:'https://cdn.staticfile.org/dynamics.js/1.1.5/dynamics.min',//物理库
        director:'https://cdn.staticfile.org/Director/1.2.8/director.min',//简单的前端路由

		zui:"lib/Weblib/public/plus/zui/zui",
        pagination:'lib/Weblib/public/plus/pagination/lib/jquery.pagination',
        wangEditor:"lib/Weblib/public/plus/wangEditor/js/wangEditor.min",
        lazyload:'lib/Weblib/public/plus/lazyload/lazyload.min',
		store:'lib/Weblib/public/plus/store/store.min',
        owlCarousel:'lib/Welib/public/plus/owlCarousel/owl.carousel',
        SMV:'lib/Weblib/public/plus/SMValidator/SMValidator.min',//表单验证插件

		//require插件库
		text:"https://cdn.staticfile.org/require-text/2.0.12/text.min",
		domReady:"https://cdn.staticfile.org/require-domReady/2.0.1/domReady.min",
		css:'https://cdn.staticfile.org/require-css/0.1.8/css.min',
        backboneLocal:'https://cdn.staticfile.org/backbone-localstorage.js/1.1.16/backbone.localStorage-min',
		//h5 手势库
		AlloyFinger:'lib/Weblib/public/plus/AlloyFinger/alloy_finger'

	},
	shim:{
		layer:['jquery','css!//cdn.bootcss.com/layer/3.0.1/skin/default/layer.min.css'],
		zui:['jquery'],
		AlloyFinger:{
			exports:'AlloyFinger'
		},
        sweetalert:['css!https://cdn.staticfile.org/sweetalert/1.1.3/sweetalert.min.css'],
        swiper2:['css!https://cdn.staticfile.org/Swiper/2.7.6/idangerous.swiper.min.css'],
        cropper:['jquery','css!//cdn.bootcss.com/cropper/3.0.0-alpha.1/cropper.min.css'],
        director:{
            exports:'Router'
        }
	}
})