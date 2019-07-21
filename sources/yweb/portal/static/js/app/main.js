import UTILES from '/static/js/app/helper/main.js'


let vm = new Vue({
    el: '#app',
    data() {
        return {
            clock: UTILES.formatDateTime(new Date()),
            loader: {
                run: false
            },
            header: {
                scroll: true,
                account: false,
                settings: false,
            },
            account: {
                layer_login: true,
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
        },
        toggleSettingsLayer() {
            this.header.settings = !this.header.settings;
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

        window.onload = () => {
            let earth = new Earth("earth-container");
            earth.init();
        };

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
    },
});


