<template>
  <div class='detial_box'>
    <DetialBanner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
    ></DetialBanner>
    <DetialHeader></DetialHeader>
    <DetialList :categoryList='categoryList'></DetialList>
  </div>
</template>

<script>
import DetialBanner from './components/DetialBanner'
import DetialHeader from './components/DetialHeader'
import DetialList from './components/DetialList'
export default {
  name: 'Detial',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted () {
    this.getDetial()
  },
  methods: {
    getDetial () {
      var this_ = this
      this.$http.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        if (res.data.ret && res.data.data) {
          this_.sightName = res.data.data.sightName
          this_.bannerImg = res.data.data.bannerImg
          this_.gallaryImgs = res.data.data.gallaryImgs
          this_.categoryList = res.data.data.categoryList
        }
      }).catch((error) => {
        return error
      })
    }
  },
  components: {
    DetialList,
    DetialHeader,
    DetialBanner
  }
}
</script>

<style scoped lang='less'>
  .detial_box{
    height: 20rem;
  }
</style>
