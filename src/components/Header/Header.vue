<template>
  <header class="header">
    <div class="logo">
      <h1>
        <a class="" href="">Superficial Blog</a>
        <small>个人博客</small>
      </h1>
    </div>
    <div class="header-inner">
      <nav class="nav-wrapper">
        <ul class="nav-menu">
          <li class="nav-item" :class="{ active: isActive === show }">
            <a class="nav-link" href="/">首页</a>
          </li>
          <li class="nav-item"
              v-for="(root,index) in menu"
              :key="index"
              :class="{ active: Index === index }"
              @click="getActive(index)"
          >
            <a class="nav-link" href="#">
              {{ root.name }}
            </a>
            <ul class="sub-menu">
              <li class="sub-menu-item"
                  v-for="(child,c_index) in root.sub_cat"
                  :key="c_index"
              >
                <a href="#">
                  {{ child.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="search-wrapper">
        <div class="search-box">
          <input type="text"
                 v-model="keywords"
                 @keyup.enter="search"
                 placeholder="请输入关键字"
          >
        </div>
        <div class="search" @click="search">
          <i class="el-icon-search"></i>
        </div>
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
        show: true,
        keywords: ''
      }
    },
    computed: {
      ...mapState({
        menu: state => state.home.menu
      })
    },
    created () {
      // 获取菜单
      // this.$store.dispatch('getMenu')
      // this.getMenu()
    },
    methods: {
      // ...mapActions(['getMenu']),
      getActive (currentIndex) {
        this.Index = currentIndex
      },
      search () {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/variable.scss";

  .header {
    position: relative;
    width: 100%;
    flex: 0 0 auto;
    .logo {
      height: 60px;
      color: #f60;
    }
    .header-inner {
      display: flex;
      max-width: 1260px;
      margin: 0 auto;
      justify-content: space-between;
      border-bottom: 4px solid $background-color;
      background-color: #4a4a4a;
      .nav-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .nav-menu {
          display: flex;
          > .nav-item {
            position: relative;
            display: flex;
            align-items: center;
            transition: .5s;
            &.active {
              background-color: $background-color;
            }
            &:hover .sub-menu {
              display: block;
            }
            .nav-link {
              padding: 15px 20px;
              text-decoration: none;
              color: #fff;
              &:hover {
                background-color: $nav-link-hover;
              }
            }
            > .sub-menu {
              display: none;
              position: absolute;
              top: 100%;
              left: 50%;
              z-index: 999;
              min-width: 130px;
              border-radius: 3px;
              background-color: $background-color;
              transform: translateX(-50%);
              .sub-menu-item {
                a {
                  display: block;
                  padding: 15px 20px;
                  &:hover {
                    background-color: $sub-link-hover;
                  }
                }
              }
            }
          }
        }
      }
      .search-wrapper {
        display: flex;
        overflow: hidden;
        transition: all .3s ease;
        border-radius: 30px;
        &:hover .search-box input {
          width: 300px;
          text-indent: 30px;
        }
        .search-box {
          display: block;
          border-radius: 5px;
          input {
            width: 100px;
            text-indent: 15px;
            height: 100%;
            background-color: #eee;
            transition: all .3s ease;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          /*          input:focus, input:hover {
                      width: 300px;
                    }*/
        }
        .search {
          position: relative;
          z-index: 1;
          padding: 15px 20px;
          background-color: #eee;
          cursor: pointer;
          transition: 1s;
          &:hover {
            background-color: $search-bgc;
          }
        }
      }
    }
  }
</style>
