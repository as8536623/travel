<template>
  <div>
    <div class='detial_banner' @click='showImg'>
      <img :src='bannerImg' class='banner_img'>
      <div class='banner_info'>
        <div class='banner_titile'>
          {{sightName}}
        </div>
        <div class='banner_number'>
          <span class='iconfont iconchakan-'></span>
          <p>{{bannerNumber}}</p>
        </div>
      </div>
    </div>
    <Fade>
      <Gallary
        :imgDatas='gallaryImgs'
        v-show='showImgData'
        @handEmit='handClick'
      ></Gallary>
    </Fade>
  </div>
</template>

<script>
import Gallary from 'common/Gallary'
import Fade from '../../../common/fade/Fade'
export default {
  name: 'DatialBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showImgData: false
    }
  },
  computed: {
    bannerNumber () {
      return this.gallaryImgs.length
    }
  },
  methods: {
    showImg () {
      if (this.bannerImg) {
        this.showImgData = true
      }
    },
    handClick (val) {
      this.showImgData = val
    }
  },
  components: {
    Fade,
    Gallary
  }
}
</script>

<style scoped lang='less'>
  .detial_banner{
    overflow: hidden;
    height: 0;
    position: relative;
    padding-bottom: 55%;
    .banner_img{
      width: 100%;
    }
    .banner_info{
      display: flex;
      position: absolute;
      line-height: .6rem;
      color:#fff;
      left:0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8));
      .banner_titile{
        padding: 0 .2rem;
        flex: 1;
        font-size: .32rem;
      }
      .banner_number{
        padding: .11rem .4rem;
        height: .32rem;
        line-height: .32rem;
        border-radius: .2rem;
        .iconchakan-{
          font-size: .25rem;
          display: inline-block;
          padding-right: .1rem;
        }
        p{
          display: inline-block;
        }
      }
    }
  }
</style>
