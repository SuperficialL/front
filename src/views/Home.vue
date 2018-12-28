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
  import Sidebar from '@/components/Sidebar/Sidebar'
  import Banner from '@/components/Banner/Banner'
  import Article from '@/components/Article/Article'

  export default {
    name: 'home',
    components: {
      Sidebar,
      Banner,
      Article
    }
  }
</script>
<style lang="scss" scoped>
  .main {
    flex: 1 0 auto;
    margin-top: 20px;
    .container {
      display: flex;
      justify-content: space-between;
      width: 1260px;
      margin: 0 auto;
      .content-wrapper {
        width: 900px;
      }
    }
  }
</style>
