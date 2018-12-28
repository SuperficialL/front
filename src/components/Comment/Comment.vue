<template>
  <div class="comment-wrapper">
    <CommentBox :articleId="$route.params.id"></CommentBox>
    <p style="text-align: center">{{commentList.length }}条评论</p>
    <ul class="comment-list-wrap">
      <li class="comment-list"
          v-for="(comment,index) in commentList"
          :key="index"
      >
        <div class="comment-content">
          <img class="avatar" :src="comment.avatar" alt="">
          <div class="content-wrap">
            <div class="info">
              <div class="meta">
                <span class="author">{{ comment.name }}</span>
                <span>评论等级系统</span>
                <span>{{ comment.created_time | dateFormat }}</span>
                <span>Windows 10</span>
                <span>Chrome 70.0.3538.67</span>
              </div>
              <a class="reply" @click="reply(comment.name)">回复</a>
            </div>
            <div class="content">
              {{ comment.content }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import CommentBox from '@/components/Comment/CommentBox'
  import { dateFormat } from '@/filters/dateFormat'

  export default {
    name: 'Comment',
    data () {
      return {
        commentList: []
      }
    },
    created () {
    },
    methods: {
      reply (name) {
        // 回复
      },
      cancel () {
        // 取消回复
        this.flag = false
      }
    },
    filters: {
      dateFormat
    },
    components: {
      CommentBox
    }
  }
</script>

<style lang="scss" scoped>
  .comment-wrapper {
    position: relative;
    padding: 12px 20px 0 20px;
    background-color: #fff;
    .comment-list-wrap {
      .comment-list {
        position: relative;
        margin-bottom: 20px;
        .comment-content {
          > .avatar {
            position: absolute;
            width: 54px;
            height: 54px;
            z-index: 1;
          }
          > .content-wrap {
            position: relative;
            margin-left: 74px;
            width: 88%;
            padding: 10px;
            border: 1px #eee solid;
            border-radius: 3px;
            background: #fbfdfb;
            word-wrap: break-word;
            font-size: .9375rem;
            line-height: 1.5625rem;
            word-break: break-all;
            &:before {
              position: absolute;
              top: 15px;
              left: -9px;
              display: inline-block;
              border-top: 9px solid transparent;
              border-right: 9px solid #eee;
              border-bottom: 9px solid transparent;
              content: '';
            }
            &:after {
              position: absolute;
              top: 17px;
              left: -7px;
              display: inline-block;
              border-top: 7px solid transparent;
              border-right: 7px solid #fbfdfb;
              border-bottom: 7px solid transparent;
              content: '';
            }
            .content {
            }
            .info {
              display: flex;
              justify-content: space-between;
              font-size: 13px;
              .meta {
                span {
                  margin-right: 10px;
                }
                .author {
                  color: #bbb;
                }
              }
              .reply {
                padding: 0 15px;
                background-color: deepskyblue;
                cursor: pointer;
                &:hover {
                  background-color: rosybrown;
                }
              }
            }

          }
        }
      }
    }
  }
</style>
