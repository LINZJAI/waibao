// preset before starting RTC
import $ from 'jquery'
export default class Presetting {
  userId = ''
  roomId = ''
  init(userId, roomId) {
    this.userId = userId
    this.roomId = roomId
    // // populate userId/roomId
    // $('#userId').val('user_' + parseInt(Math.random() * 100000000))
    // $('#roomId').val(parseInt(Math.random() * 100000))
    // const roomId = this.query('roomId')
    // const userId = this.query('userId')
    // if (roomId) {
    //   $('#roomId').val(roomId)
    // }
    // if (userId) {
    //   $('#userId').val(userId)
    // }

    // $('#main-video-btns').hide()
    // $('.mask').hide()
    setBtnClickFuc()

    // login()

    this.login(false, options => {
      rtc = new RtcClient(options)
      join()
    })
    this.login(true, options => {
      shareUserId = options.userId
      share = new ShareClient(options)
    })
  }

  query(name) {
    const match = window.location.search.match(
      new RegExp('(\\?|&)' + name + '=([^&]*)(&|$)')
    )
    return !match ? '' : decodeURIComponent(match[2])
  }

  login(share, callback) {
    let userId = this.userId
    if (share) {
      userId = 'share_' + userId
    }
    const config = genTestUserSig(userId)
    const sdkAppId = config.sdkAppId
    const userSig = config.userSig
    const roomId = this.roomId

    callback({
      sdkAppId,
      userId,
      userSig,
      roomId
    })
  }
}
