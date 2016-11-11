requirejs.config({
	baseUrl:"lib/Weblib/",

	paths:{
		//核心库
		jquery:'public/core/libs/jquery/jquery',
		class:"public/core/libs/class/requireClass",
		underscore:"public/core/libs/underscore/underscore",
		Vue:"public/core/libs/vue/vue.min",
		core:"public/core/core",

		//插件库
		layer:"public/plus/layer/layer",
		swiper:"public/plus/swiper/js/swiper.min",
		echarts:"public/plus/echarts/echarts.min",
		zui:"public/plus/zui/zui",

		//require插件库
		text:"public/plus/requirejsplus/text"
	},
	shim:{
		layer:['jquery'],
		zui:['jquery']
	}
})