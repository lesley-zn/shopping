<template>
  <div class="classify">
    <indexTop></indexTop>
    <Search></Search>
    <ul>
      <Baby :products = "this.products"></Baby>
    </ul>

  </div>
</template>
<script>
import indexTop from './classifypage/index-top'
import Search from './classifypage/search'
import Baby from './classifypage/baby'
import Makeups from './classifypage/makeups'
import {CLASSIFY} from '@/api'

export default {
  name: 'Classify',
  components: {
    indexTop, Search, Baby, Makeups
  },
  created () {
    this.$http.get(CLASSIFY).then(val => {
      console.log(val)
      this.products = val.data.data
      console.log(this.products)
    })
  },
  data () {
    return {
      products: {}
    }
  }

}
</script>

<style lang="stylus" scoped>

</style>
