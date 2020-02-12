<template>
  <div class="crazytoday">
    <div class="title">
      <img src="../../../../assets/images/hot.png" alt="">
      <!-- <span>今日疯抢</span> -->
      <span>{{hotres.name}}</span>
    </div>
    <ul>
      <li>
        <a href="#">
          <img :src="hotres.list[0].thumbnail" alt="">
          <span>￥{{hotres.list[0].reduct_price}}</span><span>￥{{hotres.list[0].original_price}}</span>
          <p>{{hotres.list[0].name}}</p>
        </a>
      </li>
      <li>
        <a href="#">
          <img :src="hotres.list[1].thumbnail" alt="">
          <span>￥{{hotres.list[1].reduct_price}}</span><span>￥{{hotres.list[1].original_price}}</span>
          <p> {{hotres.list[1].name}}</p>
        </a>
      </li>
      <!-- <li>
        <a href="#">
          <img src="../../../../assets/images/index1.png" alt="">
          <span>￥88.00</span><span>￥96.00</span>
          <p>美国/SUPER MILD 沐浴露500ml</p>
        </a>
      </li> -->

    </ul>

  </div>
</template>

<script>
export default {
  name: 'Crazytoday',
  props: ['hotres']

}
</script>

<style lang="stylus" scoped>
.crazytoday{
  width 100%
  height 5.65rem
  background #fafafa
  display flex
  flex-direction column
  padding-left .22rem
  .title{
    width 100%
    height .98rem
    padding-top .26rem
    padding-bottom .32rem
    box-sizing border-box
    img{
      display inline-block
      vertical-align bottom
    }
    span{
      font-size .28rem
      color #333
    }
  }
  ul{
    height 4.67rem
    display flex
    overflow: scroll;
    li{
      background #fff
      width 3.24rem
      height 100%
      margin-right .22rem
      border .02rem solid #eee
      color #666
      a{
        height 100%
        width 100%
        display block
        img{
          margin .3rem .4rem
        }
        span{
          font-size .26rem
          &:nth-of-type(1){
            color #eb3341
            margin-left .2rem
            margin-right .5rem
          }
          &:nth-of-type(2){
            text-decoration line-through
            margin-right .4rem
          }
        }
        p{
          font-size .26rem
          margin-left .2rem
          margin-top .14rem
        }
      }
    }
  }
}

</style>
