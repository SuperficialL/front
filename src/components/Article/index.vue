<template>
    <section class="article-list-wrapper">
      <article class="article"
             v-for="article in articleList"
             :key="article.id"
    >
      <router-link class="thumbnail"
                   :to="{ name: 'detail',params: {id: article.id} }"
      >
        <img class="thumbnail" :src="article.img" alt="article.title">
      </router-link>
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
                {{ article.category }}
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
                <i class="icon icon-pinglun3"></i>
                {{ article.comment_counts }}
              </span>
          </div>
          <router-link :to="{ name: 'detail',params: { id: article.id } }">
            阅读全文
          </router-link>
        </div>
      </div>
    </article>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="articleList.length">
      </el-pagination>
    </section>
</template>

<script>
  import { mapState } from 'vuex'
  import { dateFormat } from '@/utils/dateFormat'

  export default {
    name: 'Article',
    computed: {
      ...mapState({
        articleList: state => state.category.articleList
      })
    },
    filters: {
      dateFormat
    }
  }
</script>

<style lang="scss" scoped>
  .article-list-wrapper {
    margin-top: 20px;
    .article {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 10px;
      background-color: #fff;
      transition: all .4s ease;
      &:last-child {
        margin-bottom: 0;
      }
      &:hover {
        box-shadow: 4px 4px 10px #e3d4ff;
        & .thumbnail {
          img {
            transform: scale(1.1);
          }
        }
      }
      .thumbnail {
        display: block;
        overflow: hidden;
        img {
          width: 245px;
          height: 145px;
          transition: all .4s linear;
        }
      }
      .article-inner {
        position: relative;
        width: 590px;
        .title {
          margin-bottom: 7px;
          padding-bottom: 5px;
          height: 20px;
          line-height: 20px;
          white-space: nowrap;
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
          margin-top: 10px;
          font-size: 12px;
          .meta {
            color: #999;
            span {
              margin-right: 12px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .article-list-wrapper {
      background-color: #eee;
      .article {
        flex-wrap: wrap;
        border: 0;
        background-color: #fff;
        .thumbnail {
          width: 100%;
          text-align: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .article-inner {
          width: 100%;
          .title {
            margin-top: 10px;
            text-align: center;
          }
          .summary {
            height: auto;
            margin: 10px 0;
          }
          .article-info {
            flex-wrap: wrap;
            .meta {
              width: 100%;
              margin-bottom: 10px;
            }
            a {
              display: block;
              width: 100%;
              padding: 10px 0;
              border-radius: 6px;
              text-align: center;
              background-color: #eee;
            }
          }
        }
      }
    }
  }
</style>
