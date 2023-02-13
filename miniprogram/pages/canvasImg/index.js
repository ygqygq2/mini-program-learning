// pages/canvasImg/index.js
Page({
  data: {
    // img: 'https://inews.gtimg.com/newsapp_bt/0/15084535902/1000',
    img: "http://imgcdn.dmzbuy.com/upload/gallery/thumbnail/7908EAE4-9324-8461-AE3AACAE6994-tbl.jpeg",
    canvasImg: "", //生成的canvasImg
    canvasId: "canvasId",
  },
  onLoad() {
    this.getCanvas();
  },
  getCanvas() {
    var mycenter = 0; //文字左右居中显示
    var myheight = 0; //文字高度
    const that = this;
    const query = wx.createSelectorQuery();
    query
      .select("#" + this.data.canvasId)
      .fields({ node: true, size: true })
      .exec((res) => {
        console.log(res);
        const canvas = res[0].node;
        const ctx = canvas.getContext("2d");
        new Promise(function (resolve) {
          // 绘制背景图片
          wx.getImageInfo({
            src: that.data.img, //网络图片,如果不行请换一个
            success(res) {
              console.log(res);
              var width = res.width;
              var height = res.height;
              mycenter = width / 2;
              myheight = height;
              canvas.width = width;
              canvas.height = height;
              const img = canvas.createImage();
              img.src = res.path;
              img.onload = () => {
                ctx.drawImage(img, 0, 0, width, height);
                resolve(true);
              };
            },
          });
        })
          .then(() => {
            ctx.font = "500 32px Arial";
            ctx.textAlign = "center";
            ctx.fillStyle = "#333333";
            ctx.fillText("这是测试文字", mycenter, myheight - 50);
          })
          .then(function () {
            that.transferCanvasToImage(canvas);
          })
          .catch((err) => {});
      });
  },
  //canvas转为图片
  transferCanvasToImage(canvas) {
    const that = this;
    wx.canvasToTempFilePath({
      canvas: canvas,
      success(res) {
        that.setData({
          canvasImg: res.tempFilePath,
        });
        console.log(that.data.canvasImg);
      },
    });
  },
});
