const app = getApp()

module.exports = (url, data) => {
  // wx.showLoading({ title: 'Loading...' })
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://locally.uieee.com/${url}`,
      success: resolve,
      fail:reject,
      data
    })
  })
}
