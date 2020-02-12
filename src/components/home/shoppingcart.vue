<template>
  <div class="shoppingcart">
    <indexTop></indexTop>
    <shopCart></shopCart>
    <shopContain></shopContain>

  </div>
</template>

<script>
import indexTop from './shoppingcart/index-top'
import shopCart from './shoppingcart/shopcart'
import shopContain from './shoppingcart/shopcontain'
export default {
  name: 'Shoppingcart',
  components: {
    indexTop, shopCart, shopContain
  }
}
</script>

<style lang="stylus" scoped>

</style>
