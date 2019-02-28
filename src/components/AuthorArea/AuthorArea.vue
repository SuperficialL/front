<template>
  <div class="author-area">
    <div class="author-avatar">
      <img src="" alt="">
    </div>
    <div class="des"></div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'AuthorArea',
    computed: {
      ...mapState({
        blogInfo: state => state.base.blogInfo
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
