<template>
  <div class='city'>
    <CityHeader></CityHeader>
    <CitySearch
      :allcities='allcities'
    ></CitySearch>
    <CityList
      :hotCities='hotCities'
      :allcities='allcities'
      :scrollAlphabet='scrollAlphabet'
    ></CityList>
    <CityAlphabet
      :allcities='allcities'
      @change='handclick'
    ></CityAlphabet>
  </div>
</template>
<script>
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'
export default {
  name: 'City',
  data () {
    return {
      allcities: {},
      hotCities: [],
      scrollAlphabet: ''
    }
  },
  mounted () {
    this.getAlphabet()
  },
  methods: {
    getAlphabet () {
      var this_ = this
      this.$http.get('/api/city.json')
        .then((res) => {
          if (res.data.ret && res.data.data) {
            this_.allcities = res.data.data.cities
            this_.hotCities = res.data.data.hotCities
          }
        })
        .catch((error) => {
          return error
        })
    },
    handclick (val) {
      this.scrollAlphabet = val
    }
  },
  components: {
    CityAlphabet,
    CityList,
    CitySearch,
    CityHeader
  }
}
</script>

<style scoped lang='less'>
</style>
