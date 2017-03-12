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
 				3.1 MT 工具      1.MT.scss
 				4.1 Base 整合了bootstrap的栅格系统版本为 3.37


 		2.public 存放的js公共库	
 			|
 			|
 			|
 			|-------2.1 core 核心库  (框架级核心库或者存放常用工具集合)
 			|		|		
 			|		|
 			|		|---------------- libs 核心库 (存放核心库的分开文件) (jquery,underscore,class,vue,vuex,backBone,lodash)
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
            |---------------- layui(ui组件， 不兼容AMD 使用时需要单独引入)
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
            |---------------- swiper (3 2) (常用的轮播图插件) 2 为了解决兼容性问题
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
            |---------------- wangEditor(pc 富文本输入)1
            |
            |
            |---------------- lazyload(lazyload 图片懒加载)
            |
            |
            |---------------- store(store localstorage的封装) github:https://github.com/jaywcjlove/store.js
            |
            |
            |---------------- owlCarousel (桌面端的js文件)
            |
            |
            |---------------- cropper (基于jquery的图片裁剪工具)
            |
            |
            |---------------- SMValidator (表单验证插件 )
            |
            |
            |---------------- * socketIo (websocket插件 需要node服务器支持)
            |
            |
            |---------------- * dynamics (官方参数调整网站 http://dynamicsjs.com/)
            |
            |
            |---------------- clipboard (官方网站 https://clipboardjs.com/ )




 		3.user 存放成员的自定义的插件或者库

        4.更新日志
        2017.3.11  新增flow  流处理模块 layui模块的分拆 // navSwitch 用于浏览器判断 nav的active // clipboard 用于复制到粘贴板
        2017.2.28  新增anime 动画引擎库 xregexp正则验证库
        2017.2.19  commoncss 整合了 bootstrap的栅格系统 优化了文件结构
        2017.2.10  新增 director 用于简单的前端路由
        2017.2.10  新增 dynamics 用于动画物理效果
        2017.2.10  新增 socketIo 需要node服务器支持
        2017.2.7   新增 SMValidator 插件
        2017.2.3   新增 cropper 插件
        2017.1.18  新增 swiper2 组件
        2016.12.30 新增 owlCarousel 组件
        2016.12.19 新增 store 组件
        2016.12.16 新增 layui 组件 lodash
        2016.12.15 新增 pagination 插件 ，wangEditor 插件  lazyload插件
        2016.12.5  新增 backbone(1.3.3)框架
        2016.11.24 新增 AlloyFinger 库用于触摸操作
        2016.11.22 core.js 替换undersocre 为 lodash

 		        