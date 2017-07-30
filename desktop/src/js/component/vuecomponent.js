define('browser', [], function () {
    var browser = {
        versions: function () {
            var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
            var isOpera = userAgent.indexOf("Opera") > -1;
            if (isOpera) {
                return "Opera";
            }
            ; //判断是否Opera浏览器
            if (userAgent.indexOf("Firefox") > -1) {
                return "FF";
            } //判断是否Firefox浏览器
            if (userAgent.indexOf("Chrome") > -1) {
                return "Chrome";
            }
            if (userAgent.indexOf("Safari") > -1) {
                return "Safari";
            } //判断是否Safari浏览器
            if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
                return "IE";
            }
            ; //判断是否IE浏览器
        }(),
    };
    return browser;
});
define('goodsBox', function (require) {
    var _ = require("lodash");
    var Swiper = require("swiper2");
    var $ = require('jquery');
    require('swiperScrollbar');
    return {
        template: "#goodsTpl",
        methods: {
            Fninit: function () {
                var _this = this;
                _.delay(function () {
                    var Banner = new Swiper("#" + _this.id, {
                        loop: true,
                        pagination: "#" + _this.id + "_pagination",
                        paginationClickable: true,
                    });
                    //绑定对象
                    $(_this.$el).on("click", ".swiper-leftArrow", function () {
                        Banner.swipePrev();
                    }).on("click", '.swiper-rightArrow', function () {
                        Banner.swipeNext();
                    });
                    //初始化 swiper
                    new Swiper('.goodsinforBox-text', {
                        scrollContainer: true,
                        mousewheelControl: true,
                        mode: 'vertical',
                        //其他设置
                        scrollbar: {
                            container: '.swiper-scrollbar',
                            draggable: true,
                            hide: true,
                            snapOnRelease: true
                        }
                    });
                }, 0);
            }
        },
        data: function () {
            return {
                swiper: {},
                id: _.uniqueId("swiper_"),
                goodsItem: [],
                state: false
            };
        },
        mounted: function () {
            var _this = this;
            _.delay(function () {
                _this.state = true;
            }, 1000);
        },
        beforeRouteEnter: function (to, from, next) {
            next(function (vm) {
            });
        },
        beforeRouteLeave: function (to, from, next) {
            next(function (vm) {
            });
        },
        watch: {
            "state": function () {
                if (this.state) {
                    this.Fninit();
                }
            },
            '$route': function (to, from) {
                var _this = this;
                //刷新参数放到这里里面去触发就可以刷新相同界面了
                this.state = false;
                _.delay(function () {
                    _this.state = true;
                }, 1000);
            }
        }
    };
});
define('pagination', function (require) {
    var _ = require("lodash");
    var $ = require('jquery');
    return {
        template: "<div class=\"Pagnation MTR-40\">\n                        <span @click=\"FnselectPage(1)\">\n                                    \u9996\u9875\n                                    </span>\n                        <template v-if=\"page == 1\">\n                            <template v-for=\"num in [1,2,3]\">\n                                            <span v-if=\"(num) <= maxpage\" @click=\"FnselectPage(num)\" :class=\"{active:num == 1}\">\n                                                {{num}}\n                                            </span>\n                            </template>\n                        </template>\n                        <template v-if=\"page >= 2\">\n                            <template v-for=\"num in [-1,0,1]\">\n                                    <span v-if=\"(page + num) <= maxpage\" @click=\"FnselectPage(page + num)\" :class=\"{active:num == 0}\">\n                                        {{page + num}}\n                                    </span>\n                            </template>\n                        </template>\n               <span @click=\"FnselectPage(maxpage)\">\n                                \u672B\u9875\n                        </span>\n                </div>",
        props: ['maxpage', 'page'],
        data: function () {
            return {
                page: 1
            };
        },
        methods: {
            FnselectPage: function (num) {
                num = parseInt(num);
                this.page = num;
                this.$emit('pagechange', this.page);
                this.$emit('update:page', this.page);
            }
        },
        mounted: function () {
        }
    };
});
define('pagination2', function (require) {
    var _ = require("lodash");
    var $ = require('jquery');
    return {
        template: "\n                <div class=\"Pagnation MTR-40\">\n                        <span @click=\"FnselectPage(1)\">\n                                        <i class=\"iconfont icon-rilijiantouyoushuang1\" ></i>\n                                    </span>\n                        <template v-if=\"page == 1\">\n                            <template v-for=\"num in [1,2,3,4,5]\">\n                                            <span v-if=\"(num) <= maxpage\" @click=\"FnselectPage(num)\" :class=\"{active:num == 1}\">\n                                                {{num}}\n                                            </span>\n                            </template>\n                        </template>\n                        <template v-if=\"page >= 2\">\n                            <template v-for=\"num in [-2,-1,0,1,2]\">\n                                    <span v-if=\"(page + num) <= maxpage && (page + num) > 0\" @click=\"FnselectPage(page + num)\" :class=\"{active:num == 0}\">\n                                        {{page + num}}\n                                    </span>\n                            </template>\n                        </template>\n                        <span @click=\"FnselectPage(maxpage)\">\n                                <i class=\"iconfont icon-rilijiantouyoushuang\" ></i>\n                        </span>\n                </div>",
        props: ['maxpage', 'page'],
        data: function () {
            return {
                page: 1
            };
        },
        methods: {
            FnselectPage: function (num) {
                num = parseInt(num);
                this.page = num;
                this.$emit('pagechange', this.page);
                this.$emit('update:page', this.page);
            }
        },
        mounted: function () {
        }
    };
});
define('banner', function (require, exports, module) {
    var $ = require("jquery");
    var _ = require("lodash");
    require('velocityUi');
    var bannerItem = require("bannerItem");
    return {
        template: "#bannerTpl",
        data: function () {
            return {
                positon: [],
                dom: [],
                Banner: {}
            };
        },
        methods: {
            init: function () {
                var _this = this;
                this.Banner.find(".slide").each(function (index, item) {
                    _this.dom.push(item);
                });
                this.couterPosition();
            },
            couterPosition: _.throttle(function () {
                var Dom = this.dom;
                var positionData = [{
                        zIndex: 2,
                        left: 0.5,
                        scale: 0.7,
                        opciaty: 0.7,
                        backgoroundopciaty: 0.5
                    }, {
                        zIndex: 3,
                        left: 0,
                        scale: 1,
                        opciaty: 1,
                        backgoroundopciaty: 0
                    }, {
                        zIndex: 2,
                        left: -0.5,
                        scale: 0.7,
                        opciaty: 0.7,
                        backgoroundopciaty: 0.5
                    }];
                _.each(Dom, function (slide, index) {
                    var dom = $(slide);
                    var height = 316;
                    var width = 486;
                    dom
                        .removeClass("active")
                        .velocity("stop")
                        .css({
                        zIndex: positionData[index].zIndex
                    })
                        .velocity({
                        top: "50%",
                        left: "50%",
                        marginLeft: -(width * positionData[index].scale / 2 + positionData[index].left * width) + "px",
                        marginTop: "-" + height * positionData[index].scale / 2 + "px",
                        width: width * positionData[index].scale + "px",
                        height: height * positionData[index].scale + "px",
                    }, {
                        duration: 400,
                        easing: "swing",
                    });
                    //中位添加数据
                    if (index == 1) {
                        _.delay(function () {
                            dom.addClass("active");
                        }, 1000);
                    }
                });
            }, 600),
            sortDomNext: function () {
                this.dom = _.concat(_.tail(this.dom), this.dom[0]);
                this.couterPosition();
            },
            sortDomPrev: function () {
                this.dom = _.concat(_.last(this.dom), _.dropRight(this.dom));
                this.couterPosition();
            }
        },
        mounted: function () {
            this.Banner = $(this.$el);
            this.init();
        },
        components: {
            item: bannerItem
        }
    };
});
define("bannerItem", function (require, exports, module) {
    var $ = require("jquery");
    var _ = require("lodash");
    var browser = require("browser");
    var layer = require('layer');
    require('velocityUi');
    return {
        template: "#bannerItemTpl",
        data: function () {
            return {
                state: false,
                videoState: false,
            };
        },
        props: ['videosrc', 'videoimg', 'text', 'videoid'],
        methods: {
            next: function () {
                this.$emit("next");
            },
            prev: function () {
                this.$emit("prev");
            },
            play: function () {
                this.initVideo();
                this.state = true;
                if (this.video)
                    this.video.play();
            },
            pause: function () {
                this.state = false;
                if (this.video)
                    this.video.pause();
            },
            load: function () {
            },
            max: function () {
                browser.versions === "Chrome" ? this.video.webkitRequestFullScreen() : null;
                browser.versions === "FF" ? this.video.mozRequestFullScreen() : null;
                browser.versions !== "Chrome" && browser.versions !== "FF" ? layer.msg("抱歉 您的浏览器暂时不支持全屏播放") : null;
            },
            initVideo: function () {
                var _this = this;
                this.videoState = true;
                _.delay(function () {
                    _this.video = $(_this.$el).find("video")[0];
                }, 100);
            }
        },
        mounted: function () {
        }
    };
});
//# sourceMappingURL=vuecomponent.js.map