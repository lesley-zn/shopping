<template>
  <div class="baby">
    <ul class="list1">
      <li>美妆护肤</li>
    </ul>
    <ul class="list2">
      <li>
        <a href="#">
          <img src="../../../assets/images/classify1.jpg" alt="">
        </a>
         <p>奶粉</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify2.jpg" alt="">
        </a>
         <p>抱抱洗护</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify3.jpg" alt="">
        </a>
         <p>辅食</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify4.jpg" alt="">
        </a>
         <p>驱蚊防蚊</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify5.jpg" alt="">
        </a>
         <p>基础营养</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify6.jpg" alt="">
        </a>
         <p>孕产妇用户</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify7.jpg" alt="">
        </a>
         <p>用品</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify8.jpg" alt="">
        </a>
         <p>尿裤湿巾</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify9.jpg" alt="">
        </a>
         <p>服饰</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify10.jpg" alt="">
        </a>
         <p>童装童鞋</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify11.jpg" alt="">
        </a>
         <p>玩具</p>
      </li>
      <li>
        <a href="#">
          <img src="../../../assets/images/classify12.jpg" alt="">
        </a>
         <p>童车童鞋</p>
      </li>

    </ul>

  </div>
</template>

<script>
export default {
  name: 'Mkaeups'

}
</script>

<style lang="stylus" scoped>
.list1{
  width 2.34rem
  float  left
  margin-right .2rem
  li.active{
    border-left .1rem solid #1d84a7
    background #fff
    color #ff9900
  }
  li{
    height .94rem
    text-align center
    line-height .94rem
    font-size .24rem
    background #fafafa
  }
}
.list2{
  width 4.98rem
  float left
  li{
    width 2.24rem
    height 2.36rem
    border .02rem solid #2b8cad
    border-radius .1rem
    float left
    margin-right .18rem
    margin-top .26rem
    img{
      margin .12rem .27rem 0 .27rem
    }
    p{
      width 2.24rem
      height .48rem
      background #2b8cad
      text-align center
      line-height .48rem
      color #fff
      font-size .24rem
    }
  }
}

</style>
