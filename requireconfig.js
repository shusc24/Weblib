// 该文件应放置在js文件夹之下

requirejs.config({
	paths:{
		jquery:'../lib/jquery',
		Vue:'../lib/vue',
		Vuemini:'../lib/vue.min',
		layer:'../lib/layer/layer',
		swiper:'../lib/swiper/js/swiper.min',
		echarts:'../lib/echarts/echarts.min',

		// 自定义对象
		pageAdp:'../lib/usermod/pageAdp/pageAdp',
		Validator:'../lib/usermod/Validator/Validator',
		VaildatorStrategies:'../lib/usermod/Validator/VaildatorStrategies',
		listheader:'../lib/usermod/Listheader/Listheader',
		commfn:'../lib/usermod/CommFn',
		listheaderExtend:'../lib/usermod/Listheader/ListheaderExtend',
		twoColsWarpper:'../lib/usermod/twoColsWarpper/twoColsWarpper',
	}
})