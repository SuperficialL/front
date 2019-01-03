<template>
  <section class="main">
    <div class="container">
      <div class="content-wrapper">
        <div class="breadcrumb">
          <div class="category-title">
            <h2>当前分类: {{ category_name }}</h2>
            <span>共 {{ articleList.length }} 篇</span>
          </div>
          <p class="description">作为一个运维或者后端开发，Linux
            的常用操作是必须要熟悉的，但是话又说回来，知识是无限的，学习的精力和时间都是有限的，如何提高学习效率很重要。我的学习方式很简单，就是一句话，学以致用，换句话说就是需要用的时候才学，这样不仅学的东西对自己有用，更重要的是不容易忘记。于是，我开了这个时间线，用来记录日常工作中学到的
            Linux 知识。</p>
        </div>
        <Article></Article>
      </div>
      <Sidebar></Sidebar>
    </div>
  </section>
</template>
<script>
  import Sidebar from '@/components/Sidebar/index'
  import Article from '@/components/Article/index'
  import { mapState } from 'vuex'

  export default {
    name: 'tag',
    created () {
      this.$store.dispatch('GET_CATEGORY', { id: this.$route.params.id })
    },
    computed: {
      ...mapState({
        articleList: state => state.category.tags,
        category_name: state => state.category.tag_name
      })
    },
    watch: {
      '$route' (to, from) {
        if (to.name === 'tag') {
          console.log(to)
          this.$store.dispatch('GET_CATEGORY', { id: this.$route.params.id })
        }
      }
    },
    components: {
      Sidebar,
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
      max-width: 1260px;
      margin: 0 auto;
      .content-wrapper {
        width: 900px;
        .breadcrumb {
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          .category-title {
            display: flex;
            justify-content: space-between;
            padding-bottom: 5px;
            border-bottom: 2px solid #f0f0f0;
            h2 {
              position: relative;
              &:before {
                content: '';
                position: absolute;
                bottom: -7px;
                width: 100%;
                border-bottom: 2px solid #00AAEE;
              }
            }
          }
          .description {
            margin-top: 10px;
            text-indent: 2em;
          }
        }
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
