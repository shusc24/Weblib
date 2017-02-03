requirejs.config({
	// baseUrl:"",
	paths:{
		//核心库
        jquery:'https://cdn.staticfile.org/jquery/3.1.1/jquery.min',
        underscore:"https://cdn.staticfile.org/lodash.js/4.17.2/lodash.min",
        Vue:"https://cdn.staticfile.org/vue/2.1.6/vue.min",
        Vuex:"https://cdn.staticfile.org/vuex/2.1.1/vuex.min",
        backbone:"https://cdn.staticfile.org/backbone.js/1.3.3/backbone-min",
        lodash:"https://cdn.staticfile.org/lodash.js/4.17.2/lodash.min",
        cropper:"https://cdn.staticfile.org/cropper/2.3.4/cropper.min",//图片裁剪插件

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

        layer:"lib/Weblib/public/plus/layer/layer",
		zui:"lib/Weblib/public/plus/zui/zui",
        pagination:'lib/Weblib/public/plus/pagination/lib/jquery.pagination',
        wangEditor:"lib/Weblib/public/plus/wangEditor/js/wangEditor.min",
        lazyload:'lib/Weblib/public/plus/lazyload/lazyload.min',
		store:'lib/Weblib/public/plus/store/store.min',
        owlCarousel:'lib/Welib/public/plus/owlCarousel/owl.carousel',

		//require插件库
		text:"https://cdn.staticfile.org/require-text/2.0.12/text.min",
		domReady:"https://cdn.staticfile.org/require-domReady/2.0.1/domReady.min",
		css:'https://cdn.staticfile.org/require-css/0.1.8/css.min',
        backboneLocal:'https://cdn.staticfile.org/backbone-localstorage.js/1.1.16/backbone.localStorage-min',
		//h5 手势库
		AlloyFinger:'lib/Weblib/public/plus/AlloyFinger/alloy_finger',
	},
	shim:{
		layer:['jquery'],
		zui:['jquery'],
		AlloyFinger:{
			exports:'AlloyFinger'
		},
        sweetalert:['css!https://cdn.staticfile.org/sweetalert/1.1.3/sweetalert.min.css'],
        swiper2:['css!https://cdn.staticfile.org/Swiper/2.7.6/idangerous.swiper.min.css'],
        cropper:['jquery','css!https://cdn.staticfile.org/cropper/2.3.4/cropper.min.css'],
	}
})