import _ from "lodash";
import $ from "jquery";
import vue from "vue";
import BackTop from "iview/src/components/back-top";
import Spin from 'iview/src/components/spin'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper from "swiper"
import "iview/dist/styles/iview.css"

requiredefine("Vue",()=>{
    return vue
});
requiredefine('vue',()=>{
    return vue
});
requiredefine('jquery',()=>{
    window.$ = window.jQuery = $;
    return $
});
requiredefine("lodash",()=>{
    return _
});
requiredefine("BackTop",()=>{
   return BackTop
});

requiredefine("Spin",()=>{
    return Spin
});

requiredefine('swiper',function () {
   return Swiper
});

requiredefine("VueSwiper",['css!https://cdn.bootcss.com/Swiper/3.4.2/css/swiper.min.css'],function () {
    return VueAwesomeSwiper
});

requiredefine("vuelazy",function () {
    return VueLazyload
});



