<template>
  <section class="main">
    <div class="container">
      <div class="content-wrapper">
        <article class="article">
          <div class="article-header">
            <h3 class="title">
              {{ article.title }}
            </h3>
            <div class="mate">
            <span>
                <i class="icon icon-fenlei"></i>
                {{ article.parent_category }}null
              </span>
              <span>
                <i class="icon icon-shijian"></i>
                {{ article.created_time | dateFormat }}
              </span>
              <span>
                <i class="icon icon-followus"></i>
                {{ article.views }}
              </span>
              <span>
                <i class="icon icon-subscribe-1-copy"></i>
                {{ article.counts }}
              </span>
            </div>
          </div>
          <div class="article-content">
            <fieldset>
              <legend>摘要</legend>
              <p>
                {{ article.digest }}
              </p>
            </fieldset>
            <div class="detail" v-html="article.body">
            </div>
            <div class="pager">
              <router-link :to="{name:'Detail', params:{ id: $route.params.id }}">
                <i class="icon icon-prev"></i>
                上一篇:Vue
              </router-link>
              <router-link :to="{name:'Detail', params:{ id: $route.params.id }}">
                <i class="icon icon-prev"></i>
                上一篇:Vue
              </router-link>
            </div>
          </div>
          <Comment></Comment>
        </article>
      </div>
      <Sidebar></Sidebar>
    </div>
  </section>
</template>
<script>
  import Sidebar from '@/components/Sidebar/Sidebar'
  import Comment from '@/components/Comment/Comment'
  import { mapState } from 'vuex'
  import { dateFormat } from '@/filters/dateFormat'

  export default {
    name: 'Detail',
    created () {
      this.$store.dispatch('GET_ARTICLE_DETAIL', { id: this.$route.params.id })
    },
    computed: {
      ...mapState({
        article: state => state.single.article
      })
    },
    watch: {
      $route () {
        this.$store.dispatch('GET_ARTICLE_DETAIL', { id: this.$route.params.id })
      }
    },
    methods: {},
    components: {
      Sidebar,
      Comment
    },
    filters: {
      dateFormat
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
        background-color: #f4f4f4;
        .article {
          padding: 15px;
          .article-header {
            padding: 10px 10px 5px;
            text-align: center;
            border-bottom: 1px solid red;
            h3 {
              margin: 5px 0;
            }
          }
          .article-content {
            fieldset {
              margin: 10px 0;
              padding: 10px 20px;
              border: 1px dashed #ddd;
            }
            .detail {
            }
            .pager {
              display: flex;
              margin: 20px 0;
              justify-content: space-between;
              a {
                padding: 5px 15px;
                color: #099;
                &:hover {
                  color: red;
                }
              }
            }
          }
          .article-footer {

          }
        }
      }
    }
  }
</style>
