<template>
  <div class="shopcart">
    <div class="shopTop">
      <img src="../../../assets/images/shop-arrow.jpg" alt="">
      <span> 购物车 </span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Shopcart'

}
</script>

<style lang="stylus" scoped>
.shopTop{
  width 100%
  height 1rem
  background #ff9900
  img{
    display inline-block
    margin-top .32rem
    margin-left .4rem
  }
  span{
    margin-top .32rem
    font-size .42rem
    color #ffffff
    margin-left 2.5rem
  }
}

</style>
