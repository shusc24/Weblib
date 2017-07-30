define(function (require) {
    //加载模板
    var Html = require("text!homeTpl");
    //加载库
    var $ = require("jquery");
    var _ = require('lodash');
    var anime = require("anime");
    var layer = require("layer");
    // 加载全局vue组件
    var home = require("hometest");
    return {
        template: Html,
        data: function () {
            return {
                vuegConfig: {
                    forwardAnim: 'touchPoint',
                    disable: false,
                    duration: "0.3",
                },
            };
        },
        mounted: function () {
        },
        updated: function () {
        },
        components: {
            "i-home": home
        },
        methods: {},
        beforeRouteEnter: function (to, from, next) {
            document.title = "测试页";
            _.delay(function () {
                next(function (vm) {
                    vm.$store.commit("changeLoading", false);
                    $("body").scrollTop(0);
                });
            }, 500);
        },
        beforeRouteLeave: function (to, from, next) {
            next(function (vm) {
            });
        }
    };
});
//# sourceMappingURL=home.js.map