<template>
  <div class="shopcontain">
    <div class="address">
      <img src="../../../assets/images/shop-icon.jpg" alt="">
      <span>杭州保税区仓</span>
    </div>
    <div class="goods1">
      <img class="select" src="../../../assets/images/shop-select.jpg" alt="">
      <img class="product" src="../../../assets/images/shop1.jpg" alt="">
      <div class="infor">
        <p>ChildLife/童年时光婴幼... <span>90粒装</span></p>
        <div>
          <span class="less">-</span>
          <span class="num">1</span>
          <span class="add">+</span>
        </div>

      </div>
      <p class="price">￥118</p>
    </div>

    <div class="address">
      <img src="../../../assets/images/shop-icon.jpg" alt="">
      <span>杭州保税区仓</span>
    </div>

    <div class="goods2">
      <img class="product" src="../../../assets/images/shop1.jpg" alt="">
      <div class="infor">
        <p>ChildLife/童年时光婴幼... <span>90粒装</span></p>
        <div>
          <span class="less">-</span>
          <span class="num">1</span>
          <span class="add">+</span>
        </div>
      </div>
      <p class="price">￥118</p>
      <p class="del">删除</p>
    </div>

    <div class="bill">
      <div class="selectall">
        <img src="../../../assets/images/shop-select.jpg" alt="">
        <span>全选</span>
      </div>
      <div class="edit">
        <img src="../../../assets/images/shop-edit.jpg" alt="">
        <span>编辑</span>
      </div>
      <div class="price">
        <p>合计：118.00</p>
        <p>（不含运费）</p>
      </div>
      <div class="count">
        去结算
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Shopcontain'

}
</script>

<style lang="stylus" scoped>
.address{
  width 100%
  height .7rem
  img{
    margin-left .38rem
    margin-top .35rem
    margin-right .26rem
    display inline-block
  }
  span{
    font-size .42rem
    color #acacac
  }
}
.goods1{
  width 100%
  height 2.47rem
  padding .5rem .62rem .4rem .38rem
  box-sizing border-box
  display flex
  align-items center
  .select{
    width .42rem
    height .42rem
    margin-right .21rem
  }
  .product{
    margin-right .21rem
  }
  .infor{
    display flex
    flex-direction column
    justify-content space-around
    margin-right .46rem
    p{
      font-size .32rem
      color #333
      span{
        font-size .28rem
        color #999
      }
    }
    .less, .add, .num{
      display inline-block
      width .75rem
      height .4rem
      border .02rem solid #ccc
      background #fff
      font-size .28rem
      text-align center
      line-height .4rem
      margin-left -.1rem
      margin-top .4rem
    }
  }
  .price{
    font-size .32rem
    color #000
  }
  .del{
    width .98rem
    height 2.12rem
    background #ff9900
    color #ffffff
    text-align center
    line-height 2.12rem
    font-size .32rem
  }
}

.goods2{
  width 100%
  height 2.47rem
  padding .5rem 0rem .4rem .38rem
  box-sizing border-box
  display flex
  align-items center
  .select{
    width .42rem
    height .42rem
    margin-right .21rem
  }
  .product{
    margin-right .21rem
  }
  .infor{
    display flex
    flex-direction column
    justify-content space-around
    margin-right .46rem
    p{
      font-size .32rem
      color #333
      span{
        font-size .28rem
        color #999
      }
    }
    .less, .add, .num{
      display inline-block
      width .75rem
      height .4rem
      border .02rem solid #ccc
      background #fff
      font-size .28rem
      text-align center
      line-height .4rem
      margin-left -.1rem
      margin-top .4rem
    }
  }
  .price{
    font-size .32rem
    color #000
  }
  .del{
    width 1.6rem
    height 2.12rem
    background #ff9900
    color #ffffff
    text-align center
    line-height 2.12rem
    font-size .28rem
    margin-left .24rem
  }
}

.bill{
  border .03rem solid #eeeeee
  width 100%
  height 1.12rem
  margin-top 3.35rem
  display flex
  align-items center
  padding-left .38rem
  box-sizing border-box
  .selectall{
    margin-right .3rem
    span{
      font-size .28rem
    }
  }
  .edit{
    margin-right 1.3rem
    span{
      font-size .28rem
    }
  }
  .price{
    margin-right .5rem
    font-size .24rem
  }
  .count{
    width 2rem
    height 100%
    background #ff9900
    color #ffffff
    text-align center
    line-height 1.12rem
    font-size .28rem
  }
}
</style>
