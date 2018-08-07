Component({
  // 这里是父组件传递过来的数据
  properties: {
    height: Number
  },
  data: {
    // 这里是一些组件内部数据
    nav: ['品牌', '系列', '篮球鞋', '跑鞋', '休闲鞋', '潮服', '手办', '配件', '手表', '其他'],
    indexs: 0,
    imgArr: [
      { src: '../../asset/1.png', type: 'ss' },
      { src: '../../asset/2.png', type: 'ss' },
      { src: '../../asset/3.png', type: 'ss' },
      { src: '../../asset/4.png', type: 'ss' },
      { src: '../../asset/5.png', type: 'ss' },
      { src: '../../asset/6.png', type: 'ss' },
      { src: '../../asset/7.png', type: 'ss' },
      { src: '../../asset/8.png', type: 'ss' },
      { src: '../../asset/9.png', type: 'ss' },
      { src: '../../asset/10.png', type: 'ss' },
      { src: '../../asset/11.png', type: 'ss' },
      { src: '../../asset/12.png', type: 'ss' },
      { src: '../../asset/13.png', type: 'ss' },
      { src: '../../asset/14.png', type: 'ss' },
      { src: '../../asset/15.png', type: 'ss' },
      { src: '../../asset/16.png', type: 'ss' },
      { src: '../../asset/17.png', type: 'ss' },
      { src: '../../asset/18.png', type: 'ss' }
    ],
    newImgArr: [],
    title: '全部品牌',
    scrollTop: 0
  },
  methods: {
    // 获取随机数组
    getRandomArrayElements: function (arr, count) {
      var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      var newArr = shuffled.slice(min);
      return newArr;
    },
    // 这里是一个自定义方法
    change: function (event) {
      var index = event.currentTarget.dataset.testid;
      //console.log(this.data.imgArr);
      var title;
      var count = Math.floor(Math.random() * 10);
      var list = [];
      if (this.data.nav[index] !== '其他') {
        title = '全部' + this.data.nav[index]
      } else {
        title = this.data.nav[index]
      }
      if (index == 0) {
        list = this.data.imgArr;
      } else {
        list = this.getRandomArrayElements(this.data.imgArr, count)
      }
      this.setData({
        indexs: index,
        title: title,
        newImgArr: list,
        scrollTop: 0
      })
    },
    customMethod: function () { }
  },
  attached: function () {
    this.setData({
      newImgArr: [
        { src: '../../asset/1.png', type: 'ss' },
        { src: '../../asset/2.png', type: 'ss' },
        { src: '../../asset/3.png', type: 'ss' },
        { src: '../../asset/4.png', type: 'ss' },
        { src: '../../asset/5.png', type: 'ss' },
        { src: '../../asset/6.png', type: 'ss' },
        { src: '../../asset/7.png', type: 'ss' },
        { src: '../../asset/8.png', type: 'ss' },
        { src: '../../asset/9.png', type: 'ss' },
        { src: '../../asset/10.png', type: 'ss' },
        { src: '../../asset/11.png', type: 'ss' }
      ]
    })
  }
})