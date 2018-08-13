// pages/demo/demo.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图的地址
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true,
    pointColor: '#fff',
    activeColor: '#ff0000',
    // 模板需要的数据
    array: [
      {
        imgurl: '../../asset/demo.jpg',
        text: 'Air jordan'
      },
      {
        imgurl: '../../asset/demo.jpg',
        text: 'Air jordan'
      },
      {
        imgurl: '../../asset/demo.jpg',
        text: 'Air jordan'
      },
      {
        imgurl: '../../asset/demo.jpg',
        text: 'Air jordan'
      },
      {
        imgurl: '../../asset/demo.jpg',
        text: 'Air jordan'
      },
      {
        imgurl: '../../asset/demo.jpg',
        text: 'Air jordan'
      },
      {
        imgurl: '../../asset/demo.jpg',
        text: 'Air jordan'
      },
      {
        imgurl: '../../asset/demo.jpg',
        text: 'Air jordan'
      }
    ],
  },
  // 改变小圆点的出现消失
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  // 改变图片的自动播放
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  // 改变自动切换时间间隔
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  // 改变滑动动画时长
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  goNav() {
    wx.navigateTo({
      url: '/pages/main/main'
    })
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