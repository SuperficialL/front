<template>
  <div id="app">
    <Header></Header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header/Header'
  import Footer from '@/components/Footer/Footer'

  export default {
    name: 'App',
    created () {
      this.$store.dispatch('GET_MENU')
      this.$store.dispatch('GET_ARTICLE_LIST')
      this.$store.dispatch('GET_BANNER')
      // this.$store.dispatch('GET_FriendLink')
      // this.$store.dispatch('GET_TAGS')
    },
    methods: {},
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  a {
    display: block;
    font-size: 14px;
    font-weight: 200;
    color: rgb(77, 85, 93);
    &.isActive {
      color: rgb(240, 20, 20)
    }
  }
</style>
