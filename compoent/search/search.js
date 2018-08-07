Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    disabled: {
      type: String,
      value: true,
    }
  },
  data: {
    // 这里是一些组件内部数据
    mode:'aspectFit',
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    goSearch: function () { 
      wx.navigateTo({
        url: '/pages/search/search'
      })
    }
  }
})