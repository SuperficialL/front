<template>
  <section class="main">
    <div class="container">
      <div class="content-wrapper">
        <Banner></Banner>
        <Article></Article>
      </div>
      <Sidebar></Sidebar>
    </div>
  </section>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Banner from '@/components/Banner'
  import Article from '@/components/Article'

  export default {
    name: 'Home',
    created () {
      // this.$store.dispatch('GET_BANNER')
      // this.$store.dispatch('GET_FriendLink')
      // this.$store.dispatch('GET_TAGS')
      // this.$store.dispatch('GET_BLOGINFO')
    },
    components: {
      Sidebar,
      Banner,
      Article
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    margin-top: 20px;
    .container {
      display: flex;
      justify-content: space-between;
      max-width: 1260px;
      margin: 0 auto;
      .content-wrapper {
        width: 900px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .main {
      margin-top: 0;
      .container {
        .content-wrapper {
          width: 100%;
        }
      }
    }
  }
</style>
