<template>
  <div class="search">

      <input type="text" value="" class="input" placeholder="Montagne jeunesse">
      <div class="iconBox">
        <img src="../../../assets/images/search.png" alt="">
      </div>

    <!-- <img src="../../../assets/images/index-banner-top.png" alt=""> -->

  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
.search{
  height: .94rem;
  width :100%;
  padding: .18rem 1.16rem .14rem 1.16rem;
  box-sizing border-box
  background : #ff9900 ;
  .input{
  width:4.55rem;
  height:.6rem;
  border-radius .15rem 0rem 0rem .15rem;
  background #ffe1b5;
  border: none;
  font-size .28rem
  color #999
  float left
  padding-left .14rem
  box-sizing border-box
  }
  .iconBox{
    width .6rem
    height .6rem
    background #ffe1b5;
    float left
    border-radius 0rem .15rem .15rem 0rem;
  }
  img{
    margin-top .1rem
    margin-left .05rem
  }
}
</style>
