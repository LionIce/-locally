// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides:[],
    categories:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/coming_soon',
    //   header:{
    //     'Content-Type':'json'
    //   },
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
    wx.request({
      url: 'https://locally.uieee.com/slides',
      success:res=>{
        // console.log(res);
        this.setData({slides:res.data});
        // console.log(this.data)
      }
    })
    wx.request({
      url: 'https://locally.uieee.com/categories',
      success: res => {
        this.setData({categories:res.data});
       }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})