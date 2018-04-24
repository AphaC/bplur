import wepy from 'wepy'
// import dt from './datetime'
// import md5 from './md5'
import tip from './tip'

// const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = dt.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
const ACCESS_TOKEN = 'LcC5HXMibP0KM23M91x3sBO8o4F4tI'

const wxRequest = async(params = {}, url) => {
  tip.loading()
  // console.log('utils/wxrequest.js: end of tip start --------------------- > 2')
  let data = params.query || {}
  // console.log('utils/wxrequest.js: end of tip start --------------------- > 3')
  // data.sign = SIGN
  // console.log('utils/wxrequest.js: end of tip start --------------------- > 4')
  // data.time = TIMESTAMP
  // console.log('utils/wxrequest.js: start --------------------- >')
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  })
  // console.log('utils/wxrequest.js: end --------------------- >')
  tip.loaded()
  // console.log(res)
  return res
}

module.exports = {
  wxRequest
}
