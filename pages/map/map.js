// pages/map/map.js
const app = getApp()
Page({
  data: {
    latitude:null,
    longitude:null,
    scale: 14,
    markers:[],
    includePoints:[],
    people: []
  },
  onLoad: function (options) {
    let title = options.city == undefined ? '全国' : options.city;
    wx.setNavigationBarTitle({
      title: title,
    })

    if(options.city!==undefined){
      let cityPeople = this.allPeople(options.city);
      this.getCityPeople(options.city, cityPeople)
    }else{
      let cityList = this.getCityList();
      for (let i = 0; i < cityList.length; i++){
        let cityPeople = this.allPeople(cityList[i]);
        this.getCityPeople(cityList[i], cityPeople)
      }
    }
  },

  // 获取所有城市
  getCityList(){
    let cityArr = [];
    let data = app.globalData.data;
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].mes.length; j++) {
        cityArr.push(data[i].mes[j].city)
      }
    }
    return Array.from(new Set(cityArr))
  },

  
  getCityPeople(city, cityPeople){
    let that = this;
    wx.request({
      url: `http://api.map.baidu.com/geocoder?address=${city}&output=json&key=37492c0ee6f924cb5e934fa08c6b1676`,
      success: function (res) {
        let lat = res.data.result.location.lat;
        let lon = res.data.result.location.lng;
        that.handleMark(lat, lon, cityPeople)
      }
    })
  },
  allPeople(city){
    let data = app.globalData.data;
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].mes.length; j++) {
        if (data[i].mes[j].city == city) {
          arr.push(data[i].mes[j])
        }
      }
    }
    return arr;
  },
  handleMark(lat, lon, cityPeople){
    for (let i = 0; i < cityPeople.length; i++) {
      let randomX = (Math.random() - 0.5) / 10;
      let randomY = (Math.random() - 0.5) / 10;
      this.data.markers.push({
        id: i,
        latitude: lat + randomX,
        longitude: lon + randomY,
        iconPath: '../img/head.png',
        width: 40,
        height: 40,
        callout:{
          content: cityPeople[i].name,
          color: '#fff',
          fontSize: '16',
          borderRadius: 3,
          bgColor: '#2a77d1',
          padding: 5,
          display: 'ALWAYS'
        }
      })
      this.data.includePoints.push({
        latitude: lat + randomX,
        longitude: lon + randomY,
      })
    }
    console.log(this.data.markers)
    this.setData({
      // latitude: lat,
      // longitude: lon,
      markers: this.data.markers,
      includePoints: this.data.includePoints
    })
  }
})