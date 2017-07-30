<template>

    <div class="app">
        <d-player :video="video"
                  :autoplay="false"
                  :contextmenu="contextmenu"
                  :screenshot="true"
                  ref="player"
                  style="width: 100%"
        >
        </d-player>

    </div>
</template>
<script>
    import VueDPlayer from 'vue-dplayer'
    export default {
        data(){
            return{
                text:"123455555555asdaada123",
                video: {
                    url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                    pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
                },
                videoUrl: 'http://static.smartisanos.cn/common/video/video-jgpro.mp4',
                autoplay: false,
                player: null,
                contextmenu: [
                    {
                        text: '关于我们',
                        link: 'https://github.com/MoePlayer/vue-dplayer'
                    }
                ]
            }
        },
        components: {
            'd-player': VueDPlayer
        }
    }
</script>

<style lang="less">

</style>