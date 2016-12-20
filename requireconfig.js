requirejs.config({
	// baseUrl:"",
	paths:{
		//核心库
        jquery:'https://cdn.staticfile.org/jquery/3.1.1/jquery.min',
        Class:"lib/Weblib/public/core/libs/class/requireClass",
        underscore:"https://cdn.staticfile.org/underscore.js/1.8.3/underscore-min",
        Vue:"https://cdn.staticfile.org/vue/2.1.4/vue.min",
        Vuex:"https://cdn.staticfile.org/vuex/2.0.0-rc.6/vuex.min",
        core:"lib/Weblib/public/core/core",
        h5core:"lib/Weblib/public/core/H5core",
        backbone:"https://cdn.staticfile.org/backbone.js/1.3.3/backbone-min",
        backboneL:"lib/Weblib/public/core/libs/backBone/backBone-lodash",
        lodash:"https://cdn.staticfile.org/lodash.js/4.17.2/lodash.min",
		//插件库
		layer:"lib/Weblib/public/plus/layer/layer",
		swiper:"lib/Weblib/public/plus/swiper/js/swiper.min",
		echarts:"lib/Weblib/public/plus/echarts/echarts.min",
		zui:"lib/Weblib/public/plus/zui/zui",
		weixin:'http://res.wx.qq.com/open/js/jweixin-1.1.0',
        sweetalert:'https://cdn.staticfile.org/sweetalert/1.1.3/sweetalert.min',
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