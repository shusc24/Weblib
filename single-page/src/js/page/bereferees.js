define(function (require) {
    //加载模板
    var Html = require("text!berefereesTpl");
    //加载库
    var $ = require("jquery");
    var _ = require('lodash');
    var components = require("VueComponents");
    var anime = require("anime");
    var layer = require("layer");
    // 加载全局vue组件
    return {
        template: Html,
        data: function () {
            return {
                titleId: 1,
                vuegConfig: {
                    forwardAnim: 'touchPoint',
                    disable: false,
                    duration: "0.3",
                },
                formInline: {
                    user: '',
                    contactWay: '',
                    duty: '',
                    sex: '男',
                    politicsStatus: "",
                    advancedDeeds: ""
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写您的昵称', trigger: 'blur' }
                    ],
                    contactWay: [
                        {
                            required: true, message: "请填写联系方式", type: 'string', trigger: 'blur'
                        }
                    ],
                    duty: [
                        {
                            required: true, message: "请填写工作单位及职务", type: 'string', trigger: 'blur'
                        }
                    ],
                    politicsStatus: [
                        {
                            required: true, message: "请输入您的政治面貌", type: 'string', trigger: 'blur'
                        }
                    ],
                    advancedDeeds: [
                        {
                            required: true, message: "请输入他(她)的先进事迹", type: 'string', trigger: 'blur'
                        }
                    ]
                    // password: [
                    //     { required: true, message: '请填写密码', trigger: 'blur' },
                    //     { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    // ]
                }
            };
        },
        mounted: function () {
            anime({
                targets: ".referees-main",
                opacity: {
                    value: 1,
                    delay: 500,
                    easing: 'easeInOutQuart'
                }
            });
        },
        updated: function () {
        },
        components: components,
        methods: {
            handleSubmit: function (name) {
                var _this = this;
                this.$refs[name].validate(function (valid) {
                    if (valid) {
                        layer.load();
                        var msg_1 = _this.$Message.loading({ content: '正在提交给服务器', duration: 0 });
                        _this.$store.commit("submitBereferees", _this.formInline);
                        _.delay(function () {
                            msg_1();
                            layer.closeAll();
                            //提交服务器
                            $.post("test", _this.FncombinData()).done(function (Rs) {
                                console.log(Rs);
                                layer.alert("提交成功,谢谢您的参与!");
                            });
                        }, 500);
                    }
                    else {
                        _this.$Message.error('还有未填项未填!');
                    }
                });
            },
            Fnimgsuccess: function (opt) {
                console.log(opt);
                opt.file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                opt.file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            FncombinData: function () {
                // 组合数据
                var refereesForm = {};
                _.each(this.$store.state.berefereesForm, function (value, key) { refereesForm['re' + key] = value; });
                return _.assignIn({ id: this.$store.state.selectType }, this.$store.state.refereesForm, refereesForm);
            }
        },
        beforeRouteEnter: function (to, from, next) {
            document.title = "被推荐人信息表";
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
//# sourceMappingURL=bereferees.js.map