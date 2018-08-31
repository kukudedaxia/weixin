Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemHeight: {
      type: Number
    },
    content: {
      type: Array,
      value: []
    },
    show: {
      type: String,
      value: true
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    aniStyle: true,  
    margin: 0,
    current: -1,
    price: 1389,
    size: '选择尺码'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clickMask() {
      this.setData({
        aniStyle: false
      })
      setTimeout(()=> {
         this.triggerEvent('close', 
         {
           size: this.data.size,
           price:this.data.price,
           current: this.data.current
         }
         )
      },300)
    },
    change(e) {
      let index;
      // if(e.currentTarget.dataset.price == '--') {
      //   index = -1
      // } else {
        index = e.currentTarget.dataset.index
      // }
      this.setData({
        current: index,
        size: '已选择' + e.currentTarget.dataset.size + '码',
        price: e.currentTarget.dataset.price
      })
    }
  },
  created: function () {
    console.log(this.data)
  },
  attached: function() {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          height: res.windowHeight * 0.6 - 45
        })
      }
    })
    console.log(this.data.height)
    this.setData({
       margin: this.properties.itemHeight/4,
       price: this.data.content[0].price
    })
  }
})