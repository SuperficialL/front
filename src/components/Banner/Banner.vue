<template>
  <div class="slide">
    <el-carousel :interval="5000" height="300px">
      <el-carousel-item type="card" v-for="(item,index) in bannerList" :key="index">
        <img :src="item.img_url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Banner',
    computed: {
      ...mapState({
        bannerList: state => state.home.bannerList
      })
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .slide {
    max-width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px solid #ddd;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
</style>
