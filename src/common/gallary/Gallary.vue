<template>
  <div class='common_gallary' @click='handClose'>
    <div class='wrapper'>
      <swiper ref="mySwiper" :options="swiperOptions" v-show='showImg'>
        <swiper-slide v-for='(imgurl,index) in imgDatas' :key='index'>
          <img :src="imgurl">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class='close'>
        <span class='iconfont iconguanbi-' @click='handClose'></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  props: {
    imgDatas: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          observer: true,
          observeParents: true
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handClose () {
      this.$emit('handEmit', false)
    }
  },
  computed: {
    showImg () {
      return this.imgDatas.length
    }
  }
}
</script>

<style scoped lang='less'>
  .common_gallary{
    background-color: #333;
    z-index: 99;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    .wrapper{
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      .swiper-container{
        overflow: initial;
      }
      .swiper-wrapper{
        img{
          width: 100%;
        }
      }
      .swiper-pagination{
        bottom:-1rem;
        color:#fff;
      }
      .close{
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 0;
        .iconguanbi-{
          font-size: .5rem;
          color:#ffff;
        }
      }
    }
  }
</style>
