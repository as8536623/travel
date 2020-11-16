<template>
  <div class='recomend'>
    <div class='recomeng_title'>
      <span>周末去哪儿玩</span>
      <ul>
        <li class='item' v-for='list in recomendList' :key='list.id'>
          <img :src='list.url'>
          <div class='item_info'>
            <p class='item_title'>{{list.title}}</p>
            <p class='item_desc'>{{list.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Weekend',
  data () {
    return {
      recomendList: [
        {
          id: 1,
          url: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/a19cb194-dfda-4f50-b2eb-8f66f7639523.jpg_r_240x160x95_dc673c31.jpg',
          title: '上海出发-跟团游 上海出发九华山2日跟团游 宿山上准三星酒店 拒绝农家住宿 含门票景交',
          desc: '★★经典纯玩，品质升级；门票、交通、住宿全包含，一站式服务。'
        },
        {
          id: 2,
          url: 'https://imgs.qunarzz.com/p/tts2/1606/f6/070ee64d17600af7.jpg_r_240x160x95_4fe7c19e.jpg',
          title: '南京出发-跟团游 【南京出发】安徽西递宏村二日游 A等【经济型】',
          desc: '早餐后，乘车赴“桃花源里人家”——黟县，游“牛形古村落——宏村”、“明清民居博物馆——西递”（游览时间约3—4小时），休息片刻，下午乘2点左右旅游大巴车返南京 ！'
        },
        {
          id: 3,
          url: 'https://imgs.qunarzz.com/p/tts5/2009/f6/47f8fa6c70c83002.jpg_r_240x160x95_378d4d85.jpg',
          title: '上海出发-跟团游 【太湖双岛】大干山岛阴山岛+品阳澄湖大闸蟹1日跟团游',
          desc: '★疫情期间队友注意事项：1、全程带好口罩,2、随申码需绿色'
        }
      ]
    }
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
        overflow: hidden;
        height: 3.5rem;
        img{
          width: 100%;
          height: 2rem;
          padding-bottom:.2rem;
        }
        .item_info{
          width: 95%;
          margin: 0 auto;
          min-width: 0;
          .item_title{
            line-height: .54rem;
            font-size: .3rem;
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
