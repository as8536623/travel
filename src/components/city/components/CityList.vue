<template>
  <div class='city_list' ref="wrapper">
    <ul class='list_box'>
      <li class='area'>
        <div class='title border_top_bottom'>当前城市</div>
        <div class='button_list'>
          <div class='current_city'>
            <div class='current_city_name'>{{currentCity}}</div>
          </div>
        </div>
      </li>
      <li class='area'>
        <div class='title border_top_bottom'>热门城市</div>
        <div class='button_list'>
          <div class='current_city'
               v-for='hotcity in hotCities'
               :key='hotcity.id'
               @click='handCity(hotcity.name)'
          >
            <div class='current_city_name'>{{hotcity.name}}</div>
          </div>
        </div>
      </li>
      <li class='area'
          v-for='(item,key) in allcities'
          :key='key'
          :ref='key'
      >
        <div class='title border_top_bottom'>{{key}}</div>
        <ul class='item_list'>
          <li class='item border_item_bottom'
              v-for='data in item'
              :key='data.id'
              @click='handCity(data.name)'
          >{{data.name}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    allcities: Object,
    hotCities: Array,
    scrollAlphabet: String
  },
  data () {
    return {
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    scrollAlphabet () {
      if (this.scrollAlphabet) {
        this.scroll.scrollToElement(this.$refs[this.scrollAlphabet][0])
      }
    }
  },
  methods: {
    handCity (cityName) {
      this.changeCity(cityName)
      this.$router.push('/')
    },
    ...mapMutations({
      changeCity: 'changeCity'
    })
  },
  updated () {
    this.scroll.refresh()
  }
}
</script>

<style scoped lang='less'>
  .city_list{
    width: 100%;
    position: absolute;
    overflow: hidden;
    top:1.72rem;
    left: 0;
    right: 0;
    bottom:0 ;
    .area{
      .title{
        padding-left: .2rem;
        line-height: .44rem;
        background-color: #eee;
      }
      .border_top_bottom{
        border: 1px solid #dddddd;
        &:before,&:after{
          background-color: #ccc;
        }
      }
      .button_list{
        overflow: hidden;
        padding: .1rem .6rem .1rem .1rem;
        .current_city{
          float: left;
          width: 33.33%;
          .current_city_name{
            margin: .1rem;
            padding: .1rem;
            border: .02rem solid #dddddd;
            text-align: center;
            border-radius: .05rem;
          }
        }
      }
      .item_list{
        .item{
          line-height: .8rem;
          padding-left: .2rem;
        }
        .border_item_bottom{
          border: 1px solid #dddddd;
          &:before,&:after{
            background-color: #ccc;
          }
        }
      }
    }
  }
</style>
