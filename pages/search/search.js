// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotData:['AJ1','The Ten','Surpreme','OFF-WHITE','欧文','喷','Air Max','哈登','科比','詹姆斯'],
    searchData: ['AJ1', 'NIKE'], // 存储搜索历史记录信息
    showModal: true
  },
  // 监听input框的输入内容
  watchInput: function(e) {
    console.log(e.detail.value)
  },
  //清除输入内容
  clearInput: function(e) {
    this.setData({
      searchinput:''
    })
  },
  // 清除历史记录
  clearHistory: function(e) {
    wx.clearStorageSync('searchData');
    this.setData({
      searchData: ''
    })
  },
 // 弹窗自定义事件
  modalCancel: function (e) {
    this.setData({
      showModal: false
    })
  },
  modalConfirm: function (e) {
    this.setData({
      showModal: false
    })
  },
  // 点击软键盘搜索把搜索内容存在历史本地
  insertHistory: function (e) {
    var searchTitle = e.detail.value;
    var save = true;
    for(var i=0;i<this.data.searchData.length;i++) {
      if (searchTitle == this.data.searchData[i]) {
        save = false;
        break;
      }
    }
    // 满足条件不为空且和之前历史不相同
    if ("" != searchTitle && save) {
      var searchLogData = this.data.searchData;
      searchLogData.push(searchTitle);
      wx.setStorageSync('searchData', searchLogData);
      this.setData({
        searchData: wx.getStorageSync('searchData')
      });
    }
    wx.switchTab({
      url: '/pages/home/home'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if ("" != wx.getStorageSync('searchData')) {
      this.setData({
        searchData: wx.getStorageSync('searchData')
      });
    } else {
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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