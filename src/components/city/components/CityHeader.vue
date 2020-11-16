<template>
  <div class='city_header'>
    <p>城市选择</p>
    <router-link to='/'>
      <span class='iconfont iconjiantou-02'></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang='less'>
  @import "~assets/style/common.less";
  .city_header{
    color:#fff;
    background-color: #00bcd4;
    height: @lineHeight;
    line-height: @lineHeight;
    text-align: center;
    p{
      display: inline-block;
      font-size: 0.3rem;
      margin-left: -.3rem;
    }
    .iconjiantou-02{
      font-size: 0.5rem;
      float: left;
      position: relative;
      left:1.5%;
      color:#fff;
    }
  }
</style>
