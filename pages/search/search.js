// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hotData:['AJ1','The Ten','Surpreme','OFF-WHITE','欧文','喷','Air Max','哈登','科比','詹姆斯'],
    searchText:'',
    searchData: [], // 存储搜索历史记录信息
    showModal: false, //弹窗状态
    focus: false,
    step: 1, //显示内容状态 1位搜索框 2为内容 3位下拉界面，
    navbar: ['首页', '价格', '新品', '尺码'],
    currentTab: 0,
    scrollTop:1000, 
    array: [
      {
        imgurl: '../../asset/item.jpg',
        text: 'Air jordan 中偶爱十分骄傲是开了房所说的地方大师傅间'
      },
      {
        imgurl: '../../asset/item.jpg',
        text: 'Air jordan 中偶爱十分骄傲是开了房所说的地方大师傅间'
      },
      {
        imgurl: '../../asset/item.jpg',
        text: 'Air jordan 中偶爱十分骄傲是开了房所说的地方大师傅间'
      },
      {
        imgurl: '../../asset/item.jpg',
        text: 'Air jordan 中偶爱十分骄傲是开了房所说的地方大师傅间'
      },
      // {
      //   imgurl: '../../asset/item.jpg',
      //   text: 'Air jordan 哈市开发商开发的'
      // },
      {
        imgurl: '../../asset/item.jpg',
        text: 'Air jordan'
      }
    ]
  },
  // 删除搜索框内容 显示搜索1界面
  clearInput() {
    this.setData({
      searchText:'',
      scrollTop:0,
      step: 1
    })
  },
  // 切换tab
  navbarTap(e) {
    let index = e.currentTarget.dataset.idx;
    this.setData({
      currentTab: index
    })
  },
  // 监听input框的输入内容
  watch(e) {
    let title = e.detail.title;
    // 三种情况 1。是没值显示搜索页面 2。是没开始所搜,显示下拉界面 3。是搜索显示内容界面
    if(title !== '') {
      this.setData({
        searchText: title,
      })
    } else {
      this.setData({
        searchText: title,
        step:1,
        scrollTop:0
      })
    }
  },
  // 搜索方法
  search() {
    let keyword = this.data.searchText;
    let data = wx.getStorageSync('searchData');
    // console.log(data)
    this.setData({
      searchText: keyword,
      searchData:data,
      step:3,
      scrollTop:0
    })
  },
  // 清除历史记录
  clearHistory: function(e) {
    this.setData({
      showModal: true
    })
  },
  // 弹窗自定义事件
  modalConfirm: function(e) {
    wx.clearStorageSync('searchData');
    this.setData({
      searchData: '',
      showModal:false
    })
  },
  modalCancel: function (e) {
    this.setData({
      showModal: false
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
    }
    wx.getSystemInfo({
      success: res => {
        // console.log(res)
        this.setData({
          height: res.windowHeight - 90
        })
      }
    })
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