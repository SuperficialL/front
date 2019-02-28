<template>
  <section class="main">
    <div class="container">
      <div class="content-wrapper">
        <article class="article">
          <div class="article-header">
            <h3 class="title">
              {{ article.title }}
            </h3>
            <div class="meta">
              <span>
                <i class="icon icon-fenlei"></i>
                {{ article.category }}
              </span>
              <span>
                <i class="icon icon-fenlei"></i>
                {{ article.author }}
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
                <i class="icon icon-pinglun"></i>
                {{ article.comment_counts }}
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
            <div class="detail" v-html="article.formatted_body" v-highlight>
            </div>
          </div>
        </article>
        <div class="pager">
          <p class="previous">
            上一篇 :
            <router-link
              v-if="article.previous"
              :to="{name:'detail',params: {id:article.previous.id}}"
              :title="article.previous.title"
            >
              {{ article.previous.title }}
            </router-link>
            <span v-else>已经是第一篇文章了!</span>
          </p>
          <p class="next">
            下一篇 :
            <router-link
              v-if="article.next"
              :to="{name:'detail',params: {id:article.next.id}}"
              :title="article.previous.title"
            >
              {{ article.next.title }}
            </router-link>
            <span v-else>已经是最后一篇文章了!</span>
          </p>
        </div>
        <AuthorArea></AuthorArea>
        <Comment></Comment>
      </div>
      <Sidebar></Sidebar>
    </div>
  </section>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import Comment from '@/components/Comment'
  import AuthorArea from '@/components/AuthorArea/AuthorArea'
  import { mapState } from 'vuex'
  import { dateFormat } from '@/utils/dateFormat'

  export default {
    name: 'detail',
    created () {
      this.$store.dispatch('GET_ARTICLE_DETAIL', { id: this.$route.params.id })
    },
    computed: {
      ...mapState({
        article: state => state.article.article
      })
    },
    watch: {
      '$route' () {
        this.$store.dispatch('GET_ARTICLE_DETAIL', { id: this.$route.params.id })
      }
    },
    components: {
      Sidebar,
      Comment,
      AuthorArea
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
        padding: 15px;
        background-color: #fff;
        .article {
          .article-header {
            padding: 10px 10px 5px;
            text-align: center;
            border-bottom: 1px solid red;
            .title {
              margin: 5px 0;
            }
            .meta {
              color: #999;
            }
          }
          .article-content {
            fieldset {
              margin: 10px 0;
              padding: 10px 20px;
              border: 1px dashed #ddd;
            }
          }
        }
        .pager {
          display: flex;
          margin: 20px 0;
          justify-content: space-between;
          a {
            color: #099;
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }
</style>
