<template>
   <div class="better-scroll" ref="wrapper">
        <slot></slot>
   </div>
</template>
<script>
    import BScroll from 'better-scroll'
    export default {
        props: {
          probeType:{
            type:Number,
            default:3
          },
          click:{
            type:Boolean,
            default:true
          },
          data:{
            type:Array,
            default:null
          },
          listenScroll:{
            type:Boolean,
            defalut:false
          }
        },
        data() {
            return {}
        },
        methods: {
          _initScroll(){
            if(!this.$refs.wrapper){
              return
            }
            this.scroll = new BScroll(this.$refs.wrapper,{
              probeType:this.probeType,
              click:this.click,
            });

            if(this.listenScroll){
              let that = this;
              this.scroll.on("scroll",function(pos){
                that.$emit("scroll",pos)
              })
            }
          },
          enable(){
            this.scroll && this.scroll.enable()
          },
          disable(){
            this.scroll && this.scroll.disable()
          },
          refresh(){
            setTimeout(()=>{
              this.scroll && this.scroll.refresh()
            },20)
          },
          scrollTo(){
            this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
          },
          scrollToElement(){
            this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
          }
        },
        components: {},
        mounted() {
          setTimeout(()=>{
            this._initScroll();
          },20);
        },
        created() {

        },
        watch:{
          data(){
            setTimeout(()=>{
              this.refresh();
            },20)
          }
        }
    }
</script>

<style lang="less">
  .better-scroll{
    height: 100%;
    &-wrapper{

    }
  }
</style>
