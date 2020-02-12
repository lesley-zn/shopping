<template>
  <div class="minecenter">
    <div class="mineTop">
      <a href="#">
        <img src="../../../assets/images/mine-set.jpg" alt="">
      </a>
      <span> 个人中心 </span>
      <a href="#">
        <img src="../../../assets/images/mine-msg.jpg" alt="">
      </a>
      <a href="#" class="myphoto">
        <img src="../../../assets/images/mine-photo.jpg" alt="" >
        <p>点击登录</p>
      </a>
    </div>
    <div class="collection">
      <a href="#">
        <img src="../../../assets/images/mine-like.jpg" alt="">
        <span>我的收藏</span>
      </a>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Minetop'

}
</script>

<style lang="stylus" scoped>
.mineTop{
  width 100%
  height 3.32rem
  background #ff9900
  padding .35rem .48rem 0 .39rem
  box-sizing border-box
  position relative
  a{
    display inline-block
    float left
  }
  span{
    float left
    display inline-block
    font-size .42rem
    color #ffffff
    margin-left 2.12rem
    margin-right 1.8rem
  }
  .myphoto{
    position absolute
    left 2.72rem
    top 1.95rem
    p{
      margin-left .18rem
      margin-top .2rem
      font-size .42rem
      color #333
    }
  }
}
.collection{
  height .83rem
  margin-top 1.78rem
  border-bottom .14rem solid #efeeee
  img{
    display inline-block
    margin-left .35rem
    margin-right .25rem
    vertical-align bottom
  }
  span{
    font-size .32rem
  }
}

</style>
