requirejs.config({
	// baseUrl:"",
	paths:{
		//核心库
		jquery:'lib/Weblib/public/core/libs/jquery/jquery',
		Class:"lib/Weblib/public/core/libs/class/requireClass",
		underscore:"lib/Weblib/public/core/libs/underscore/underscore",
		Vue:"lib/Weblib/public/core/libs/vue/vue.min",
		Vuex:"lib/Weblib/public/core/libs/vue/vuex",
		core:"lib/Weblib/public/core/core",
		h5core:"lib/Weblib/public/core/H5core",
        backbone:"lib/Weblib/public/core/libs/backBone/backBone",
        backboneL:"lib/Weblib/public/core/libs/backBone/backBone-lodash",
		lodash:"lib/Weblib/public/core/libs/lodash/lodash.min",
		//插件库
		layer:"lib/Weblib/public/plus/layer/layer",
		swiper:"lib/Weblib/public/plus/swiper/js/swiper.min",
		echarts:"lib/Weblib/public/plus/echarts/echarts.min",
		zui:"lib/Weblib/public/plus/zui/zui",
		weixin:'http://res.wx.qq.com/open/js/jweixin-1.1.0',
		sweetalert:'lib/Weblib/public/plus/sweetalert/sweetalert.min',
        pagination:'lib/Weblib/public/plus/pagination/lib/jquery.pagination',
        wangEditor:"lib/Weblib/public/plus/wangEditor/js/wangEditor.min",
        lazyload:'lib/Weblib/public/plus/lazyload/lazyload.min',
		store:'lib/Weblib/public/plus/store/store.min',

		//require插件库
		text:"lib/Weblib/public/plus/requirejsplus/text",
		domReady:"lib/Weblib/public/plus/requirejsplus/domReady",

		//h5 手势库
		AlloyFinger:'lib/Weblib/public/plus/AlloyFinger/alloy_finger',
		
	},
	shim:{
		layer:['core'],
		zui:['core'],
		AlloyFinger:{
			exports:'AlloyFinger'
		},
	}
})