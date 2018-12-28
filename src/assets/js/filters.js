import Vue from 'vue'

Vue.filter('dateFormat', function (dateStr, pattern = '') {
  let date = new Date(dateStr)
  let YY = date.getFullYear()
  let MM = date.getMonth() + 1
  let DD = date.getDate()

  function format (num) {
    return num <= 9 ? '0' + num : num
  }

  if (pattern.toLocaleLowerCase() === 'Y-m-d H:m:s') {
    return `${YY}-${format(MM)}-${format(DD)}`
  } else {
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()
    return `${YY}-${format(MM)}-${format(DD)} ${format(hh)}:${format(mm)}:${format(ss)}`
  }
})
