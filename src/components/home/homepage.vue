<template>
  <div class="homepage">
    <indexTop></indexTop>
    <Search></Search>
    <Banner></Banner>
    <div  v-if="hotlist.list" class="container">
      <CrazyToday :hotres="hotlist"></CrazyToday>
      <Mother :babyres="this.babylist"></Mother>
      <Makeups :makeups="this.makeupslist"></Makeups>
      <Furniture :furnitures="this.furniturelist"></Furniture>
      <Food :foodres="this.foodlist"></Food>
      <Global :globals="this.gloallist"></Global>
    </div>

  </div>
</template>

<script>
import indexTop from './homepage/index-top'
import Search from './homepage/search'
import Banner from './homepage/banner'
import CrazyToday from './homepage/main/crazytoday'
import Mother from './homepage/main/mother'
import Makeups from './homepage/main/makeups'
import Furniture from './homepage/main/furniture'
import Food from './homepage/main/food'
import Global from './homepage/main/global'
import {INDEX} from '@/api'
// import {CLASSIFY} from '@/api'
export default {
  name: 'Homepage',
  components: {
    indexTop, Search, Banner, CrazyToday, Mother, Makeups, Furniture, Food, Global
  },
  created () {
    this.$http.get(INDEX).then(val => {
      console.log(val)
      this.hotlist = val.data.data['0']
      this.babylist = val.data.data['1']
      this.makeupslist = val.data.data['2']
      this.furniturelist = val.data.data['3']
      this.foodlist = val.data.data['4']
      this.gloallist = val.data.data['5']
    })
  },
  data () {
    return {
      hotlist: {},
      babylist: {},
      makeupslist: {},
      furniturelist: {},
      foodlist: {},
      gloallist: {}

    }
  }
}
</script>
<style lang="stylus" scoped>
  .homepage {
  flex: 1;
  overflow: scroll;
  margin-top: -0.03rem;
}
</style>
