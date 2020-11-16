<template>
  <swiper ref="mySwiper" :options="swiperOptions" v-if='showImg'>
    <swiper-slide v-for="imgData in imgdatas" :key="imgData.id">
      <img :src="imgData.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  props: {
    imgdatas: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        observer: true,
        observeParents: true
      }
    }
  },
  computed: {
    showImg () {
      return this.imgdatas.length
    }
  }
}
</script>
<style lang="less" scoped>
  .swiper-container{
    width: 100%;
    text-align: center;
    .swiper-wrapper{
      .swiper-slide{
        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }
</style>
