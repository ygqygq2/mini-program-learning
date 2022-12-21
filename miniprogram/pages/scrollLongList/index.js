Page({
  data: {
    list: [{
      id: 0,
      name: '美国'
    },
    {
      id: 1,
      name: '中国'
    },
    {
      id: 2,
      name: '巴西'
    },
    {
      id: 3,
      name: '日本'
    }
    ],
    content: [{
      id: 0,
      name: '美国'
    },
    {
      id: 1,
      name: '中国'
    },
    {
      id: 2,
      name: '巴西'
    },
    {
      id: 3,
      name: '日本'
    }
    ],
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onShareAppMessage() {
    return {
      title: '',
    };
  },
  // 单击左侧菜单
  menuListOnClick: function (e) {
    let me = this;
    me.setData({
      activeViewId: e.target.id,
      currentIndex: e.target.dataset.index
    })
  },

  // 滚动时触发， 计算当前滚动到的位置对应的菜单是哪个
  scrollFunc: function (e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
    for (let i = 0; i < this.data.heightList.length; i++) {
      let height1 = this.data.heightList[i];
      let height2 = this.data.heightList[i + 1];
      if (!height2 || (this.data.scrollTop >= height1 && this.data.scrollTop < height2)) {
        this.setData({
          currentIndex: i
        })
        return;
      }
    }
    this.setData({
      currentIdex: 0
    })
  }
})
