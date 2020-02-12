<template>
  <div class="global">
    <div class="title">
      <img src="../../../../assets/images/airplane.png" alt="">
      <span>{{globals.name}}</span>
    </div>
    <ul>
      <li>
         <a href="#">
          <img :src="globals.list[0].thumbnail" alt="">
          <p>{{globals.list[0].name}}</p>
          <span>￥{{globals.list[0].reduct_price}}</span><span>￥{{globals.list[0].original_price}}</span>

        </a>
      </li>
      <li>
         <a href="#">
          <img :src="globals.list[1].thumbnail" alt="">
          <p>{{globals.list[1].name}}</p>
          <span>￥{{globals.list[1].reduct_price}}</span><span>￥{{globals.list[1].original_price}}</span>

        </a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Global',
  props: ['globals']

}
</script>

<style lang="stylus" scoped>
.global{
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
