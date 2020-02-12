<template>
  <div class="mine">
    <indexTop></indexTop>
    <mineCenter></mineCenter>
    <order></order>
    <Address></Address>

  </div>
</template>

<script>
import indexTop from './mine/index-top'
import mineCenter from './mine/minecenter'
import order from './mine/order'
import Address from './mine/address'
export default {
  name: 'Mine',
  components: {
    indexTop, mineCenter, order, Address
  }
}
</script>

<style lang="stylus" scoped>
</style>
