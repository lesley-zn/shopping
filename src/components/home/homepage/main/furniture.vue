<template>
  <div class="furniture">
    <div class="title">
      <img src="../../../../assets/images/furniture.png" alt="">
      <span>{{furnitures.name}}</span>
    </div>
    <ul>
      <li>
          <a href="#">
          <img :src="furnitures.list[0].thumbnail" alt="">
          <p>{{furnitures.list[0].name}}</p>
          <span>￥{{furnitures.list[0].reduct_price}}</span><span>￥{{furnitures.list[0].original_price}}</span>

        </a>
      </li>
      <li>
          <a href="#">
          <img :src="furnitures.list[1].thumbnail" alt="">
          <p>{{furnitures.list[1].name}}</p>
          <span>￥{{furnitures.list[1].reduct_price}}</span><span>￥{{furnitures.list[1].original_price}}</span>

        </a>
      </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'Furniture',
  props: ['furnitures']

}
</script>

<style lang="stylus" scoped>
.furniture{
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
          margin .3rem .5rem
        }
        span{
          font-size .26rem
          &:nth-of-type(1){
            color #ffa002
            margin-left .2rem
            margin-right .5rem
          }
          &:nth-of-type(2){
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
