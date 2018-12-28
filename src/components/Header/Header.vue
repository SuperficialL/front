<template>
  <header class="header">
    <div class="logo">
      <h1>
        Superficial Blog
        <small>个人博客</small>
      </h1>
      <i class="icon icon-ego-menu" @click="showMenu"></i>
      <i class="el-icon-search" @click="showSearch"></i>
    </div>
    <div class="header-inner">
      <nav class="nav-wrapper" :class="{show: isShowNav}">
        <ul class="nav-menu">
          <li v-for="root in navigationLink"
              :key="root.id"
              class="nav-item"
          >
            <router-link
              active-class="active"
              :to="{ name:root.url }"
            >
              {{ root.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="search-box" :class="{show: isShowSearch}">
        <input type="text"
               v-model="keywords"
               @keyup.enter="search"
               placeholder="请输入关键字"
        >
        <i class="el-icon-search"></i>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Header',
    data () {
      return {
        Index: 0,
        isActive: true,
        keywords: '',
        isShowNav: false,
        isShowSearch: false
      }
    },
    computed: {
      ...mapState({
        navigationLink: state => state.home.navigationLink
      })
    },
    created () {
    },
    methods: {
      getActive (currentIndex) {
        // 获取切换导航索引
        this.Index = currentIndex
      },
      search () {
      },
      showMenu () {
        // 显示隐藏手机端菜单
        if (this.isShowSearch) {
          this.isShowSearch = !this.isShowSearch
        }
        this.isShowNav = !this.isShowNav
      },
      showSearch () {
        if (this.isShowNav) {
          this.isShowNav = !this.isShowNav
        }
        this.isShowSearch = !this.isShowSearch
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variable.scss";

  .header {
    position: relative;
    width: 100%;
    max-width: 1260px;
    margin: 0 auto;
    .logo {
      h1 {
        height: 60px;
        line-height: 60px;
        color: #f60;
        text-align: center;
      }
      i {
        display: none;
      }
    }
    .header-inner {
      display: flex;
      justify-content: space-between;
      /*background-color: rgba(85, 85, 85, .5);*/
      .nav-wrapper {
        width: 100%;
        transition: all .5s ease;
        .nav-menu {
          display: flex;
          width: 60%;
          .nav-item {
            transition: all .5s ease-in-out;
            a {
              padding: 5px 15px;
            }
            .active {
              background-color: $background-color;
            }
          }
        }
      }
      .search-box {
        position: relative;
        display: flex;
        width: 180px;
        align-items: center;
        overflow: hidden;
        transition: all .3s ease;
        input {
          width: 100%;
          text-indent: 15px;
          height: 100%;
          transition: all .3s ease;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        i {
          position: absolute;
          right: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .header {
      .logo {
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        i {
          display: block;
        }
      }
      .header-inner {
        position: absolute;
        top: 60px;
        width: 100%;
        z-index: 10;
        .nav-wrapper {
          width: 100%;
          opacity: 0;
          transform: translateX(-100%);
          background-color: rgba(85, 85, 85, .5);

          &.show {
            opacity: 1;
            transform: translateX(0px);
          }
          .nav-menu {
            display: block !important;
            width: 60%;
            background-color: #ddd;
          }
        }
        .search-box {
          position: absolute;
          left: 0;
          width: 100%;
          height: 0;
          line-height: 40px;
          transition: all .5s ease;
          &.show {
            height: 40px;
            border: 1px solid #ccc;
          }
          input {
            width: 100%;
          }
          i {
            position: absolute;
            right: 5px;
            width: 35px;
          }
        }
      }
    }
  }
</style>
