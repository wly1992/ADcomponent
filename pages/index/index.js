//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    letterList:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    color:'',
    searchLetter: '',
    showBigLetter: false,
    scrollIntoView: 'Header',
    mark: false,
    searchResult: false,
    searchList: [],
    height:'100%',
    contactList: [],
    windowHeight:''
  },
  onLoad: function () {
    this.data.contactList = app.globalData.data;

    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        let scale = 750/res.windowWidth;
        that.data.windowHeight = res.windowHeight;
        that.setData({
          height: res.windowHeight - 80/scale,
          contactList: that.data.contactList
        })
      }
    })
  },
  touchstart(e){
    let letter = this.changeLetter(e.touches[0].clientY);
    this.data.scrollIntoView = letter;
    this.setData({
      scrollIntoView: letter,
      searchLetter: letter,
      showBigLetter: true,
      color: '#BEBEBE'
    })
  },
  touchmove(e){
    let letter = this.changeLetter(e.touches[0].clientY);
    this.data.scrollIntoView = letter;
    this.setData({
      searchLetter: letter,
      scrollIntoView: letter
    })
  },
  touchend(){
    this.setData({
      showBigLetter: false,
      color: ''
    })
  },
  changeLetter(clientY){
    let spacing = (this.data.windowHeight/10);
    let letterSpace = (this.data.windowHeight*0.8)/26;
    let index = Math.floor((clientY - spacing) / letterSpace);
    if(index>25){
      index = 25;
    }else if(index<0){
      index = 0;
    }
    return this.data.letterList[index]
  },
  swichToMap(e){
    wx.navigateTo({
      url: '../map/map'
    })
  },
  swichToDetail(e){
    wx.navigateTo({
      url: '../detail/detail?mes=' + JSON.stringify(e.currentTarget.dataset.mes)
    })
  },
  swichToGroups(){
    wx.navigateTo({
      url: '../groups/groups'
    })
  },
  search(e){
    let arr = [];
    if (e.detail.value==''){
      this.setData({
        searchResult: false,
        mark: true
      })
      return
    }
    for (let i = 0; i < this.data.contactList.length;i++){
      for (let j = 0; j < this.data.contactList[i].mes.length;j++){
        if (this.data.contactList[i].mes[j].name.includes(e.detail.value)){
          arr.push(this.data.contactList[i].mes[j])
        }
      }
    }
    this.setData({
      searchResult: true,
      searchList: arr,
      mark: false
    })
    console.log(arr)
  },
  focus(){
    this.setData({
      mark:true
    })
  },
  blur(){
    this.setData({
      mark: false
    })
  }
})
