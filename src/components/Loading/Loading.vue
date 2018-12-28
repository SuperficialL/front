<template>
  <div class="loading">
    <div class="loading-box">
      <img src="/static/images/loading.gif" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style scoped>
  .loading-box {
    width: 32px;
    height: 32px;
    margin: 10px auto 0;
  }
</style>
