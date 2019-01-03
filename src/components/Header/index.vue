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
          <li class="nav-item">
            <router-link
              :to="{name: 'home'}"
              exact
            >
              首页
            </router-link>
          </li>
          <li class="nav-item"
              v-for="root in navigationLink"
              :key="root.id"
          >
            <router-link
              :to="{name: 'category', params: { id: root.id } }"
            >
              {{ root.name }}
            </router-link>
            <ul class="sub-menu" v-if="root.sub_cat.length">
              <li class="sub-item"
                  v-for="sub_cat in root.sub_cat"
                  :key="sub_cat.id"
              >
                <router-link
                  :to="{name: 'category',params: { id:sub_cat.id } }"
                >
                  {{ sub_cat.name }}
                </router-link>
              </li>
            </ul>
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
    created() {
      this.$store.dispatch('GET_MENU')
    },
    computed: {
      ...mapState({
        navigationLink: state => state.base.navigationLink
      })
    },
    methods: {
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
    background-color: #fff;
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
      align-items: center;
      width: 1260px;
      height: 60px;
      margin: 0 auto;
      .nav-wrapper {
        width: 100%;
        transition: all .5s ease;
        .nav-menu {
          display: flex;
          justify-content: space-between;
          width: 60%;
          height: 30px;
          .nav-item {
            display: flex;
            position: relative;
            align-items: center;
            transition: all .5s ease-in-out;
            &:hover {
              .sub-menu {
                display: block;
              }
            }
            .sub-menu {
              display: none;
              position: absolute;
              top: 30px;
              left: 50%;
              width: 150px;
              z-index: 999;
              border: 1px solid #ccc;
              transform: translateX(-50%);
              text-align: center;
              &:before {
                content: '';
                position: absolute;
                top: 1px;
                border: {
                  width: 5px;
                  style: solid;
                  color: transparent transparent red transparent;
                }
              }
              .sub-item {
                &:hover {
                background-color: skyblue;
              }
                a {
                  display: block;
                  padding: 10px;
                }
              }
            }
            & > a {
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
        height: 30px;
        align-items: center;
        overflow: hidden;
        border: 1px solid #ccc;
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
