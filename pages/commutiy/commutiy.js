// pages/commutiy/commutiy.js
Page({

  data: {
    TabCur: 0,
    scrollLeft:0,
    commutiyNavigationList: [{
      id: 0,
      type: 'text',
      text: '广场'
    },{
      id: 1,
      type: 'text',
      text: '树洞'
    },{
      id: 2,
      type: 'text',
      text: '达人分享'
    },{
      id: 3,
      type: 'text',
      text: '更多'
    },]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})