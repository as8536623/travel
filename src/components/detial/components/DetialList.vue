<template>
  <div class='detial_list'>
    <div class='detial_item' v-for='(list,index) in categoryList' :key='index'>
      <span class='iconfont iconzhangdan'></span>
      {{list.title}}
      <div class='detial_item' v-if='list.children'>
        <DetialList :categoryList='list.children'></DetialList>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetialList',
  props: {
    categoryList: Array
  }
}
</script>

<style scoped lang='less'>
  .detial_list{
    .detial_item{
      line-height: .8rem;
      font-size: .32rem;
      padding: 0 .2rem;
      .iconzhangdan{
        font-size: .3rem;
        color:#00bcd4;
      }
    }
  }
</style>
