define([], function () {
    var transition = {};
    transition.install = function (Vue, router, options) {
        if (options === void 0) { options = {}; }
        var route, lastPath, transitionType, binding = {}, op, //配置项
            instances, //组件激活时判断是否属于route中，不属于无动画
            coord = { x: 0, y: 0 }; //按下坐标
        _initOptions();
        Vue.directive('transition', {
            bind: function (el, _binding, vnode, oldVnode) {
                binding = _binding;
            }
        });
        //旧组件退出后会被销毁，所以建个容器，在销毁后重新挂在上去，作为“底色”
        function setBackground() {
            //不属于当前进场路由匹配到的组件，则不处理
            var obj = this.$el.classList;
            if (!obj)
                return;
            var arr = [];
            Object.keys(obj).forEach(function (item) {
                arr.push(obj[item]);
            });
            var isInArr = false;
            arr.map(function (item) {
                if (item === 'animated')
                    isInArr = true;
            });
            //我想屎。。。
            if (!isInArr)
                return;
            var bacgrEle = document.createElement('div');
            bacgrEle.id = 'vueg-background';
            var vm = instances.default;
            if (vm) {
                //每次重新挂载vue都会清空被挂载元素，所有每次都要再添加进去
                var vuegBac = document.getElementById('vueg-background');
                //不存在就插入
                if (!vuegBac) {
                    vm.$el.parentElement.appendChild(bacgrEle);
                    vuegBac = bacgrEle;
                }
                vuegBac.innerHTML = '';
                vuegBac.classList = [];
                vuegBac.appendChild(this.$el);
                // console.log(vuegBac)
            }
        }
        Vue.mixin({
            mounted: addEffect,
            activated: addEffect,
            beforeDestroy: setBackground,
            deactivated: setBackground
        });
        router.afterEach(function (to, from) {
            route = to;
            var toDepth = to.path.split('/').length;
            var fromDepth = from.path.split('/').length;
            if (to.path.charAt(to.path.length - 1) !== '/')
                toDepth += 1;
            if (from.path.charAt(from.path.length - 1) !== '/')
                fromDepth += 1;
            transitionType = toDepth > fromDepth ? 'forward' : 'back';
            //深度相同
            if (toDepth === fromDepth) {
                if (lastPath === to.path) {
                    transitionType = 'back';
                }
                else {
                    transitionType = 'forward';
                }
                //深度相同时禁用动画
                if (op.sameDepthDisable)
                    transitionType = '';
                lastPath = from.path;
            }
            //首次进入无效果
            if (to.path === from.path && to.path === lastPath)
                transitionType = 'first';
            //关闭首次进入渐进动画
            if (op.firstEntryDisable)
                transitionType = '';
            //tabs转场控制
            if (from.name && to.name) {
                var fromIndex = op.tabs.findIndex(function (item) {
                    return item.name === from.name;
                }), toIndex = op.tabs.findIndex(function (item) {
                    return item.name === to.name;
                });
                if (!op.tabsDisable && fromIndex !== -1 && toIndex !== -1) {
                    //启用tabs控制
                    if (toIndex > fromIndex)
                        transitionType = 'forward';
                    if (toIndex < fromIndex)
                        transitionType = 'back';
                    if (toIndex === fromIndex)
                        transition = '';
                }
                else {
                    //tabs禁用动画
                    if (fromIndex !== -1 && toIndex !== -1)
                        transitionType = '';
                }
            }
            //禁用转场动画配置
            if (op.disable)
                transition = '';
            //获取进场的组件instances，{default:component}
            var matched = to.matched[0];
            if (matched && matched.instances) {
                instances = matched.instances;
            }
            else
                instances = null;
        });
        function isInRoute() {
            //对于嵌套路由，默认为关闭动画，需要在组件的data.vuegConfig中配置disable为false启用
            if (this.vuegConfig && this.vuegConfig.disable === false) {
                this.$el.style.boxShadow = 'initial';
                return true;
            }
            //router.afterEach后获得新页面的组件，组件渲染或激活后触发addEffect
            if (instances && instances.default && instances.default._uid !== this._uid)
                return false;
            else
                return true;
        }
        //router.afterEach后获得新页面的组件，组件渲染或激活后触发addEffect
        function addEffect(ins) {
            if (ins === void 0) { ins = this; }
            //不属于当前进场路由匹配到的组件，则无动画
            if (!isInRoute.call(ins))
                return;
            if (!ins)
                return;
            if (binding.value === false)
                return;
            if (!route)
                return;
            var el = this.$el;
            if (!el)
                return;
            if (!el.parentElement)
                return;
            //防止某组件的配置影响其他组件，每次都初始化一下数据
            _initOptions();
            //全局vueg配置
            Object.keys(options).forEach(function (key) {
                op[key] = options[key];
            });
            //组件vueg配置
            var vuegConfig = this.$data.vuegConfig;
            if (vuegConfig) {
                Object.keys(vuegConfig).forEach(function (key) {
                    op[key] = vuegConfig[key];
                });
            }
            //设置首次进入的渐进显示时长
            if (transitionType === 'first') {
                el.style.animationDuration = op.firstEntryDuration + 's';
                el.classList.add('fadeIn');
            }
            //转场动画时长
            if (transitionType)
                el.style.animationDuration = op.duration + 's';
            el.classList.add('animated');
            var coordAnim = ['touchPoint'];
            var anim;
            switch (transitionType) {
                case 'forward':
                    anim = op.forwardAnim;
                    break;
                case 'back':
                    anim = op.backAnim;
                    break;
                default:
                    break;
            }
            if (anim)
                el.classList.add(anim);
            //需要结合js获取触摸坐标的转场设置
            var style, head = document.head || document.getElementsByTagName('head')[0], cssText;
            style = document.getElementById('vueg-style');
            if (!style) {
                style = document.createElement('style');
                style.type = 'text/css';
                style.id = 'vueg-style';
                head.appendChild(style);
            }
            if (coordAnim.findIndex(function (item) { return item === anim; }) !== -1) {
                switch (anim) {
                    case 'touchPoint':
                        var centerPoint = {
                            x: document.documentElement.clientWidth / 2,
                            y: document.documentElement.clientHeight / 2
                        };
                        cssText = ".touchPoint{\n                                    height:" + document.documentElement.clientHeight + "px!important;\n                                    overflow:hidden;\n                                    animation-timing-function:ease-in;\n                                    animation-name:touchPoint;\n                                    position: relative;\n                                }\n                                @keyframes touchPoint {\n                                    from {\n                                        opacity:0.8;\n                                        transform: scale(0, 0);\n                                        left:" + (-centerPoint.x + coord.x) + "px;\n                                        top:" + (-centerPoint.y + coord.y) + "px;\n                                    }\n                                    to{\n                                        left:0;\n                                        top:0;\n                                    }\n                                }";
                        var textNode = document.createTextNode(cssText);
                        style.appendChild(textNode);
                        break;
                    default:
                        break;
                }
            }
            //动画完成后移除class
            setTimeout(function () {
                el.classList.remove(op.forwardAnim);
                el.classList.remove(op.backAnim);
                el.style.animationDuration = '0s';
                var vuegBac = document.getElementById('vueg-background');
                if (vuegBac)
                    vuegBac.innerHTML = '';
                if (coordAnim.findIndex(function (item) { return item === anim; }) !== -1)
                    style.innerHTML = '';
            }, op.duration * 1000);
            setTimeout(function () {
                el.classList.remove('fadeIn');
            }, op.firstEntryDuration * 1000);
        }
        document.addEventListener('mousedown', getCoord);
        document.addEventListener('touchstart', getCoord);
        //获得按下坐标
        function getCoord(e) {
           // console.log(e);
            if (e.type === 'mousedown') {
                coord.x = e.pageX;
                coord.y = e.pageY;
            }
            else {
                coord.x = e.touches[0].pageX;
                coord.y = e.touches[0].pageY;
            }
        }
        function _initOptions() {
            //默认配置
            op = {
                duration: '0.3',
                firstEntryDisable: false,
                firstEntryDuration: '.6',
                forwardAnim: 'fadeInRight',
                backAnim: 'fadeInLeft',
                sameDepthDisable: false,
                tabs: [],
                tabsDisable: false,
                disable: false //禁用转场动画
            };
        }
    };
    return transition;
});