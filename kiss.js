// Original source from https://juejin.im/post/59d2ebcbf265da06516729b8
// Generate random color
// 隨機產生色碼
function randomColor () {
  return `#${Math.random().toString(16).substr(2, 6)}`
}

// Original source from https://juejin.im/post/59d2ebcbf265da06516729b8
// Get minimum value from array
// 取得 Array 中最小值
function minArr (array) {
  return Math.min.apply(null, array)
}
