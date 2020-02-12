<template>
  <div class="home">
    <!-- <indexTop></indexTop> -->
    <!-- <div class="mai"> -->
      <router-view></router-view>
      <!-- <div class="white-space"></div> -->
    <!-- </div> -->
    <div class="navbar">
      <ul class="nav-menu">
        <li class="menu-item">
          <router-link to="homepage" class="link">
            <img src="../../assets/images/tab_home_hig.png" alt="">
            <p>首页</p>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="classify" class="link">
             <img src="../../assets/images/tab_menu_nor.png" alt="">
            <p>分类</p>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="shoppingcart" class="link">
             <img src="../../assets/images/tab_shopping_nor.png" alt="">
            <p>购物车</p>
          </router-link>
        </li>
        <li class="menu-item">
          <router-link to="mine" class="link">
            <img src="../../assets/images/tab_me_nor.png" alt="">
            <p>我的</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import indexTop from './index-top'
export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="stylus">
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // .white-space {
  //   height:1.3rem;
  // }
  .navbar {
    position: fixed;
    bottom:0;
    width:100%;
    overflow: hidden;
    flex: 0 0 1.2077rem;
    background-color: #f6f6f6;
    .nav-menu {
      display: flex;
      height: 1rem;
      justify-content :space-around;
      .menu-item {
        display:flex;
        justify-content :space-around;
        text-align: center;
        .link {
          display: block;
          padding: 5px;
          width: 100%;
          height: 100%;
          color: #666;
          box-sizing: border-box;
          &.active {
            color: #ff9900;
          }
          img{
            text-align :center;
            width :.44rem;
            height :.44rem;
          }
          p {
            text-align:center;
            padding-top:.12rem;
            font-size: 0.24rem;
          }
        }
      }
    }
  }
}
</style>
