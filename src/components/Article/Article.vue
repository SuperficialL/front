<template>
  <transition-group tag="section" class="article-list-wrapper">
    <article class="article"
             v-for="article in articleList"
             :key="article.id"
    >
      <div class="thumbnail">
        <router-link :to="{ name: 'detail',params: {id: article.id} }">
          <img class="thumbnail" :src="article.img" alt="article.title">
        </router-link>
      </div>
      <div class="article-inner">
        <h3 class="title">
          <router-link :to="{ name: 'detail',params: { id: article.id } }">
            {{ article.title }}
          </router-link>
        </h3>
        <div class="summary">
          {{ article.digest }}
        </div>
        <div class="article-info">
          <div class="meta">
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
          <router-link :to="{ name: 'detail',params: { id: article.id } }">
            阅读全文
          </router-link>
        </div>
      </div>
    </article>
  </transition-group>
</template>

<script>
  import { mapState } from 'vuex'
  import { dateFormat } from '@/filters/dateFormat'

  export default {
    name: 'Article',
    computed: {
      ...mapState({
        articleList: state => state.home.articleList
      })
    },
    methods: {
      // ...mapActions(['getArticleList'])
    },
    created () {
      // this.getArticleList()
    },
    filters: {
      dateFormat
    }
  }
</script>

<style lang="scss" scoped>
  section.article-list-wrapper {
    .v-enter, .v-leave-to {
      opacity: 0;
      transform: translateY(40px);
    }
    .v-enter-active, .v-leave-active {
      transition: all .6s ease;
    }
    .article {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
      margin: 20px 0;
      padding: 10px;
      transition: all .4s linear;
      &:hover {
        box-shadow: 4px 4px 10px #e3d4ff;
        transition: all .4s linear;
        & .thumbnail {
          transform: scale(1.1);
        }
      }
      .thumbnail {
        overflow: hidden;
        height: 145px;
        border: 1px solid transparent;
        transition: all .4s linear;

      }
      .article-inner {
        position: relative;
        width: 590px;
        .title {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          height: 20px;
          line-height: 20px;
          font-size: 20px;
          font-weight: 500;
          border-bottom: 1px solid #eee;
          padding-bottom: 5px;
          margin-bottom: 7px;
          a {
            color: #666;
          }
        }
        .summary {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          height: 90px;
          overflow: hidden;
          color: #555;
          line-height: 24px;
          font-size: 14px;
          word-break: break-word;
          text-overflow: ellipsis;
        }
        .article-info {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          font-size: 12px;
          .meta {
          }
        }
      }
    }
  }
</style>
