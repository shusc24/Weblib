import _ from "lodash";
import $ from "jquery";
import home from "./home.vue";
// import vue from "vue";
import vueg from "vueg";
import vuex from "vuex";
import anime from "animejs";
import vueRouter from "vue-router";
import iView from "iview";
import "iview/dist/styles/iview.css"

// requiredefine("Vue",()=>{
//     return vue
// });
requiredefine('jquery',()=>{
    window.$ = window.jQuery = $;
    return $
});
requiredefine("lodash",()=>{
    return _
});
requiredefine("Vuex",()=>{
    return vuex
});
requiredefine("vueg",()=>{
    return vueg
});
requiredefine("Vrouter",()=>{
    return vueRouter
});
requiredefine("iView",()=>{
   return iView
});
requiredefine('anime',()=>{
    return anime
});

requiredefine("hometest",()=>{
    return home
});
