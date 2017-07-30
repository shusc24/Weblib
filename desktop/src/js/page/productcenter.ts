declare let define:any;
define((require)=>{
    const $ = require('jquery'),_ = require("lodash"),Vue = require('vue'),VueRouter = require('Vrouter'),layer = require("layer");
    //加载模板引擎
    const Template = require('artTemplate');
    require('velocity');
    //加载plus 库
    let {Banner} = require("plus");
    //加载组件
    let pagination = require('pagination');

    //加载页面
    let goodsbox = resolve=> require(['goodsBox'],resolve);

    //使用vuerouter
    Vue.use(VueRouter);

    const routes = [
            {path:'/:id',component:goodsbox}
    ];

    const router = new VueRouter({
        routes
    });

    let productPage = new Vue({
        data:()=>{
            return{
                pagination:{
                    maxpage:3,
                    page:1
                }
            }
        },
        components:{
          "dr-pagination":pagination
        },
        methods:{
            Fngetgoods(page){
                layer.load(2,{
                    shade: [0.3,'#fff']
                });
                $.get("http://www.easy-mock.com/mock/5960750f9adc231f357bccdf/getItem/itempc",{p:page}).done((Rs)=>{
                    layer.closeAll();
                    let html = Template.render($("#goodsItemTpl").html(),{items:Rs.items});
                    $(this.$el).find("#mainList").html(html);
                });
            },
            FngetGoodsData(){
                $.get("http://www.easy-mock.com/mock/5960750f9adc231f357bccdf/getItem/itempc",{p:1}).done((Rs)=>{
                    this.pagination.maxpage = Rs.maxpage
                });
            }
        },
        mounted(){
          _.delay(()=>{
              $(".main-pic")[0].children.length === 0?window.location.href = `/html/productCenter.html#/1`:null;
          },1000);
          this.FngetGoodsData();
        },
        router
    }).$mount("#productMain")

});
