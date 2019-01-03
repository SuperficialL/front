# 前端博客项目

## 介绍

本项目基于Vue全家桶开发的个人博客系统,采用的技术栈为 Webpack + Vue + Vuex + axios + Vue-router + Sass + ES6,整个项目前后端分离,前端使用Vue全家桶渲染,后端博客项目项目采用django + xadmin + djangoUeditor + restframework + mysql地址为https://github.com/SuperficialL/personalBlog


## 发表评论
当发表评论后,重新刷新列表,以查看最新评论(最新评论在最上面)


## 实现点击加载更多评论功能
为`加载更多`按钮给定一个初始页,绑定点击事件,在事件中请求下一页数据,页码加一,然后重新调用API方法重新获取最新一页数据







## 创建项目并安装包
```
npm install
```

### 运行
```
npm run serve
```

### 打包
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
