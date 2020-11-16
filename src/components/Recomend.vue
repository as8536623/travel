<template>
  <div class='recomend'>
    <div class='recomeng_title'>
      <span>热销推荐</span>
      <ul>
        <router-link tag='li'
                     class='item'
                     v-for='list in recommendList'
                     :key='list.id'
                     :to="'/detial/'+ list.id"
        >
          <img :src='list.imgUrl'>
          <div class='item_info'>
            <p class='item_title'>{{list.title}}</p>
            <p class='item_desc'>{{list.desc}}</p>
            <button class='item_btn'>查看详情</button>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recomend',
  props: {
    recommendList: Array
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
  @import "~assets/style/common.less";
  .recomend{
    width: 100%;
    height: 1rem;
    display: inline-block;
    background-color: #eee;
    .recomeng_title{
      span{
        padding: 0.35rem 0.3rem;
        display: inline-block;
        color:#333;
      }
      .item{
        display: flex;
        overflow: hidden;
        height: 2.1rem;
        border-bottom: 1px solid #dddddd;
        &:last-child{
          border-bottom:0
        }
        img{
          width: 1.7rem;
          height: 1.7rem;
          padding: .2rem;
        }
        .item_info{
          flex: 1;
          padding: .2rem;
          min-width: 0;
          .item_title{
            line-height: .54rem;
            font-size: .32rem;
            .hidden
          }
          .item_desc{
            line-height: .4rem;
            color:#ccc;
            .hidden
          }
          .item_btn{
            line-height: .44rem;
            margin-top: .2rem;
            background-color: #ff9300;
            padding: 0 .2rem;
            border-radius: .06rem;
            color:#fff
          }
        }
      }
    }
  }
</style>
