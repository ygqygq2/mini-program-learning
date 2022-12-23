Page({
  data: {
    list: ["奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶", "奶茶"],
    content: ["珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟", "珍珠奶茶", "鲜百香双响炮", "奶茶三兄弟",],
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
      currentIndex: e.target.dataset.id,
      activeViewId: "content" + e.currentTarget.dataset.id
    })
  },

  // 滚动时触发， 计算当前滚动到的位置对应的菜单是哪个-
  scrollFunc: function (e) {
    this.setData({
      scrollTop: e.detail.scrollTop
    })
    for (let i = 0; i < this.data.content.length; i++) {
      const everyHeight = e.detail.scrollHeight / this.data.content.length
      let height1 = everyHeight * i;
      let height2 = (i + 1) * everyHeight;
      if (!height2 || (this.data.scrollTop >= height1 && this.data.scrollTop < height2)) {
        this.setData({
          currentIndex: i
        })
        return;
      }
    }
    this.setData({
      currentIndex: 0
    })
  },
  // 获取每个菜单对应的高度
  getHeight: function (e) {
    let id = e.target.dataset.id;
    let height = e.detail.height;
    let content = this.data.content;
    content[id] = height;
    this.setData({
      content: content
    })
    console.log(content)
  }
})
