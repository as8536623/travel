<template>
  <div class='icons'>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for='(page,index) in pages' :key='index'>
        <div class='icon' v-for='icon in page' :key='icon.id'>
          <img :src='icon.url' :class="'icon_'+icon.id">
          <span>{{icon.title}}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        observer: true,
        observeParents: true
      },
      icons: [
        {
          id: 1,
          url: require('images/icon_1.png'),
          title: '计划'
        },
        {
          id: 2,
          url: require('images/icon_2.png'),
          title: '问答'
        },
        {
          id: 3,
          url: require('images/icon_3.png'),
          title: '搜索'
        },
        {
          id: 4,
          url: require('images/icon_4.png'),
          title: '笔记'
        },
        {
          id: 5,
          url: require('images/icon_5.png'),
          title: '记录'
        },
        {
          id: 6,
          url: require('images/icon_6.png'),
          title: '文件'
        },
        {
          id: 7,
          url: require('images/icon_7.png'),
          title: '日程'
        },
        {
          id: 8,
          url: require('images/icon_8.png'),
          title: '提问'
        },
        {
          id: 9,
          url: require('images/icon_8.png'),
          title: '提问'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="less">
  @import "~assets/style/common.less";
  .icons{
    overflow: hidden;
    height: 3.64rem;
    .icon{
      float: left;
      width: 25%;
      text-align: center;
      img{
        width: 0.8rem;
        margin-top: 0.2rem;
      }
      span{
        width: 70%;
        display: inline-block;
        text-align: center;
        padding: 0.25rem 0;
        .hidden
      }
    }
  }
</style>
