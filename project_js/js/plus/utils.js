define('jqueryUtil', ['jquery'], function ($) {
    $.extend({
        createCss: function (id, css, to) {
            if ($("" + id).length === 0) {
                $("<style id=\"" + id + "\"></style>").html(css).appendTo(to || $("head"));
            }
        },
        animateCss: function (animationName, fn) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
                if (fn instanceof Function) {
                    fn.apply(this, null);
                }
            });
            return this;
        }
    });
});
define('browser', ['jquery'], function ($) {
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1,
                presto: u.indexOf('Presto') > -1,
                webKit: u.indexOf('AppleWebKit') > -1,
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
                mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/),
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
                iPad: u.indexOf('iPad') > -1,
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
        destopAdp: function () {
            //ipad  移动端计算 width
            if (browser.versions.mobile && !browser.versions.iPad) {
                var meta = $("<meta name=\"viewport\" content=\"width=1180,initial-scale=scalevalue,maximum-scale=0.2,minimum-scale=0.2,minimal-ui\">");
                meta.appendTo("head");
            }
            else if (browser.versions.iPad) {
                var meta = $("<meta name=\"viewport\" content=\"width=1180,initial-scale=scalevalue,maximum-scale=0.4,minimum-scale=0.4,minimal-ui\">");
                meta.appendTo("head");
            }
        }
    };
    return browser;
});
define(['browser'], function (browser) {
    return {
        browser: browser,
    };
});
