<template>
  <div class="order">
    <div class="myorder" >
      <a href="#" class="own">我的订单</a>
      <a href="#" class="allorder">查看全部订单</a>
    </div>
    <div class="todo">
      <a href="#">
        <img src="../../../assets/images/mine-daifukuan.jpg" alt="">
        <p>代付款</p>
      </a>
      <a href="#">
        <img src="../../../assets/images/mine-daifahuo.jpg" alt="">
        <p>代发货</p>
      </a>
      <a href="#">
        <img src="../../../assets/images/mine-daishouhuo.jpg" alt="">
        <p>代收货</p>
      </a>
      <a href="#">
        <img src="../../../assets/images/mine-daipingjia.jpg" alt="">
        <p>代评价</p>
      </a>
      <a href="#">
        <img src="../../../assets/images/mine-tuikuan.jpg" alt="">
        <p>退款/售后</p>
      </a>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Order'

}
</script>

<style lang="stylus" scoped>
.myorder{
  height 1.24rem
  border-bottom .01rem solid #bebebe
  font-size .32rem
  padding-top .47rem
  box-sizing border-box
  .own{
    margin-left .47rem
  }
  .allorder{
    margin-left  3.5rem
    color #999
  }
}
.todo{
  height 1.88rem
  border-bottom .14rem solid #efeeee
  a{
    float left
    margin-top .45rem
    text-align center
    width .8rem
    margin-right .7rem
    &:nth-child(1){
      margin-left .32rem

    }
    &:nth-child(5){
      width 1.15rem
      margin-right 0
      img{
        margin-left .26rem
      }
    }
    img{
      margin-left .1rem
    }
    p{
      margin-top .28rem
      font-size .22rem
      color #848484
    }
  }
}

</style>
