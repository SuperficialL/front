<template>
  <div class="comment-wrapper">
    <transition name="slide-fade">
      <form method="post" ref="form">
        <div class="content" v-show="visible">
          <h3>发表你的评论</h3>
          <textarea
            v-model="content.value"
            placeholder="这儿交给你了 *^-^*"
          >
          </textarea>
          <span v-show="content.validate" class="comment-tips">{{ content.msg }}</span>
          <div class="comment-control">
            <div>
              <ul class="tools">
                <li><i></i>表情</li>
                <li><i></i>贴图</li>
              </ul>
            </div>
            <div class="submit-wrap">
              <input type="checkbox" id="tips">
              <label for="tips">有人回复时通知我</label>
              <input type="submit" class="submit-btn" value="取消评论" @click="cancelComment">
              <input type="submit" class="submit-btn" value="提交评论" @click.prevent="addComment">
            </div>
          </div>
          <div class="comment-info-wrap">
            <div class="comment-inp author">
              <label for="author">昵称(必填)</label>
              <input type="text" id='author' name='author' v-model="author.value" placeholder="昵称">
              <span v-show="author.validate" class="comment-tips">{{ author.msg }}</span>
            </div>
            <div class="comment-inp email">
              <label for="email">邮箱(必填)</label>
              <input type="text" id='email' name='email' v-model="email.value" placeholder="邮箱">
              <span v-show="email.validate" class="comment-tips">{{ email.msg }}</span>
            </div>
            <div class="comment-inp url">
              <label for="url">网址</label>
              <input type="text" id='url' name='url' v-model="url.value" placeholder="网址">
              <span v-show="url.validate" class="comment-tips">{{ url.msg }}</span>
            </div>
          </div>
        </div>
      </form>
    </transition>
    <p style="text-align: center">{{comments.length }}条评论</p>
    <ul class="comment-list-wrap">
      <li class="comment-list"
          v-for="(comment,index) in comments"
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
    <p style="text-align: center" @click="getMore">加载更多</p>
  </div>
</template>

<script>
  import { dateFormat } from '@/utils/dateFormat'
  import { mapState } from 'vuex'
  import API from '@/api/index'

  export default {
    name: 'Comment',
    data () {
      return {
        commentList: [],
        currentPage: 1,
        visible: true,
        author: {
          value: '',
          validate: false,
          msg: ''
        },
        email: {
          value: '',
          validate: false,
          msg: ''
        },
        url: {
          value: '',
          validate: false,
          msg: ''
        },
        content: {
          value: '',
          validate: false,
          msg: ''
        }
      }
    },
    created () {
      // this.$store.dispatch('GET_COMMENT_LIST', {
      //   page: this.currentPage
      // })
    },
    computed: {
      ...mapState({
        comments: state => state.single.comments
      })
    },
    methods: {
      reply (name) {
        // 回复
      },
      cancel () {
        // 取消回复
        this.flag = false
      },
      contentValidate () {
        // 验证评论内容
        if (this.content.value === '') {
          this.content.validate = true
          this.content.msg = '来点内容吧!'
        }
      },
      authorValidate () {
        // 验证评论内容
        if (this.author.value === '') {
          this.author.validate = true
          this.author.msg = '你还没署名呢!'
        }
      },
      emailValidate () {
        // 验证评论内容
        if (this.email.value === '') {
          this.email.validate = true
          this.email.msg = '不写邮箱收不到回复提示哦!'
        }
      },
      addComment () {
        // 添加评论
        this.contentValidate()
        this.authorValidate()
        this.emailValidate()
        let data = new FormData()
        data.append('name', this.author.value)
        data.append('email', this.author.value)
        data.append('url', this.author.value)
        data.append('content', this.content.value)
        // data.append('belong', this.id)
        data.append('browser', navigator.userAgent)
        API.postComment(data).then((response) => {
          console.log(response)
          this.content.value = ''
          this.author.value = ''
          this.email.value = ''
          this.url.value = ''
        }).catch((error) => {
          alert(error)
        })
      },
      cancelComment () {
        alert(2)
      },
      getMore() {
        this.currentPage++
        // this.$store.dispatch('GET_COMMENT_LIST', {
        //   page: this.currentPage
        // })
      }
    },
    filters: {
      dateFormat
    }
  }
</script>

<style lang="scss" scoped>
  .comment-wrapper {
    position: relative;
    padding: 12px 20px 0 20px;
    background-color: #fff;
    .slide-fade-enter-active, .slide-fade-leave-active {
      transition: all .3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
      transform: translateY(10px);
      opacity: 0;
    }
    .content {
      .comment-title {
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        h3 {
          font-size: inherit;
        }
        .reply-link {
          padding: 0 5px;
          color: rosybrown;
          cursor: pointer;
          &:hover {
            background-color: skyblue;
          }
        }
      }
      textarea {
        box-sizing: border-box;
        width: 100%;
        min-height: 100px;
        padding: 15px;
        border: 1px solid #ccc;
        resize: none;
      }
      .comment-control {
        display: flex;
        justify-content: space-between;
        .tools {
          display: flex;
          justify-content: space-around;
        }
        .submit-wrap {
          display: flex;
          .submit-btn {
            display: inline-block;
            margin-bottom: 0;
            padding: 6px 12px 4px;
            border: 0;
            border-radius: 0;
            vertical-align: middle;
            text-align: center;
            font-family: "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial, sans-serif;
            line-height: 1.25rem;
            background-color: #E74C3C;
            cursor: pointer;
            &:hover {
              background-color: #D52D1A;
            }
          }
        }
      }
      .comment-info-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        .comment-inp {
          position: relative;
          width: 51%;
          margin-bottom: 10px;
          input {
            width: 100%;
            height: 30px;
            padding: 0 20px;
            border: 1px solid #ddd;
          }
          label {
            background: #f1f1f1;
            position: absolute;
            color: #555;
            display: inline-block;
            top: 0;
            right: -41px;
            width: 108px;
            padding: 5px 10px;
            border-radius: 2px 0 2px 0;
            z-index: 1;
          }
        }
      }
    }
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
