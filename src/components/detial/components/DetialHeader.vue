<template>
  <div class='detial_header'>
    <router-link tag='div' class='detial_single' to='/' v-show='showHeader'>
      <div class='iconfont iconjiantou-02'></div>
    </router-link>
    <router-link tag='div' class='detial_whole' to='/' v-show='!showHeader' :style='opacitystyle'>
      <span class='iconfont iconjiantou-02'></span>
      <p class='title'>
        景点详情
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DetialHeader',
  data () {
    return {
      showHeader: true,
      opacitystyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handShow)
  },
  methods: {
    handShow () {
      const top = document.documentElement.scrollTop
      if (top > 40) {
        var opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacitystyle = { opacity }
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  deactivated () {
    window.removeEventListener('scroll', this.handShow)
  }
}
</script>

<style scoped lang='less'>
  .detial_header{
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    .detial_single{
      width: .8rem;
      height: .8rem;
      border-radius: .5rem;
      background-color: #dddddd;
      opacity: 0.5;
      text-align: center;
      margin: .1rem;
      .iconjiantou-02{
        font-size: .5rem;
        vertical-align: middle;
        display: ruby-base;
      }
    }
    .detial_whole{
      width: 100%;
      height: .8rem;
      background-color: #00bcd4;
      position: absolute;
      top:0;
      color: #fff;
      text-align: center;
      line-height: .8rem;
      .iconjiantou-02{
        font-size: .5rem;
        float: left;
      }
      .title{
        display: inline-block;
        margin-right: .3rem;
      }
    }
  }
</style>
