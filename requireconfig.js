requirejs.config({

	paths:{
		//核心库
		jquery:'lib/Weblib/public/core/libs/jquery/jquery',
		Class:"lib/Weblib/public/core/libs/class/requireClass",
		underscore:"lib/Weblib/public/core/libs/underscore/underscore",
		Vue:"lib/Weblib/public/core/libs/vue/vue.min",
		Vuex:"lib/Weblib/public/core/libs/vue/vuex",
		core:"lib/Weblib/public/core/core",

		//插件库
		layer:"lib/Weblib/public/plus/layer/layer",
		swiper:"lib/Weblib/public/plus/swiper/js/swiper.min",
		echarts:"lib/Weblib/public/plus/echarts/echarts.min",
		zui:"lib/Weblib/public/plus/zui/zui",
		dynamics:"lib/Weblib/public/plus/dynamics/dynamics",


		//require插件库
		text:"lib/Weblib/public/plus/requirejsplus/text",
		domReady:"lib/Weblib/public/plus/requirejsplus/domReady",

		//user插件库


	},
	shim:{
		layer:['jquery'],
		zui:['jquery'],
	}
})