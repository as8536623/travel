<template>
  <div class='city_alphabet'>
    <ul class='list_item' ref='utop'>
      <li class='item'
          v-for='item in letters'
          :key='item'
          @click='clickAlphabet'
          @touchstart.prevent='touchstart'
          @touchmove='touchmove'
          @touchend='touchend'
          :ref='item'
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    allcities: Object
  },
  data () {
    return {
      touchs: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs.utop.offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (const i in this.allcities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    clickAlphabet (e) {
      this.$emit('change', e.target.innerHTML)
    },
    touchstart () {
      this.touchs = true
    },
    touchmove (e) {
      if (this.touchs) {
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.timer = setTimeout(() => {
          const startY = this.startY
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - startY) / 20)
          if (index && this.letters[index]) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    touchend () {
      this.touchs = false
    }
  }
}
</script>

<style scoped lang='less'>
  .city_alphabet{
    .list_item{
      width: .4rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items:center;
      position: absolute;
      padding-right: .1rem;
      top:3.2rem;
      right: 0;
      .item{
        width: 100%;
        line-height: .4rem;
        text-align: center;
      }
    }
  }
</style>
