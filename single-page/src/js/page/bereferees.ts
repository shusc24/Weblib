define((require)=> {
    //加载模板
    const Html = require("text!berefereesTpl");
    //加载库
    const $ = require("jquery");
    const _ = require('lodash');
    const components = require("VueComponents");
    const anime = require("anime");
    const layer = require("layer");
    // 加载全局vue组件
    return{
        template:Html,
        data:function(){
            return{
                titleId:1,
                vuegConfig:{
                    forwardAnim:'touchPoint',  //options所有配置可以写在这个对象里，会覆盖全局的配置
                    disable:false,           //对于嵌套路由，默认为关闭动画，需要在组件的data.vuegConfig中配置disable为false启用
                    duration:"0.3",
                },
                formInline: {
                    user: '',
                    contactWay:'',
                    duty:'',
                    sex:'男',
                    politicsStatus:"",
                    advancedDeeds:""
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写您的昵称', trigger: 'blur' }
                    ],
                    contactWay:[
                        {
                            required:true,message:"请填写联系方式",type:'string',trigger:'blur'
                        }
                    ],
                    duty:[
                        {
                            required:true,message:"请填写工作单位及职务",type:'string',trigger:'blur'
                        }
                    ],
                    politicsStatus:[
                        {
                            required:true,message:"请输入您的政治面貌",type:'string',trigger:'blur'
                        }
                    ],
                    advancedDeeds:[
                        {
                            required:true,message:"请输入他(她)的先进事迹",type:'string',trigger:'blur'
                        }
                    ]
                    // password: [
                    //     { required: true, message: '请填写密码', trigger: 'blur' },
                    //     { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    // ]
                }
            }
        },
        mounted:function(){
            anime({
                targets:".referees-main",
                opacity:{
                    value:1,
                    delay:500,
                    easing: 'easeInOutQuart'
                }
            });
        },
        updated(){

        },
        components:components,
        methods:{
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        layer.load();
                       let msg = this.$Message.loading({content: '正在提交给服务器',duration: 0});
                        this.$store.commit("submitBereferees",this.formInline);
                        _.delay(()=>{
                            msg();layer.closeAll();
                            //提交服务器
                            $.post("test",this.FncombinData()).done((Rs)=>{
                                console.log(Rs)
                                layer.alert("提交成功,谢谢您的参与!");
                            });
                        },500)
                    } else {
                        this.$Message.error('还有未填项未填!');
                    }
                })
            },
            Fnimgsuccess(opt){
                console.log(opt);
                opt.file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                opt.file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            FncombinData(){
                // 组合数据
                let refereesForm = {};
                _.each(this.$store.state.berefereesForm,(value,key)=>{refereesForm['re' + key] = value;});
                return _.assignIn({id:this.$store.state.selectType},this.$store.state.refereesForm,refereesForm);
            }
        },
        beforeRouteEnter:function(to,from,next){
            document.title = "被推荐人信息表";
            _.delay(()=>{
                next(function (vm){
                    vm.$store.commit("changeLoading",false);
                    $("body").scrollTop(0);
                });
            },500)
        },
        beforeRouteLeave:function(to,from,next){
            next(function (vm) {

            });
        }
    }
});