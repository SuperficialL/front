<template>
  <aside class="sidebar">
    <!-- Personal Info -->
    <div class="widget social">
      <div class="header">
        <h4 class="title">
          <i class="icon icon-01"></i>
          关注我
          <small>Focus Me</small>
        </h4>
      </div>
      <ul class="content">
        <li class="item">
          <a class="benbo" href="#" target="_blank">
            <i class="icon icon-github"></i>
            <span>Github</span>
          </a>
        </li>
        <li class="item">
          <a class="taobao" href="#" target="_blank">
            <i class="icon icon-icon-mail"></i>
            <span>联系我</span>
          </a>
        </li>
        <li class="item">
          <a class="side-fx" href="#">
            <i class="icon icon-weibo"></i>
            <span>分享本博</span>
          </a>
        </li>
        <li class="item">
          <a class="mail-btn" href="#">
            <i class="icon icon-dingyue"></i>
            <span>订阅我</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Article Sort -->
    <div class="widget el-tabs--card">
      <div class="header">
        <h4 class='title'>
          <i class="icon icon-weibo1"></i>
          最新文章
          <small>Recent Article</small>
        </h4>
      </div>
      <ul class="content">
        <li>
          <a href="#">
            博客文章
          </a>
        </li>
      </ul>
    </div>

    <!-- Article Comment -->
    <div class="widget comment">
      <div class="header">
        <h4 class='title'>
          <i class="icon icon-ego-menu"></i>
          最新评论
          <small>Recent Comment</small>
        </h4>
      </div>
      <ul class="content">
        <li>
          <div class="author"></div>
          <div class="comment">
            <p>
              <a href="#">评论文章</a>
            </p>
            <small>
              评论人 评论于 2018-12-12 12:00:00
            </small>
          </div>
        </li>
      </ul>
    </div>

    <!-- Tags -->
    <div class="widget tag-could">
      <div class="header">
        <h3 class="title">
          <i class="icon icon-subscribe-1-copy"></i>
          标签云
          <small>Tag Cloud</small>
        </h3>
      </div>
      <ul class="content">
        <li class="tag"
            :class="`color-${Math.floor(Math.random() * 8) + 1}`"
            v-for="(item,index) in tags"
            :key="index"
        >
          <a href="#">{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <!-- FriendsLink -->
    <div class="widget friend-link">
      <div class="header">
        <h4 class="title">
          <i class="icon icon-hot"></i>
          友情链接
          <small>Friend Links</small>
        </h4>
      </div>
      <ul class="content">
        <li v-for="(item,index) in friendLink" :key="index">
          <img :src="item.logo">
          <a :href="item.link" title="item.description" target="_blank">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>

    <!-- SiteInfo -->
    <div class="widget site-info">
      <div class="header">
        <h4 class="title">
          <i class="el-paper-clip"></i>
          站点信息
          <small>SiteInfo</small>
        </h4>
      </div>
      <ul class="content">
        <li>
          <img src="#">
          <a href="#" title="#" target="_blank">
            轩陌
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Sidebar',
    computed: {
      ...mapState({
        friendLink: state => state.home.friendLink,
        tags: state => state.home.tags
      })
    }
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    width: 330px;
    .widget {
      margin-bottom: 20px;
      padding: 10px;
      border-radius: 3px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      &:last-child {
        margin-bottom: 0;
      }
      .header {
        padding: 5px 20px;
        line-height: 1.5;
        font-weight: 400;
        border-left: 5px solid #409eff;
        border-bottom: 1px solid #f0f0f0;
        .title {
          font-size: 1rem;
        }
      }
      .content {
        margin-top: 10px;
      }
      &.social .content {
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
        .item {
          font-size: 14px;
          color: #303133;
          cursor: pointer;
          &:hover span {
            color: #f60;
          }
          a {
            writing-mode: vertical-rl; //垂直方向，从右向左
            i {
              font-size: 40px;
            }
            span {
              writing-mode: horizontal-tb; //默认：水平方向，从上到下
              font-size: 14px;
              transition: border-color .5s, background-color .5s, color .5s;

            }
          }
        }
      }
      &.tag-could {
        .content {
          display: flex;
          flex-wrap: wrap;
          .tag {
            margin: 10px 5px 0 0;
            padding: 3px 6px;
            &.color-1 {
              background: #f3a683;
            }

            &.color-2 {
              background: #778beb;
            }

            &.color-3 {
              background: #e77f67;
            }

            &.color-4 {
              background: #f5cd79;
            }

            &.color-5 {
              background: #0fb9b1;
            }

            &.color-6 {
              background: #f8a5c2;
            }

            &.color-7 {
              background: #596275;
            }

            &.color-8 {
              background: #20bf6b;
            }
          }
        }
      }
    }
  }

</style>
