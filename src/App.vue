<template>
  <div id="app">
    <Header></Header>
    <Loading v-if="isLoading"></Loading>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Loading from '@/components/Loading'
  import { mapGetters } from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapGetters(['isLoading'])
    },
    components: {
      Header,
      Footer,
      Loading
    }
  }
</script>

<style lang="scss">
  #app {
    background-color: #f4f4f4;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateY(40px);
  }

  .v-enter-active, .v-leave-active {
    transition: all 2.6s ease-in-out;
  }
</style>
