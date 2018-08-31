// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图的地址
    imgUrls: [
      '../../asset/item.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      
    ],
    autoplay: false,
    duration: 500,
    currentSwiper: 0,
    // 尺码价格表
    sizeShow: false,
    current: -1,
    price: 1300,
    size:[
      { size: 32, price: '--' },
      { size: 33, price: 1000 },
      { size: 34, price: 1010 },
      { size: 35, price: 1300 },
      { size: 36, price: 1599 },
      { size: 37, price: 2000 },
      { size: 32, price: '--' },
      { size: 33, price: 1000 },
      { size: 34, price: 1010 },
      { size: 35, price: 1300 },
      { size: 36, price: 1599 },
      { size: 37, price: 2000 },
      { size: 32, price: '--' },
      { size: 37, price: 2000 },
      { size: 38, price: 3000 }
    ]
  },
  preventD: function() {
    console.log('stop scroll')
  },
  // 轮播图滚动触发函数
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  // 尺码框显示与关闭
  showSize() {
    this.setData({
      sizeShow: true
    })
  },
  closeSize(e) {
    console.log(e)
    this.setData({
      sizeShow: false,
      size: e.detail.size,
      price: e.detail.price,
      current: e.detail.current
    })
  },
  //图片预览
  preview(e) {
    console.log(e)
    wx.previewImage({
      current: this.data.imgUrls[this.data.currentSwiper], // 当前显示图片的http链接
      urls: this.data.imgUrls // 需要预览的图片http链接列表
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onReady: function () {
    // 为了设置size组件里的每一个是正方形
    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: res.windowWidth * 0.2
        })
      }
    })
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