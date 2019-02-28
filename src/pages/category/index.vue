<template>
  <section class="main">
    <div class="container">
      <div class="content-wrapper">
        <div class="breadcrumb">
          <div class="category-title">
            <h2>当前分类: {{ $route.params.title }}</h2>
            <span>共 {{ count }} 篇</span>
          </div>
          <p class="description">{{$route.params.description}}</p>
        </div>
        <Article></Article>
      </div>
      <Sidebar></Sidebar>
    </div>
  </section>
</template>
<script>
  import Sidebar from '@/components/Sidebar'
  import Article from '@/components/Article'
  import { mapState } from 'vuex'

  export default {
    name: 'category',
    created () {
      this.$store.dispatch('GET_ARTICLES',
        {
          category: this.$route.params.id
        }
      )
    },
    computed: {
      ...mapState({
        articleList: state => state.category.articleList,
        count: state => state.category.count
      })
    },
    watch: {
      '$route' (to, from) {
        console.log(to, from)
        if (to.name === 'categories') {
          this.$store.dispatch('GET_ARTICLES', { category: this.$route.params.id })
        } else if (to.name === 'tag') {
          this.$store.dispatch('GET_ARTICLES', { tags: this.$route.params.id })
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
