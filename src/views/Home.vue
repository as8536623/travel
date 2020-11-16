<template>
  <div class="home">
    <Header></Header>
    <Swiper :imgdatas='imgLists'></Swiper>
    <Icons></Icons>
    <Recomend :recommendList='recommendList'></Recomend>
    <Weekend></Weekend>
  </div>
</template>

<script>
import Header from 'components/Header.vue'
import Swiper from 'components/Swiper.vue'
import Icons from 'components/Icons.vue'
import Recomend from 'components/Recomend.vue'
import Weekend from 'components/Weekend'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      imgLists: [],
      recommendList: []
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  computed: {
    ...mapState({
      city: 'city'
    })
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.getHomeInfo()
    }
  },
  deactivated () {
  },
  methods: {
    getHomeInfo () {
      var this_ = this
      this.$http.get('/api/index.json?city=' + this.city).then(function (res) {
        if (res.data.ret && res.data.data) {
          this_.imgLists = res.data.data.swiperList
          this_.recommendList = res.data.data.recommendList
        }
      }).catch(function (error) {
        return error
      })
    }
  },
  components: {
    Weekend,
    Recomend,
    Swiper,
    Header,
    Icons
  }
}
</script>
<style lang="less">
</style>
