Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //是光标自动聚焦
    focus: {
      type: String,
      value: false
    },
    value: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: '请输入商品名称和货号'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    searchData: []
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 绑定input输入的值
    watchInput(e){
      this.triggerEvent('watch', { title: e.detail.value})
    },
    // 搜索
    search(e) {
      // 存入本地搜索历史记录
      if ("" !== wx.getStorageSync('searchData')) {
        this.setData({
          searchData: wx.getStorageSync('searchData')
        });
      } else {
        this.setData({
          searchData: []
        });
      }
      // 判断是否输入和历史重复
      let searchTitle = e.detail.value;
      let save = true;
      for (let i = 0; i < this.data.searchData.length; i++) {
        if (searchTitle == this.data.searchData[i]) {
          save = false;
          break;
        }
      }
      // 满足条件不为空且和之前历史不相同
      if ("" !== searchTitle && save) {
        console.log('manzu')
        let searchLogData = this.data.searchData;
        searchLogData.push(searchTitle);
        wx.setStorageSync('searchData', searchLogData);
      }
      if ("" !== searchTitle)
        {this.triggerEvent('search')}
    },
    // 清除数据
    clearInput() {
      this.setData({ value: ''})
      this.triggerEvent('clear')
    }
  }
})