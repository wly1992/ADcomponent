// pages/groupDatail/groupDatail.js
const app = getApp()
Page({
  data: {
    dataList: [],
    letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.group,
    })

    let data = app.globalData.data;
    for (let i = 0; i < data.length; i++) {
      this.data.dataList.push({
        firstLetter: data[i].firstLetter, 
        mes: []
      })
    }
    
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].mes.length; j++) {
        if (data[i].mes[j].group == options.group) {
          this.data.dataList[i].mes.push(data[i].mes[j]);
        }
      }
    }
    console.log(this.data.dataList)
    this.setData({
      dataList: this.data.dataList
    })
    
  }
})