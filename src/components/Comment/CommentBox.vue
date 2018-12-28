<template>
  <transition name="slide-fade">
    <div class="content" v-show="visible">
      <h3>发表你的评论</h3>
      <textarea
        v-model="content"
        placeholder="这儿交给你了 *^-^*"
      >
        </textarea>
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
          <input type="submit" class="submit-btn" value="提交评论" @click="addComment">
        </div>
      </div>
      <div class="comment-info-wrap">
          <div class="comment-inp author">
            <label for="author">昵称(必填)</label>
            <input type="text" id='author' name='author' v-model="author" placeholder="昵称">
          </div>
          <div class="comment-inp email">
            <label for="email">邮箱(必填)</label>
            <input type="text" id='email' name='email' v-model="email" placeholder="邮箱">
          </div>
          <div class="comment-inp url">
            <label for="url">网址</label>
            <input type="text" id='url' name='url' v-model="url" placeholder="网址">
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'CommentBox',
    props: ['articleId'],
    data() {
      return {
        visible: true,
        author: '',
        email: '',
        url: '',
        content: ''
      }
    },
    methods: {
      addComment () {
        // 添加评论
        this.$emit('submit', {
          name: this.author,
          created_time: new Date(),
          content: this.content
        })
        this.author = this.content = this.url = this.email = ''
      },
      cancelComment() {
        this.$emit('cancel')
        this.author = this.content = this.url = this.email = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active,.slide-fade-leave-active {
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
        color:rosybrown;
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
</style>
