<template>
  <div class='search_box'>
    <div class='search'>
      <input class='search_input' type='text' placeholder='请输入城市名或拼音' v-model='keyword'/>
    </div>
    <div class='serch_content'
         ref='search'
         v-show='keyword'
    >
      <ul>
        <li v-for='item in listresult'
            :key='item.id'
            class='item'
            @click='handCity(item.name)'
        >
          {{item.name}}
        </li>
        <li v-show='hasNoData' class='item'>没有找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'Search',
  props: {
    allcities: Object
  },
  data () {
    return {
      keyword: '',
      listresult: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.listresult.length
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.search)
    })
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearInterval(this.timer)
      }
      if (!this.keyword) {
        this.listresult = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.allcities) {
          this.allcities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.listresult = result
      }, 100)
    }
  },
  updated () {
    this.scroll.refresh()
  },
  methods: {
    handCity (cityName) {
      this.changeCity(cityName)
      this.$router.push('/')
    },
    ...mapMutations({
      changeCity: 'changeCity'
    })
  }
}
</script>

<style scoped lang='less'>
  @import "~assets/style/common.less";
  .search_box{
    height: 100%;
    .search{
      width: 100%;
      background-color: #00bcd4;
      text-align: center;
      line-height: @lineHeight;
      .search_input{
        width: 95%;
        height: .5rem;
        border-radius: 0.05rem;
        text-indent: .2rem;
      }
    }
    .serch_content{
      width: 100%;
      position: absolute;
      overflow: hidden;
      top:1.72rem;
      left: 0;
      right: 0;
      bottom:0 ;
      z-index: 1;
      background-color: #ffffff;
      text-align: center;
      .item{
        line-height: .62rem;
        border-bottom: 1px solid #dddddd;
      }
    }
  }
</style>
