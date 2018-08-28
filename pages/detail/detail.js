// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      mes: JSON.parse(options.mes)
    })
    wx.setNavigationBarTitle({
      title: '详情',
    })
  },
  enterGroup(){
    wx.navigateTo({
      url: '../groupDetail/groupDetail?group='+this.data.mes.group,
    })
  },
  enterMap() {
    wx.navigateTo({
      url: '../map/map?city='+this.data.mes.city,
    })
  },
  call(){
    wx.makePhoneCall({
      phoneNumber: this.data.mes.phone
    })
  }
})