该库基于AMD

1.使用说明
    1.1 放在标准路径: 根目录/lib/Weblib
    1.2 页面引入 requirejs 文件及 requireconfig 文件
    1.3 兼容性 ie9
        PS:(swiper IE10)

2.目录说明
    目录：根目录/lib/Weblib

	1.说明：该库存放通用的js 插件，库，框架 和 css 部分的基本构建组件

	2.文件结构图

		1.commonCSS 存放的公共部分的css文件
				1.1 标准化文件： 1.reset.css 2.Normalize.css
 				2.1 表格系统：   1.rwdgrid.min
 				3.1 UI系统       1.weui-less
 				4.1 动画         1.animate.min
 				5.1 MT 工具      1.MT.scss


 		2.public 存放的js公共库	
 			|
 			|
 			|
 			|-------2.1 core 核心库  (框架级核心库或者存放常用工具集合)
 			|		|		
 			|		|
 			|		|---------------- libs 核心库 (存放核心库的分开文件) (jquery,underscore,class,vue,vuex,backBone)
 			|		|
 			|		|
 			|		|---------------- core.js 核心库文件 (存放核心库的合并文件)(jquery,lodash(基于underscore),class)
 			|       |
 			|       |
 			|       |---------------- h5core.js 核心库文件(存放核心库的合并文件) zepto 1.2 underscore class
 			|
 			|
 			|
 			|-------2.2 plus 库 (用于存放插件级文件)
 			        |
 			        |
 			        |---------------- adpPage (手机端自适应插件)
 			        |
 			        |
 			        |---------------- layer  (常用的弹出层插件)
 			        |
 			        |
 			        |---------------- echarts (百度echarts图表)
 			        |
 			        |
 			        |---------------- swiper (常用的轮播图插件)
 			        |
 			        |
 			        |---------------- zui	 (常用的自定义滚动条)
 			        |
 			        |
 			        |---------------- selectcity (三级城市联动的插件)
 			        |
 			        |
 			        |---------------- requirejsplus (requirejs的插件)
 			        |
 			        |
 			        |---------------- weixin(微信SDK)
 			        |
 			        |
 			        |---------------- AlloyFinger(腾讯Alloy团队的触摸库)
 			        |
 			        |
 			        |---------------- sweetalert(h5 弹出层不依赖)
 			        |
                    |
                    |---------------- pagination(pc h5 分页器)
                    |
                    |
                    |---------------- wangEditor(pc 富文本输入)
                    |
                    |
                    |---------------- lazyload(lazyload 图片懒加载)

 		3.user 存放成员的自定义的插件或者库

日志:
    12.15 新增pagination 插件 ，wangEditor 插件  lazyload插件
    12.5  新增backbone(1.3.3)框架
    11.24 新增 AlloyFinger 库用于触摸操作
    11.22 core.js 替换undersocre 为 lodash
 		        