// pages/personal/personal.js
Page({

      /**
       * 页面的初始数据
       */
      data: {
        list: [
          [{
            text: '我的订单',
            count: '0',
            icon: '../../asset/icon-shop.png'
          }],
          [ {
            text: '账户',
            count: '¥0',
            icon: '../../asset/icon-money.png'
          },{
              text: '卡卷',
              count: '0',
              icon: '../../asset/icon-card.png'
            }],
          [{
            text: '地址管理',
            count: '',
            icon: '../../asset/icon-address.png'
          }, {
            text: '消息通知',
            count: '',
            icon: '../../asset/icon-tongzhi.png'
          }]
        ],
        sex:'',
        userInfo:''
      },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function(options) {
          wx.getUserInfo({
            success: res => {
              console.log(res);
              this.setData({
                userInfo:res.userInfo,
                sex:res.userInfo.gender
              })
            }
          })
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function() {

        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function() {

        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function() {

        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function() {

        },

        /**
         * 页面相关事件处理函数--监听用户下拉动作
         */
        onPullDownRefresh: function() {

        },

        /**
         * 页面上拉触底事件的处理函数
         */
        onReachBottom: function() {

        },

        /**
         * 用户点击右上角分享
         */
        onShareAppMessage: function() {

        }
      })