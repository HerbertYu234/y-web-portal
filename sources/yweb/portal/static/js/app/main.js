import UTILES from '/static/js/app/helper/main.js'

let footComp = {
    template: `<div class="footer">
                 <footer>
                    <p class="weak">Thank God, we are still alive</p><br>
                    <p>Designed and developed by Herbert Yu.</p>
                    <p>Copyright © 2019-2020 herbertyu.com. All Rights Reserved.</p>
                </footer>
              </div>`
};

let earthComp = {
    template: `<section id="earth" class="mask-radial-gradient" style="opacity: 1;">
                <canvas id="earth-container" style="margin: 20px" width="700" height="700"></canvas>
            </section>`,
    mounted() {
        let earth = new Earth("earth-container");
        earth.init();
    }
};

let indexContentLinksComp = {
    data() {
        return {}
    },
    props: {
        mclazz: Object,
        test: String
    },
    methods: {
        goDetailByType(type) {
            this.$emit('go-detail', type);
        }
    },
    template: `<div class="content custom-scrollbar">
                <div class="links">
                    <a href="javascript:;" @click="goDetailByType('joke')">
                        <i class="icon-smile"></i>
                        <span>每日一笑</span>
                    </a>
                    <a href="javascript:;" @click="goDetailByType('search')">
                        <i class="icon-smile"></i>
                        <span>资源搜索</span>
                    </a>
                    <a href="javascript:;" @click="goDetailByType('suggest')">
                        <i class="icon-smile"></i>
                        <span>意见建议</span>
                    </a>

                    <a href="javascript:;" @click="goDetailByType('otherlink')">
                        <i class="icon-smile"></i>
                        <span>友情链接</span>
                    </a>
                    <a href="javascript:;" @click="goDetailByType('contactme')">
                        <i class="icon-smile"></i>
                        <span>联系作者</span>
                    </a>
                    <a href="javascript:;">
                        <i class="icon-smile"></i>
                        <span>联系作者</span>
                    </a>
                    <a href="javascript:;">
                        <i class="icon-smile"></i>
                        <span>联系作者</span>
                    </a>
                    <a href="javascript:;">
                        <i class="icon-smile"></i>
                        <span>联系作者</span>
                    </a>
                    <a href="javascript:;">
                        <i class="icon-smile"></i>
                        <span>联系作者</span>
                    </a>
                    <a href="javascript:;">
                        <i class="icon-smile"></i>
                        <span>联系作者</span>
                    </a>
                </div>
            </div>`
};

let indexContentDefaultComp = {
    data() {
        return {}
    },
    props: {
        mclazz: Object,
        test: String
    },
    methods: {
        clazz() {   //todo v-bind 支持js 语法吗？ Objecet.assign 对象合并
            return {
                "text-center": true
            }
        }
    },
    //写两个:class 报错：duplicate attribute: :class
    template: ` <div class="content custom-scrollbar text-center" :test="test" :class="mclazz">
                    <p style="font-size: 30px;letter-spacing: .1em;">
                    Get busy living, or get busy dying. ———— Andy Dufresne,
                    from The Shawshank Redemption
                    </p>
                </div>`
};

let detailContentComp = {
    template: `<div class="content custom-scrollbar">
            <div class="detail custom-scrollbar">
                <div class="div-back" @click="$emit('go-back')">
                    <i class="icon-back"></i>
                </div>

                <div class="detail-content">
                    <div class="jokeList border-1px">
                        第一次去学校医院是因为发烧，医生大妈二话不说递给我一根体温计，我也二话不说就含在了嘴里……<br><br>　　
                        大妈看了我一眼，温柔地说道：“腋下。”<br><br>　　
                        我想了想，还是听话地叫了声：“耶！”
                    </div>
                    <div class="jokeList border-1px">
                        作为体制内的一员，刚入职前辈就告诉我，两种女同事不能得罪，一是长得漂亮的，背后有很厉害的干爹；一种是长得难看的，背后有很厉害的亲爹。
                    </div>
                    <div class="jokeList border-1px">
                        高中那会和学霸处对象，被班任找了家长，为了守住这份爱情，我们决定私奔，结果在约定地点，我等了大半夜，也没见人来，又冷又饿，就跑回家了，被老爸揍了一顿，第二天气呼呼的质问女友，女友弱弱的对我说“晚上学习太投入忘了！忘了！！！”然后这朵爱情小花，还没有绽放，就枯萎了！！！
                    </div>
                    <div class="jokeList border-1px">
                        老师课上提问，问到一男孩，“你长大后要干什么”<br><br>　　
                        小男孩说：“我以后要当女浴室的一名搓澡工。”<br><br>　　
                        正当老师惊叹之余，男孩接着说：“这样我妈妈就不用那么辛苦了！”
                    </div>
                    <div class="jokeList border-1px">
                        老公气愤地喊道：“你整天这样骂人，我受够了！我要离婚！我要再找一个！”<br><br>　　
                        老婆鄙夷说道：“就你这样，再找就不会挨骂了？”<br><br>　　
                        老公没好气回道：“挨骂就挨骂，至少能听点新鲜的！”
                    </div>
                    <div class="jokeList border-1px">
                        男孩：叔叔，你找我妈有事吗？<br><br>　　
                        叔叔：哦，你告诉你妈一声，就说我老婆出差了！<br><br>　
                        男孩：你老婆出差干嘛要告诉我妈呀？<br><br>　　
                        叔叔：你妈知道的……&amp;再说小孩子别管大人的事！<br><br>　　
                        男孩：艹，我能不管吗！昨天你老婆跟我爸说你出差了，结果我老爸跟妈说也要出差……现在你又来说你老婆出差了，那是不是我老妈也要出差呀……让我一个人留在家谁给我做饭啊！<br><br>　　
                        叔叔：………
                    </div>
                    <div class="jokeList border-1px">
                        上个周末和朋友们去森林公园玩，步行途中肚子忽然疼得厉害，于是跑到树林里拉S。<br><br>　　
                        拉完以后才知道纸忘记带了，于是打电话给我朋友，让他给送点纸来。<br><br>　　
                        朋友嫌麻烦就说：这到处都是树叶，你就摘几片应付下不就完了？<br><br>　　
                        我火了，怒道：尼马这里是松树林。。。
                    </div>
                </div>
            </div>
        </div>`
};


let vm = new Vue({
    el: '#app',
    components: {
        'v-footer': footComp,
        'v-earth': earthComp,
        'indexContentLinksComp': indexContentLinksComp,
        'indexContentDefaultComp': indexContentDefaultComp,
        'v-detail-content-comp': detailContentComp,
    },
    data() {
        return {
            clock: UTILES.formatDateTime(new Date()),
            loader: {
                run: false
            },
            nav: {
                active: "index",
                // index: true,
                // blog: false,
                // music: false,
                // links: false,
            },
            com: {
                indexContent: "indexContentDefaultComp",
                detail: false
            },
            header: {
                scroll: true,
                account: false,
                settings: false,
            },
            account: {
                layer_login: false,
                layer_regist: false
            },
            kit: {
                isFullScreen: false
            }
        }
    },
    computed: { /*属性未改变时，响应是可以缓存的*/
        isLoading: function () {
            console.log("isLoading... ", this.loader.run);
            return this.loader.run
        },
        getContentClass() {
            if (this.com.indexContent == "indexContentLinksComp") {
                return {
                    "abc": true
                }
            }
            if (this.com.indexContent == "indexContentDefaultComp") {
                return {
                    "def": true
                }
            }
            return {};
        }
    },
    methods: {
        goRegist() {
            this.account.layer_login = false;
            this.account.layer_regist = true;
        },
        goLogin() {
            this.account.layer_login = true;
            this.account.layer_regist = false;
        },
        toggleAccountLayer() {
            this.header.account = !this.header.account;
            if (this.header.account) {
                this.goLogin();
            }
        },
        toggleSettingsLayer() {
            this.header.settings = !this.header.settings;
        },
        navigate(aim) {
            this.nav.active = aim;
            this.com.detail = false;
            if (aim == "links") {
                this.com.indexContent = "indexContentLinksComp"
            }
            if (aim == "index") {
                this.com.indexContent = "indexContentDefaultComp";
            }
        },
        goDetail(where) {
            let map = {
                "joke": "joke",
                "search": "search",
                "suggest": "suggest",
                "otherlink": "otherlink",
                "contactme": "contactme"
            };
            this.com.detail = true;
        },
        goBack(){
            this.navigate("links");
        },
        toggleFullscreen() {
            if (this.kit.isFullScreen) {
                UTILES.exitFullscreen();
                this.kit.isFullScreen = false;
            } else {
                UTILES.fullScreen();
                this.kit.isFullScreen = true;
            }
        }

    },
    mounted() {
        this.loader.run = true;

        setTimeout(() => {
            this.loader.run = false;
        }, 1000);

        let scrollTimer;
        window.addEventListener('scroll', function () {
            vm.header.scroll = true;

            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }

            scrollTimer = setTimeout(() => {
                console.log("window scroll...");

                let wScrollY = window.scrollY; // 当前滚动条位置
                let wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
                let bScrollH = document.body.scrollHeight; // 滚动条总高度

                console.log(`wScrollY: ${wScrollY}; wInnerH: ${wInnerH}; bScrollH: ${bScrollH}`)

                if (wScrollY > 0) {
                    vm.header.scroll = false;
                }

            }, 40);
        });


        // setTimeout(function () {
        //     let content = document.querySelector('.content');
        //     let scroll = new BScroll(content, {
        //         click: true,
        //         scrollY: true,
        //         probeType: 1,
        //         // bindToWrapper:true,
        //         scrollbar: {
        //             fade: false,
        //             interactive: true // 1.8.0 新增
        //         },
        //         mouseWheel: {
        //             speed: 50,
        //             invert: false,
        //             easeTime: 50
        //         },
        //         // wheel: {
        //         //     selectedIndex: 0,
        //         //     rotate: 25,
        //         //     adjustTime: 400,
        //         //     wheelWrapperClass: 'wheel-scroll',
        //         //     wheelItemClass: 'wheel-item',
        //         //     wheelDisabledItemClass: 'wheel-disabled-item' // version 1.15.0 支持
        //         // }
        //     });
        //
        //     // let scroll = new BScroll('.content', {
        //     //     // scrollY: true,
        //     //     click: true,
        //     //     probeType: 1,
        //     //     scrollbar: {
        //     //         fade: true,
        //     //         interactive: false // 1.8.0 新增
        //     //     },
        //     //     // pullUpLoad: this.needPullUp,
        //     //     // mouseWheel: {
        //     //     //     speed: 20,
        //     //     //     invert: false,
        //     //     //     easeTime: 300
        //     //     // }
        //     // });
        //     // console.log(scroll);
        // }, 3000);


    },
});


