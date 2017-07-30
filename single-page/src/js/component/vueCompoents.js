define('jqueryUtil', ['jquery'], function ($) {
    $.extend({
        createCss: function (id, css, to) {
            if ($("" + id).length === 0) {
                $("<style id=\"" + id + "\"></style>").html(css).appendTo(to || $("head"));
            }
        }
    });
});
//topswiper
define('topswiper', ['vue', 'swiper', 'lodash', 'jquery', 'jqueryUtil'], function (Vue, Swiper, _, $) {
    var topSwiperPic, topSwiper;
    //轮播图图片
    topSwiperPic = {
        name: "dr-topSwiperPic",
        template: "\n            <a :href=\"href || 'javscript:'\" class=\"swiper-slide  topSwiper-pic db\" :style=\"'background-image: url(' + imgurl +')'\"></a>\n        ",
        props: ['href', 'imgurl'],
    };
    topSwiper = {
        name: "dr-topSwiper",
        template: "\n            <div class=\"c-topSwiper\" :style=\"style\" :id=\"id\">\n                <div class=\"swiper-wrapper\">\n                    <slot>\n                    \n                    </slot>\n                </div>\n                <div v-show=\"pagination\" class=\"swiper-pagination\" :id=\"'swiper-pagination_' + id\" ></div>\n            </div>\n        ",
        props: ['height', 'pagination', 'bullet', 'bulletactive', 'bulletbottom', 'autoplay', 'loop'],
        data: function () {
            return {
                id: _.uniqueId(),
                style: {
                    height: this.height,
                }
            };
        },
        mounted: function () {
            var El = this.$el;
            //改变 pagination 颜色
            $.createCss("swiper-pagination_" + this.id + "_Style", "\n                #swiper-pagination_" + this.id + "{\n                    bottom:" + (this.bulletbottom || "5px") + "\n                }\n                #swiper-pagination_" + this.id + " .swiper-pagination-bullet{\n                    background:" + (this.bullet || 'rgba(255,255,255,1)') + ";\n                    opacity:1\n                }\n                #swiper-pagination_" + this.id + " .swiper-pagination-bullet-active{\n                    background:" + (this.bulletactive || 'blue') + ";\n                    opacity:1\n                }\n            ", $(El));
            //初始化 swiper
            this.Swiper = new Swiper("#" + this.id, {
                pagination: "#swiper-pagination_" + this.id,
                autoplay: this.autoplay || false,
                loop: this.loop || false
            });
        },
        created: function () {
        },
        destoryed: function () {
        }
    };
    return {
        topSwiperPic: topSwiperPic,
        topSwiper: topSwiper
    };
});
//# sourceMappingURL=vueCompoents.js.map