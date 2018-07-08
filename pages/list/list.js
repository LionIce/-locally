// pages/list/list.js
const fetch = require('../../utils/fetch');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前分类
    category:{},
    //分类下的店铺
    shops:[],
    pageIndex:0,
    pageSize:10,
    hasMore:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    fetch(`categories/${options.cat}`).then(res=>{
      // console.log(res.data);
      this.setData({category:res.data})
      wx.setNavigationBarTitle({
        title: res.data.name
      })

      this.loadMore();
    })
  },
  /**
   * 加载更多 */
  loadMore() {
    if(!this.data.hasMore) return
    let {pageIndex,pageSize}=this.data;
    const params = { _page: ++pageIndex, _limit: pageSize };
    return fetch(`categories/${this.data.category.id}/shops`, params)
      .then(res => {
        const totalCount=parseInt(res.header['X-Total-Count'])
        const hasMore=pageIndex*pageSize<totalCount;
        const shops=this.data.shops.concat(res.data);
        this.setData({ shops ,pageIndex,hasMore})
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(this.data.category.name){
      wx.setNavigationBarTitle({
        title: this.data.category.name
      })
    }
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
    this.setData({shops:[],pageIndex:0,pageSzie:10,hasMore:true});
    this.loadMore().then(()=>wx.stopPullDownRefresh());
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("111");
    this.loadMore();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})