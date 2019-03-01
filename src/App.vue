<template>
  <div id="app">
    <Header></Header>
    <Loading v-if="isLoading"></Loading>
    <!--<keep-alive>-->
    <!--<router-view v-if="$route.meta.keepAlive"></router-view>-->
    <!--</keep-alive>-->
    <router-view v-if="isRouterAlive"></router-view>
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
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      }
    },
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
