/**

 @Name：layui.flow 流加载
 @Author：贤心
 @License：LGPL


 @重写使用全局模式
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory(require('jquery'));
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    var Flow = function(options){
        this.config = {
            pause:false,
            page:0,
            fn:{},
            scrollerFn:{},
            scrollElem:{}
        };
    }
        ,ELEM_MORE = 'layui-flow-more'
        ,ELEM_LOAD = '<i class="fa fa-spinner fa-spin fa-2x fa-fw"></i>'
    //主方法
    Flow.prototype.load = function(options){
        var that = this,lock, isOver, lazyimg, timer;
        options = options || {};

        var elem = $(options.elem); if(!elem[0]) return;
        var scrollElem = this.config.scrollElem = $(options.scrollElem || document); //滚动条所在元素
        var mb = options.mb || 50; //与底部的临界距离
        var isAuto = 'isAuto' in options ? options.isAuto : true; //是否自动滚动加载
        var end = options.end || '没有更多了'; //“末页”显示文案

        //fn 暴露到全局
        this.config.fn = options.done;

        //滚动条所在元素是否为document
        var notDocment = options.scrollElem && options.scrollElem !== document;

        //加载更多
        var ELEM_TEXT = '<cite>加载更多</cite>'
            ,more = $('<div class="layui-flow-more"><a href="javascript:;">'+ ELEM_TEXT +'</a></div>');

        if(!elem.find('.layui-flow-more')[0]){
            elem.append(more);
        }


        //加载下一个元素
        var next = function(html, over){
            html = $(html);
            more.before(html);
            over = over == 0 ? true : null;
            over ? more.html(end) : more.find('a').html(ELEM_TEXT);
            isOver = over;
            lock = null;
            lazyimg && lazyimg();
        };

        //触发请求
        var done = function(){
            lock = true;
            more.find('a').html(ELEM_LOAD);
            typeof that.config.fn === 'function' && that.config.fn(++that.config.page, next);
        };

        done();

        //不自动滚动加载
        more.find('a').on('click', function(){
            var othis = $(this);
            if(isOver) return;
            lock || done();
        });

        //如果允许图片懒加载
        if(options.isLazyimg){
            var lazyimg = that.lazyimg({
                elem: options.elem + ' img'
                ,scrollElem: options.scrollElem
            });
        }

        if(!isAuto) return that;

        var SCROLLFN = this.config.scrollerFn  = function(){
            if(!that.config.pause){
                var othis = $(this), top = othis.scrollTop();

                if(timer) clearTimeout(timer);
                if(isOver) return;

                timer = setTimeout(function(){
                    //计算滚动所在容器的可视高度
                    var height = notDocment ? othis.height() : $(window).height();

                    //计算滚动所在容器的实际高度
                    var scrollHeight = notDocment
                        ? othis.prop('scrollHeight')
                        : document.documentElement.scrollHeight;

                    //临界点
                    if(scrollHeight - top - height <= mb){
                        lock || done();
                    }
                }, 100);
            }
        }

        scrollElem.on('scroll',SCROLLFN);

        return that;
    };

    //图片懒加载
    Flow.prototype.lazyimg = function(options){
        var that = this, index = 0, haveScroll;
        options = options || {};

        var scrollElem = $(options.scrollElem || document); //滚动条所在元素
        var elem = options.elem || 'img';

        //滚动条所在元素是否为document
        var notDocment = options.scrollElem && options.scrollElem !== document;

        //显示图片
        var show = function(item, height){
            var start = scrollElem.scrollTop(), end = start + height;
            var elemTop = notDocment ? function(){
                return item.offset().top - scrollElem.offset().top + start;
            }() : item.offset().top;

            /* 始终只加载在当前屏范围内的图片 */
            if(elemTop >= start && elemTop <= end){
                if(!item.attr('src')){
                    var src = item.attr('lay-src');
                    layui.img(src, function(){
                        var next = that.lazyimg.elem.eq(index);
                        item.attr('src', src).removeAttr('lay-src');

                        /* 当前图片加载就绪后，检测下一个图片是否在当前屏 */
                        next[0] && render(next);
                        index++;
                    });
                }
            }
        }, render = function(othis, scroll){

            //计算滚动所在容器的可视高度
            var height = notDocment ? (scroll||scrollElem).height() : $(window).height();
            var start = scrollElem.scrollTop(), end = start + height;

            that.lazyimg.elem = $(elem);

            if(othis){
                show(othis, height);
            } else {
                //计算未加载过的图片
                for(var i = 0; i < that.lazyimg.elem.length; i++){
                    var item = that.lazyimg.elem.eq(i), elemTop = notDocment ? function(){
                        return item.offset().top - scrollElem.offset().top + start;
                    }() : item.offset().top;

                    show(item, height);
                    index = i;

                    //如果图片的top坐标，超出了当前屏，则终止后续图片的遍历
                    if(elemTop > end) break;
                }
            }
        };

        render();

        if(!haveScroll){
            var timer;
            scrollElem.on('scroll', function(){
                var othis = $(this);
                if(timer) clearTimeout(timer)
                timer = setTimeout(function(){
                    render(null, othis);
                }, 50);
            });
            haveScroll = true;
        }
        return render;
    };
    //停止滚动事件
    // PAUSE 控制暂停
    Flow.prototype.changeState = function(pause){
        this.config.pause = pause;
    }
    // 动态改变 page 页数
    Flow.prototype.changePage=function(num){
        this.config.page = num;
    }
    //改变 fn
    Flow.prototype.changeFn = function(fn){
        this.config.fn = fn;
    }
    //销毁全局滚动
    Flow.prototype.destroy = function(){
        this.config.scrollElem.off("scroll",this.config.scrollerFn)
    }

    return Flow;
}));
 
 
