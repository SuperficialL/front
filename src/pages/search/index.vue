<template>
  <div>
  </div>
</template>

<script>
  import API from '@/api'

  export default {
    name: 'search',
    created () {
      API.getSearch(this.$route.query).then(res => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>

</style>
