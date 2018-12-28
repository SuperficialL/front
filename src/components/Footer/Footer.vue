<template>
  <footer class="footer">
    <div class="footer-inner">
      <p class="card-text">Copyright © Superficial Blog All Rights Reserved.</p>
      <p>
        <a href="http://www.miibeian.gov.cn/" target="_blank">京ICP备15011150号-2</a>
      </p>
    </div>
    <div class="back-to-end" @click="scrollToTop" :class="{ show: toTopShow }">
      <i class="icon icon-top"></i>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data() {
      return {
        toTopShow: false
      }
    },
    methods: {
      handleScroll() {
        // 首先修改相对滚动位置
        this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
        this.toTopShow = this.scrollTop > 300
      },
      scrollToTop() {
        let timer = null
        let _that = this
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn() {
          if (_that.scrollTop > 0) {
            _that.scrollTop -= 50
            // 然后修改这里实现动画滚动效果
            document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer)
            _that.toTopShow = false
          }
        })
      }
    },
    mounted() {
        this.$nextTick(
          function () {
            window.addEventListener('scroll', this.handleScroll)
          }
        )
      }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/scss/variable';

  .footer {
    flex: 0 0 auto;
    width: 100%;
    height: 100px;
    margin-top: 10px;
    background-color: black;
    box-sizing: border-box;
    .footer-inner {
      max-width: 1260px;
      margin: 0 auto;
      padding: 16px 20px 14px;
      text-align: center;
      color: #aaa;
      text-shadow: 0 -1px 0 #333;
    }
    .back-to-end {
      position: fixed;
      right: 30px;
      bottom: 30px;
      z-index: 999;
      width: 32px;
      color: #fff;
      background-color: $background-color;
      cursor: pointer;
      transition: .7s;
      transform: translateX(100px);

      &.show {
        transform: translateX(0);
      }
      i {
        font-size: 30px;
      }
      &.active{
        right: 30px;
      }
    }
  }
</style>
