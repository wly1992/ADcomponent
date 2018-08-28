// pages/groups/groups.js
Page({
  data: {
    groupList: [{
      text: '高管',checked: false
    }, {
        text: '研发', checked: false
    }],
    checkedAll: false
  },

  onLoad: function (options) {
    if (JSON.stringify(options)!='{}'){
      for (let i = 0; i < this.data.groupList.length; i++) {
        if (options.group.includes(this.data.groupList[i].text)) {
          this.data.groupList[i].checked = true
        }
      }
    }
    this.contronAll()
    wx.setNavigationBarTitle({
      title: '群组',
    })
  },
  checkAll(){
    this.data.checkedAll = !this.data.checkedAll;
    this.data.groupList.forEach(function (currentValue, index, arr){
      this.data.groupList[index].checked = this.data.checkedAll
    },this)
    this.setData({
      checkedAll: this.data.checkedAll,
      groupList: this.data.groupList
    })
  },
  checkOne(e){
    let index = e.currentTarget.dataset.index;
    let check = e.currentTarget.dataset.check;
    this.data.groupList[index].checked = !check;
    this.contronAll()
  },

  contronAll(){
    let num = 0;
    for (let i = 0; i < this.data.groupList.length; i++) {
      if (this.data.groupList[i].checked === true) {
        num++
      }
    }
    if (num == this.data.groupList.length) {
      this.data.checkedAll = true
    } else {
      this.data.checkedAll = false
    }
    this.setData({
      checkedAll: this.data.checkedAll,
      groupList: this.data.groupList
    })
  }
})
