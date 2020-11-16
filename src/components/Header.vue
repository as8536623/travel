<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont iconjiantou-02"></span>
    </div>
    <div class="header-input">
      <span class="iconfont iconsousuo-01"></span>
      <input placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to='/city'>
      <div class="header-right">
        <p>{{city}}</p>
        <span class="iconfont iconliulanrenshu-"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState({
      city: 'city'
    }),
    ...mapGetters({
      doubleCity: 'doubleCity'
    })
  }
}
</script>

<style lang="less" scoped>
  @import "~assets/style/common.less";
  .header{
    display: flex;
    line-height: @lineHeight;
    background-color: @bgcolor;
    color:#fff;
    .header-left{
      width: .64rem;
      float: left;
      .iconjiantou-02{
        padding-left: .1rem;
        font-size: .5rem;
      }
    }
    .header-input{
      flex:1;
      background-color: #fff;
      margin: .12rem .1rem;
      border-radius: .1rem;
      color:#ddd;
      text-align: left;
      padding-left: .1rem;
      line-height: .64rem;
      span{
        display: inline-block;
        vertical-align: middle;
      }
      input{
        width: 90%;
        margin-left: .2rem;
        display: inline-block;
      }
    }
    .header-right{
      min-width: 1.24rem;
      float: right;
      text-align: center;
      p{
        display: inline-block;
        color:#fff;
      }
      .iconliulanrenshu-{
        font-size: .24rem;
        padding-left: .05rem;
        color: #fff;
      }
    }
  }
</style>
