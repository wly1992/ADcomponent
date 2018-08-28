//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    data: [
      {
        firstLetter: "A", mes: [
          { name: 'a陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'a阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "B", mes: [
          { name: 'b陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'b阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "C", mes: [
          { name: '陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: '阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "D", mes: [
          { name: 'd陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'd阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "E", mes: [
          { name: 'e陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: 'e陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "F", mes: [
          { name: 'f陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: 'e陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "G", mes: [
          { name: 'g陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: 'e陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "H", mes: [
          { name: 'g陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: 'e陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "I", mes: [
          { name: 'g陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: 'e陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "J", mes: [
          { name: 'g陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: 'e陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "K", mes: [
          { name: 'g陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: 'e陈小斌', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: 'e阿斯顿', phone: '134555556', city: '北京', company: 'XXXX信息科技有限公司', group: '高管' }
        ]
      },
      {
        firstLetter: "L", mes: [
          { name: '赵小四', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "M", mes: [
          { name: '赵小四', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "N", mes: [
          { name: '赵小四', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "O", mes: [
          { name: '赵小四', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "P", mes: [
          { name: '赵小四', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "Q", mes: [
          { name: '赵小四', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "R", mes: [
          { name: '赵小四', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "S", mes: [
          { name: '赵小四', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "T", mes: [
          { name: '汤钺', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
        ]
      },
      {
        firstLetter: "U", mes: [
          { name: '王海', phone: '134555556', city: '上海', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: '王林宇', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "V", mes: [
          { name: '王海', phone: '134555556', city: '上海', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: '王林宇', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "W", mes: [
          { name: '王海', phone: '134555556', city: '上海', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: '王林宇', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "X", mes: [
          { name: '王海', phone: '134555556', city: '上海', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: '王林宇', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "Y", mes: [
          { name: '王海', phone: '134555556', city: '上海', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: '王林宇', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      },
      {
        firstLetter: "Z", mes: [
          { name: '张大', phone: '134555556', city: '上海', company: 'XXXX信息科技有限公司', group: '高管' },
          { name: '赵晓', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: '赵晓', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' },
          { name: '赵晓', phone: '134555556', city: '无锡', company: 'XXXX信息科技有限公司', group: '研发' }
        ]
      }
    ]
  }
})