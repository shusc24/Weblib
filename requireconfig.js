requirejs.config({
	baseUrl:"lib/Weblib/",

	paths:{
		//核心库
		jquery:'public/core/libs/jquery/jquery',
		Class:"public/core/libs/class/requireClass",
		underscore:"public/core/libs/underscore/underscore",
		Vue:"public/core/libs/vue/vue.min",
		Vuex:"public/core/libs/vue/vuex",
		core:"public/core/core",

		//插件库
		layer:"public/plus/layer/layer",
		swiper:"public/plus/swiper/js/swiper.min",
		echarts:"public/plus/echarts/echarts.min",
		zui:"public/plus/zui/zui",
		dynamics:"public/plus/dynamics/dynamics",


		//require插件库
		text:"public/plus/requirejsplus/text",
		domReady:"public/plus/requirejsplus/domReady",

		//user插件库


	},
	shim:{
		layer:['jquery'],
		zui:['jquery'],
	}
})